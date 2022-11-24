import {NavigationContainer} from '@react-navigation/native'; 
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Index from './screens/Index'; 
import Details from './screens/Details';
import Create from './screens/Create';
import Edit from './screens/Edit';
import Delete from './screens/Delete';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator  initialRouteName="Index">
          <Stack.Screen name="Index" component={Index} options={{ title: 'Contacts' }}/>
          <Stack.Screen name="Details" component={Details} options={{ title: 'Profile' }} />
          <Stack.Screen name="Create" component={Create} options={{ title: 'Create contact' }}/>
          <Stack.Screen name="Edit" component={Edit} options={{ title: 'Update contact' }}/>
          <Stack.Screen name="Delete" component={Delete} options={{ title: 'Delete contact' }}/>
        </Stack.Navigator>
      </NavigationContainer>
  ); 
}