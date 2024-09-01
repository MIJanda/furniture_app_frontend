import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from '../navigation/BottomTabNavigation';

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Bottom Navigation"
        component={BottomTabNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}


