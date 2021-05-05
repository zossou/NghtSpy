import 'react-native-gesture-handler';
import React, { Component }  from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/screens/Home/Home_page';
import SignInPhone from './src/screens/LoginWithPhone/SignInPhone';
import TypingBornDate from './src/screens/LoginWithPhone/TypingBornDate';
import TypingEmail from './src/screens/LoginWithPhone/TypingEmail';
import TypingName from './src/screens/LoginWithPhone/TypingName';
import { AuthContext } from "./src/apps_communs/context";




/*
* this const contains only login(phone number) screen
*/
const loginWithPhoneNumberStack = createStackNavigator();
const loginWithPhoneNumber = () => (
    <loginWithPhoneNumberStack.Navigator>
        <loginWithPhoneNumberStack.Screen 
          name="SignInPhone" 
          component={SignInPhone}  
          options={{ headerShown : false }}
        />
        <loginWithPhoneNumberStack.Screen 
          name="TypingEmail" 
          component={TypingEmail}  
          options={{ headerShown : false }}
        />
        <loginWithPhoneNumberStack.Screen 
          name="TypingName" 
          component={TypingName}  
          options={{ headerShown : false }}
        />
        <loginWithPhoneNumberStack.Screen 
          name="BornDate" 
          component={TypingBornDate}  
          options={{ headerShown : false }}
        />
  </loginWithPhoneNumberStack.Navigator>
);


/*
* this const contains only Home screen
*/
const HomePageStack = createStackNavigator();
const HomePageScreen = () => (
  <HomePageStack.Navigator>
    <HomePageStack.Screen 
      name="signin"
      component={HomePage} 
      options={{ headerShown : false }}
    />
    <AppRootStack.Screen
      name="SignInPhone"
      component={loginWithPhoneNumber}
      options={{
        animationEnabled: false
      }}
    />
  </HomePageStack.Navigator>
);

/*
* this const contains only login (apple counts ) screen
* Warning: The screen doesn't exist yet
*==========================================================
*/
/*
const loginWithAppleCountsStack = createStackNavigator();
const loginWithAppleCounts = () => (
  <loginWithAppleCountsStack.Navigator>
    <loginWithAppleCountsStack.Screen 
      name="SignInApple"
      component={SignInAppleCounts} 
      options={{ headerShown : false }}
    />
  </loginWithAppleCountsStack.Navigator>
);


/*
* this const contains only login (FaceBook counts ) screen
* Warning: The screen doesn't exist yet
*==========================================================
*/
/*
const loginWithFBCountsStack = createStackNavigator();
const loginWithFBCounts = () => (
  <loginWithFBCountsStack.Navigator>
    <loginWithFBCountsStack.Screen 
      name="SignInFaceBook"
      component={SignInFBCounts} 
      options={{ headerShown : false }}
    />
  </loginWithFBCountsStack.Navigator>
);
*/

/**
 * Our main AppStack with every app screens, accessible once user is logged in
 * Warning: The screen doesn't exist yet.
 * "headerShown= false" it's just an example
 *==========================================================
 */
/*
const AppScreensStack = createStackNavigator();
const AppScreens = () => (
    <AppScreensStack.Navigator>
        <AppScreensStack.Screen 
          name="Maps" 
          component={MapsStack}  
          options={{ headerShown : false }}
        />
        <AppScreensStack.Screen 
          name="MapDetails" 
          component={MapDetailsStack}  
          options={{ headerShown : false }}
        />
        <AppScreensStack.Screen 
          name="Infos" 
          component={InfosStack}  
          options={{ headerShown : false }}
        />
        <AppScreensStack.Screen 
          name="Story" 
          component={StoryStack}  
          options={{ headerShown : false }}
        />
        <AppScreensStack.Screen 
          name="StoryAdd" 
          component={StoryAddStack}  
          options={{ headerShown : false }}
        />
        <AppScreensStack.Screen 
          name="CheckGeolocation" 
          component={CheckGeolocationStack}  
          options={{ headerShown : false }}
        />
        <AppScreensStack.Screen 
          name="Messageries" 
          component={MessagerieStack}  
          options={{ headerShown : false }}
        />
        <AppScreensStack.Screen 
          name="MessagerieDeleteConversation" 
          component={MessagerieDeleteConversationStack}  
          options={{ headerShown : false }}
        />
        <AppScreensStack.Screen 
          name="MessagerieDetailsConversation" 
          component={MessagerieDetailsConversationStack}  
          options={{ headerShown : false }}
        />
        <AppScreensStack.Screen 
          name="MapNotifications" 
          component={MapNotificationStack}  
          options={{ headerShown : false }}
        />
        <AppScreensStack.Screen 
          name="Recherches" 
          component={RechercheStack}  
          options={{ headerShown : false }}
        />
  </AppScreensStack.Navigator>
);
*/

/**
 * Our AppContainer that will load a quick Loading screen in charge of choosing if we display the Login or App stack
 * ==========================================================
 */

const AppRootStack = createStackNavigator();
const AppRootScreen = ({ userToken }) => (
  <AppRootStack.Navigator headerMode="none">
    {userToken ? (
      <AppRootStack.Screen
        name="SignInPhone"
        component={loginWithPhoneNumber}
        options={{
          animationEnabled: false
        }}
      />
    ) : (
      <AppRootStack.Screen
        name="Home"
        component={HomePageScreen}
        options={{
          animationEnabled: false
        }}
      />
    )}
  </AppRootStack.Navigator>
);

/**
 * Our main App parent component
 */

    function App() {

      const [isLoading, setIsLoading] = React.useState(true);
      const [userToken, setUserToken] = React.useState(null);
    
      const authContext = React.useMemo(() => {
        return {
          signIn: () => {
            setIsLoading(false);
            setUserToken("asdf");
          },
          signUp: () => {
            setIsLoading(false);
            setUserToken("asdf");
          },
          signOut: () => {
            setIsLoading(false);
            setUserToken(null);
          }
        };
      }, []);
    

  		return (
      <AuthContext.Provider value={this.authContext}>
            <NavigationContainer>
              <AppRootScreen userToken={this.userToken}/>
            </NavigationContainer>
      </AuthContext.Provider>
		);
	}
export default App
