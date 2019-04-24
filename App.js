/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, {Component} from 'react';
import {Platform, StyleSheet, View, TouchableOpacity, Text} from 'react-native';
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
import BraintreeDropIn from 'react-native-braintree-dropin-ui';

import stripe from 'tipsi-stripe'
import axios from 'axios'


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

    stripe.setOptions({
      publishableKey: 'pk_test_6ssM0FAWg7LEzELebjw9iLb500qJyJUu5k',
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

  braintTree = async  () => {

    BraintreeDropIn.show({
      clientToken: 'eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiJleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpGVXpJMU5pSXNJbXRwWkNJNklqSXdNVGd3TkRJMk1UWXRjMkZ1WkdKdmVDSjkuZXlKemRXSWlPaUprWTNCemNIa3lZbkozWkdweU0zRnVJaXdpWlhod0lqb3hOVFUyTURJd016UTBMQ0pwYzNNaU9pSkJkWFJvZVNJc0ltMWxjbU5vWVc1MElqcDdJbkIxWW14cFkxOXBaQ0k2SW1SamNITndlVEppY25ka2FuSXpjVzRpTENKMlpYSnBabmxmWTJGeVpGOWllVjlrWldaaGRXeDBJanAwY25WbGZTd2lhblJwSWpvaVpHRmxNRFpoTlRFdE5UaGhOUzAwTVRKakxUZ3lNMkl0TnpBeVpEWXpNRGxoTmpVNElpd2ljbWxuYUhSeklqcGJJbTFoYm1GblpWOTJZWFZzZENKZExDSnZjSFJwYjI1eklqcDdmWDAuQUNnQTJiMGFhRnNyUlFtNGtScFRFTWpScndhYWRWRGw1dUNvUUVkYzllTUkyMFFUc2h0aU1rRUpLSHJ0X2NsSUVSb0M2eUFKUGJIN3RlS1RkYzZ0UnciLCJjb25maWdVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvZGNwc3B5MmJyd2RqcjNxbi9jbGllbnRfYXBpL3YxL2NvbmZpZ3VyYXRpb24iLCJncmFwaFFMIjp7InVybCI6Imh0dHBzOi8vcGF5bWVudHMuc2FuZGJveC5icmFpbnRyZWUtYXBpLmNvbS9ncmFwaHFsIiwiZGF0ZSI6IjIwMTgtMDUtMDgifSwiY2hhbGxlbmdlcyI6WyJjdnYiLCJwb3N0YWxfY29kZSJdLCJlbnZpcm9ubWVudCI6InNhbmRib3giLCJjbGllbnRBcGlVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvZGNwc3B5MmJyd2RqcjNxbi9jbGllbnRfYXBpIiwiYXNzZXRzVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhdXRoVXJsIjoiaHR0cHM6Ly9hdXRoLnZlbm1vLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhbmFseXRpY3MiOnsidXJsIjoiaHR0cHM6Ly9vcmlnaW4tYW5hbHl0aWNzLXNhbmQuc2FuZGJveC5icmFpbnRyZWUtYXBpLmNvbS9kY3BzcHkyYnJ3ZGpyM3FuIn0sInRocmVlRFNlY3VyZUVuYWJsZWQiOnRydWUsInBheXBhbEVuYWJsZWQiOnRydWUsInBheXBhbCI6eyJkaXNwbGF5TmFtZSI6IkFjbWUgV2lkZ2V0cywgTHRkLiAoU2FuZGJveCkiLCJjbGllbnRJZCI6bnVsbCwicHJpdmFjeVVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS9wcCIsInVzZXJBZ3JlZW1lbnRVcmwiOiJodHRwOi8vZXhhbXBsZS5jb20vdG9zIiwiYmFzZVVybCI6Imh0dHBzOi8vYXNzZXRzLmJyYWludHJlZWdhdGV3YXkuY29tIiwiYXNzZXRzVXJsIjoiaHR0cHM6Ly9jaGVja291dC5wYXlwYWwuY29tIiwiZGlyZWN0QmFzZVVybCI6bnVsbCwiYWxsb3dIdHRwIjp0cnVlLCJlbnZpcm9ubWVudE5vTmV0d29yayI6dHJ1ZSwiZW52aXJvbm1lbnQiOiJvZmZsaW5lIiwidW52ZXR0ZWRNZXJjaGFudCI6ZmFsc2UsImJyYWludHJlZUNsaWVudElkIjoibWFzdGVyY2xpZW50MyIsImJpbGxpbmdBZ3JlZW1lbnRzRW5hYmxlZCI6dHJ1ZSwibWVyY2hhbnRBY2NvdW50SWQiOiJzdGNoMm5mZGZ3c3p5dHc1IiwiY3VycmVuY3lJc29Db2RlIjoiVVNEIn0sIm1lcmNoYW50SWQiOiJkY3BzcHkyYnJ3ZGpyM3FuIiwidmVubW8iOiJvZmZsaW5lIiwiYXBwbGVQYXkiOnsic3RhdHVzIjoibW9jayIsImNvdW50cnlDb2RlIjoiVVMiLCJjdXJyZW5jeUNvZGUiOiJVU0QiLCJtZXJjaGFudElkZW50aWZpZXIiOiJtZXJjaGFudC5jb20uYnJhaW50cmVlcGF5bWVudHMuc2FuZGJveC5CcmFpbnRyZWUtRGVtbyIsInN1cHBvcnRlZE5ldHdvcmtzIjpbInZpc2EiLCJtYXN0ZXJjYXJkIiwiYW1leCIsImRpc2NvdmVyIl19LCJicmFpbnRyZWVfYXBpIjp7InVybCI6Imh0dHBzOi8vcGF5bWVudHMuc2FuZGJveC5icmFpbnRyZWUtYXBpLmNvbSIsImFjY2Vzc190b2tlbiI6InNhbmRib3hfZjdkcjVjX2RxNnNzMl9qa3M3eHRfNGhzcHNoX3FiNyJ9fQ==',
      merchantIdentifier: '5rnr3gcmrv5v3ttc',
      countryCode: 'US',
      currencyCode: 'USD',
      merchantName: 'Your Merchant Name for Apple Pay',
      orderTotal:'50',
      googlePay: false,
      applePay: true,
    })
        .then(result => console.log(result))
        .catch((error) => {
          if (error.code === 'USER_CANCELLATION') {
            // update your UI to handle cancellation
          } else {
            // update your UI to handle other errors
          }
        });
  }
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

  //Refer : https://blog.bam.tech/developper-news/setup-stripe-react-native-nodejs
  stripeRequestPayment = () => {
    return stripe
        .paymentRequestWithCardForm()
        .then(stripeTokenInfo => {
          debugger
          this.doPayment(100, stripeTokenInfo.tokenId)
          console.warn('Token created', { stripeTokenInfo });
        })
        .catch(error => {
          debugger
          console.warn('Payment failed', { error });
        });
  };

  doPayment = (amount, tokenId) => {
    debugger
    const body = {
      amount: amount,
      tokenId: tokenId,
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    return axios
        .post('http://localhost:3000/doPayment', body, { headers })
        .then(({ data }) => {
          return data;
        })
        .catch(error => {
          return Promise.reject('Error in making payment', error);
        });
  };

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


    /*

     <LinkedInModal
            clientID="86gsyu8d2hhq64"
            clientSecret="knhgXuteg7E3P9Jg"
            redirectUri="http://www.google.com"
            onSuccess={token => alert(token)}
        />
     */

    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={()=> this.stripeRequestPayment()}>
          <Text style={{color: 'red'}}>Login</Text>
        </TouchableOpacity>
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