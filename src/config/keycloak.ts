import { tokenActions } from "@/redux/features/token-slice";
import { userInfoActions } from "@/redux/features/user-info";
import { rehydration, store } from "@/redux/store";
import { launchExpiredToast, launchToast } from "@/utils/toastify";
import Keycloak, { KeycloakInitOptions } from "keycloak-js";

export const keycloak = Keycloak({
  url: process.env.NEXT_PUBLIC_KEYCLOAK_URL,
  realm: process.env.NEXT_PUBLIC_KEYCLOAK_REALM,
  clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID,
  credentials: {
    secret: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_SECRET,
  },
  "ssl-required": "external",
  "confidential-port": 0,
});

let initOptions: KeycloakInitOptions = { onLoad: "check-sso" };

const KeycloakInitialize = () => {
  keycloak.onAuthSuccess = () => {
    store.dispatch(
      userInfoActions.setUserInfo({
        //@ts-ignore
        name: keycloak.tokenParsed?.name,
        //@ts-ignore
        email: keycloak.tokenParsed?.email,
        //@ts-ignore
        given_name: keycloak.tokenParsed?.given_name,
        //@ts-ignore
        preferred_username: keycloak.tokenParsed?.preferred_username,
        //@ts-ignore
        logged: "logged",
      })
    );

    store.dispatch(
      tokenActions.setToken({
        authenticated: keycloak.authenticated,
        refreshToken: keycloak.refreshToken,
        refreshTokenExpiresIn: keycloak.refreshTokenParsed?.exp,
        sessionId: keycloak.sessionId,
        token: keycloak.token,
        tokenExpiresIn: keycloak.tokenParsed?.exp,
        timeSkew: keycloak.timeSkew,
      })
    );
  };

  keycloak.onAuthRefreshSuccess = () => {
    store.dispatch(
      tokenActions.setToken({
        authenticated: keycloak.authenticated,
        refreshToken: keycloak.refreshToken,
        refreshTokenExpiresIn: keycloak.refreshTokenParsed?.exp,
        sessionId: keycloak.sessionId,
        token: keycloak.token,
        tokenExpiresIn: keycloak.tokenParsed?.exp,
        timeSkew: keycloak.timeSkew,
      })
    );
  };

  keycloak.onAuthError = () => {
    store.dispatch(tokenActions.resetToken());
    store.dispatch(userInfoActions.resetUserInfo());
    keycloak.clearToken();
  };

  keycloak.onAuthLogout = () => {
    store.dispatch(tokenActions.resetToken());
    store.dispatch(userInfoActions.resetUserInfo());
    keycloak.clearToken();
  };

  keycloak.onTokenExpired = () => {
    keycloak
      .updateToken(5)
      .success((refreshed) => {
        if (refreshed) {
          launchToast({
            msg: "Sessão renovada",
            type: "success",
            toastId: "success-refreshToken",
          });
        }
      })
      .error(() => {
        launchExpiredToast(
          "Sessão expirada. Por favor, faça login novamente.",
          "warning",
          () => {
            document.body.style.pointerEvents = "auto";
            document.body.style.opacity = "1";

            keycloak.login();
          }
        );
      });
  };

  keycloak.init(initOptions);
};

export const initialize = async () => {
  await rehydration()
    .then(() => {
      initOptions = {
        token: store.getState().token.token,
        refreshToken: store.getState().token.refreshToken,
        timeSkew: store.getState().token.timeSkew,
      };
    })
    .then(() => {
      KeycloakInitialize();
    });
};
