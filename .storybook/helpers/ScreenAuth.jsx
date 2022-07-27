import { Button, VStack, Text } from "native-base";
import { AkNavigation } from "../../index.ts";
import { styles } from "./styles";

export const ScreenAuth = () => {
  const { drawer } = AkNavigation.useNav();
  return (
    <VStack>
      <Text {...styles.textProps}>Auth stack</Text>
      <Button onPress={drawer.open()}>Open menu</Button>
    </VStack>
  );
};
