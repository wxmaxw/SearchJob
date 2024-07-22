import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
// Gesture handler must be imported at the top to avoid issues on Android 

import { Provider } from "react-redux";
import store from "./src/context/AuthProvider/store";
import Jobs from "./src/pages/Jobs";
import JobDetail from "./src/pages/JobDetail/JobDetail";
import FavoritedJobs from "./src/pages/FavoritedJobs";


function JobStack(){
  const Stack = createStackNavigator();

  return(
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false, headerTitle:"Jobs"}} name="JobScreen" component={Jobs}/>
      <Stack.Screen name="JobDetail" 
      component={JobDetail}
      options={({ route }) => ({
        title: route.params.name, // or whatever you want to display
        headerTitleAlign: "center",
        headerTintColor: "#C90035"
        
      })}/>
      <Stack.Screen name='FavoritedJobs' component={FavoritedJobs}/>
    </Stack.Navigator>
  );
}


function App() {
  const Drawer = createDrawerNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator  screenOptions={{
                drawerActiveTintColor: "#C90035", // Metin rengi
                drawerActiveBackgroundColor: "#FFEBEB", // Arka plan rengi
              }}>
          <Drawer.Screen name='Jobs' 
          component={JobStack} 
          options={{headerTitle: "Jobs",flex:1, headerTitleAlign: "center", headerTintColor: "#C90035" , headerPressColor: "#C90035"}}/>
          <Drawer.Screen name='Favorited Jobs' component={FavoritedJobs} options={{flex:1, headerTitleAlign:"center", headerTintColor: "#C90035" }}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
