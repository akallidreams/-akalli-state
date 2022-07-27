import "react-native-gesture-handler";
import { storiesOf } from "@storybook/react-native";
import { Center, Link, NativeBaseProvider, Text, VStack } from "native-base";
import { styles } from "../helpers/styles";
import { AkNavigation } from "../../index.ts";
import { routerConfig } from "../helpers";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { store } from "../helpers/store";

const persistor = persistStore(store);

const ProviderContainer = ({ Component }) => (
  <NativeBaseProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <Center h="full" w="full">
        <Component />
      </Center>
    </Provider>
  </NativeBaseProvider>
);

const drawerInterface = `
interface IDrawer: {
  position: 'left',
  bg: c.primary || 'black',
  labelColor: c.white || 'black',
},
`;

storiesOf("Router features", module)
  .addDecorator((getStory) => (
    <ProviderContainer
      Component={() => (
        <Center w="full" h="full" bg={styles.bg} borderWidth="2px" py="30%">
          <Text {...styles.textProps}>{drawerInterface}</Text>
          {getStory()}
          <Link
            _text={{ ...styles.textProps }}
            href="https://www.figma.com/files/project/57125856/Akalli?fuid=1089570626196579450"
          >
            Acess our FIGMA
          </Link>
        </Center>
      )}
    />
  ))
  .add("Menu", () => (
    <ProviderContainer
      Component={() => (
        <VStack>
          <AkNavigation.Router config={routerConfig} />
        </VStack>
      )}
    />
  ));

//   .addDecorator((getStory) => <Center>{getStory()}</Center>)
