import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const onBoardingLayout = () => {

  return (
    <>
      <Stack>
        <Stack.Screen
          name="welcomeScreen1"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="welcomeScreen2"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="welcomeScreen3"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="welcomeScreen4"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      

      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default onBoardingLayout;
