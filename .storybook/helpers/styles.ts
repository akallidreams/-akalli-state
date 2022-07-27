import { AkNavTypes } from "../../src";

interface IStyles {
  drawerProps: AkNavTypes.IDrawer;
  textProps: {
    color: string;
    fontSize: string;
  };
  bg: string;
}

export const styles: IStyles = {
  drawerProps: {
    position: "left",
    bg: "#35a0fe",
    labelColor: "white",
  },
  textProps: {
    color: "#35a0fe",
    fontSize: "20px",
  },
  bg: "#303030",
};
