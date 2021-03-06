# Learning Expo CLI

Just one of the things I'm learning. <https://github.com/hchiam/learning>

Follow the steps here: <https://expo.io/learn>

```bash
npm install expo-cli --global
expo init my-new-project
cd my-new-project
expo start
```

## Connection problems?

For windows: https://medium.com/@colin_78999/solving-network-response-timed-out-when-using-expo-on-windows-b486c22d5584

Or consider setting up a simulator/emulator on your computer:

- https://docs.expo.io/versions/v36.0.0/workflow/ios-simulator/
- https://docs.expo.io/versions/v36.0.0/workflow/android-studio-emulator/

I had to update switch node versions with `nvm use `, the deps in package.json, update the `sdkVersion` in app.json, and use the "Tunnel" connection. The app seems to work even if I dismiss the JS/native version mismatch message.

## Yeoman generators you can try out instead

<https://www.npmjs.com/package/generator-create-redux-app>

<https://www.npmjs.com/package/generator-rn-toolbox>

and use React browser developer tools ([Firefox add-on](https://addons.mozilla.org/en-US/firefox/addon/react-devtools) or [Chrome extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) -> open dev tools -> Components tab)
