# Overview

This library is part of a larger framework with many solutions that you can access at www.akalli-framework.com. All the modules are independent so you can use it without the other ones but we recommend give it a try due the fact they make much easier to implement the features navigation(@akalli/navigation), global state(@akalli/state) and icons(@akalli/icons).

you can easily access all modules in our expo template... $$$$$$$

## Quick start

This package helps to use redux toolkit in an easier way just sending your slices you are able to manipulate the data without concerns like configuration.

## Instalation

`npm install @akalli/state react-redux redux-persist redux-persist-transform-filter @react-native-async-storage/async-storage @reduxjs/toolkit`

Example:

```tsx
const ChildComponent = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(slice.actions.login());
  }, []);
  const isLoggedIn = useSelector((state: IState) => state?.auth?.isLoggedIn);
  if (isLoggedIn) {
    return <Text>You are logged in</Text>;
  } else {
    return <Text>You are not logged in</Text>;
  }
};
```

## Configuration

```tsx
interface IAuthState {
  isLoggedIn: boolean;
}

const slice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    login: (state: IAuthState) => {
      state.isLoggedIn = true;
    },
  },
});

export const { clearstore, store, useAppDispatch, persistor } =
  AkState.reduxInit({
    auth: slice.reducer,
  });
```

At your entry point level:

```tsx
export default function App() {
  return (
    <StateProvider store={store} persistor={persistor}>
      <View>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
        <ChildComponent />
      </View>
    </StateProvider>
  );
}
```

# Contribute

# Publish a new version

1.  Replace main with `index.ts` on `package.json`
2.  Delete all dependencies from `package.json`
3.  npm publish

# Development

1.  Replace main with `node_modules/expo/AppEntry.js` in `package.json`
2.  Add all packages again to dependencies in `package.json`
3.  `expo start` or `npm start` and scan QR code on `expo go`

# Dependencies of package.json

```json
    "@react-native-async-storage/async-storage": "~1.17.3",
    "babel-plugin-transform-inline-environment-variables": "^0.4.3",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "expo": "~45.0.0",
    "expo-status-bar": "~1.3.0",
    "react-native": "0.68.2",
    "react-native-reanimated": "^2.8.0",
    "react-native-safe-area-context": "4.2.4",
    "react-native-web": "0.17.7",
    "react-redux": "^7.2.6",
    "redux-persist": "^6.0.0",
    "redux-persist-transform-filter": "^0.0.20",
    "@reduxjs/toolkit": "^1.7.2",
    "react-native-gesture-handler": "~2.2.1"
```
