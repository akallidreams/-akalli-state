import { AkNavTypes } from "../../index";
import { styles } from "./styles";
import { ScreenAuth } from "./ScreenAuth";
import { ScreenApp } from "./ScreenApp";

const ROUTES = {
  AUTH: "auth-route",
  APP: "app-route",
};

export const routerConfig: AkNavTypes.IRouter = {
  authInitial: ROUTES.AUTH,
  appInitial: ROUTES.APP,
  drawer: styles.drawerProps,
  activeStack: "app",
  env: "dev",
  authStack: [
    {
      Component: ScreenAuth,
      name: ROUTES.AUTH,
      bg: styles.bg,
    },
  ],
  appStack: [
    {
      Component: ScreenApp,
      name: ROUTES.APP,
      bg: styles.bg,
    },
  ],
};
