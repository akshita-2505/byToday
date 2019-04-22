/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
var { FBLogin, FBLoginManager } = require('react-native-facebook-login');
import InstagramLogin from 'react-native-instagram-login'
import RNAccountKit, {
  Color,
  StatusBarStyle,
} from 'react-native-facebook-account-kit'
import LinkedInModal from 'react-native-linkedin'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


type Props = {};
export default class App extends Component<Props> {

  componentDidMount(): void {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
      accountName: '', // [Android] specifies an account name on the device that should be used
      iosClientId: '756143807640-k5cs04jjch0h1r6f5bdtlm5kfdm5tnki.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      debugger
      alert(userInfo )
      this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  facebookAuthentication = async  () => {
    // Configures the SDK with some options
    // RNAccountKit.configure({
    //   responseType: 'token'|'code',
    //   titleType: 'login',
    //   initialAuthState: '',
    //   initialEmail: 'some.initial@email.com',
    //   initialPhoneCountryPrefix: '+91', // autodetected if none is provided
    //   initialPhoneNumber: '123-456-7890',
    //   facebookNotificationsEnabled: true|false, // true by default
    //   readPhoneStateEnabled: true|false, // true by default,
    //   receiveSMS: true|false, // true by default,
    //   countryWhitelist: ['AR'], // [] by default
    //   countryBlacklist: ['US'], // [] by default
    //   defaultCountry: 'AR',
    //   viewControllerMode: 'show'|'present', // for iOS only, 'present' by default
    //   getACallEnabled: true|false
    // })


    RNAccountKit.loginWithPhone()
        .then((token) => {
          if (!token) {
            alert('Login cancelled')
          } else {
            debugger
            alert(`Logged with phone. Token: ${token}`)
          }
        }).catch((e)=>alert(e))
  }

  render() {

    /*
     <GoogleSigninButton
            style={{ width: 192, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={this.signIn}
            disabled={false} />
            */

    /*
        <FBLogin style={{ marginBottom: 10, }}
                 ref={(fbLogin) => { this.fbLogin = fbLogin }}
                 permissions={["email","user_friends"]}
                 loginBehavior={FBLoginManager.LoginBehaviors.Native}
                 onLogin={function(data){
                   console.log("Logged in!");
                   console.log(data);
                   alert(data.credentials )
                 }}
        />
*/

    /*
    <TouchableOpacity onPress={()=> this.instagramLogin.show()}>
          <Text style={{color: 'red'}}>Login</Text>
        </TouchableOpacity>
        <InstagramLogin
            ref= {ref => this.instagramLogin= ref}
            clientId='0d497564b3fb48adb01bec1ad843544d'
            redirectUrl='http://www.inst.com'
            scopes={['public_content', 'follower_list']}
            onLoginSuccess={(token) => this.setState({ token })}
            onLoginFailure={(data) => console.log(data)}
        />
        */


    /*

     <TouchableOpacity onPress={()=> this.facebookAuthentication()}>
          <Text style={{color: 'red'}}>Login</Text>
        </TouchableOpacity>
  */


    return (
      <View style={styles.container}>

        <LinkedInModal
            clientID="86gsyu8d2hhq64"
            clientSecret="knhgXuteg7E3P9Jg"
            redirectUri="http://www.google.com"
            onSuccess={token => alert(token)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});