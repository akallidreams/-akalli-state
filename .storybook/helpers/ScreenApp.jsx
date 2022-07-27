import { Button, VStack, Text } from "native-base";
import { useEffect } from "react";
import { AkNavigation } from "../../index.ts";
import { styles } from "./styles";

export const ScreenApp = () => {
  const { drawer } = AkNavigation.useNav();
  return (
    <VStack>
      <Text {...styles.textProps}>App stack</Text>
      <Button onPress={() => drawer.open()} bg="white">
        Open menu
      </Button>
    </VStack>
  );
};
