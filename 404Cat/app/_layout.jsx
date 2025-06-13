import { Stack } from 'expo-router';

export default function TabLayout() {

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Início',
          headerShown: false,
          statusBarHidden: true,
        }}
      />
      <Stack.Screen
        name="principal"
        options={{
          title: 'Principal',
          headerTintColor: '#828d8f',
          statusBarHidden: true,
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="gato"
        options={{
          title: 'gato',
          headerTintColor: '#828d8f',
          statusBarHidden: true,
          headerShown: false,
        }}
       
      />
       <Stack.Screen
        name="sobre"
        options={{
          title: 'sobre',
          headerTintColor: '#828d8f',
          statusBarHidden: true,
          headerShown: false,
        }}
       
      />
    </Stack>
  );
}
