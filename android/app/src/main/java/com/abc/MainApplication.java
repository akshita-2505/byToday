package com.abc;

import android.app.Application;

import com.facebook.react.ReactApplication;
import net.jodybrewster.linkedinlogin.RNLinkedinLoginPackage;
import io.underscope.react.fbak.RNAccountKitPackage;
import com.reactnativecommunity.webview.RNCWebViewPackage;
import com.magus.fblogin.FacebookLoginPackage;
import co.apptailor.googlesignin.RNGoogleSigninPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNLinkedinLoginPackage(),
            new RNAccountKitPackage(),
            new RNCWebViewPackage(),
            new FacebookLoginPackage(),
            new RNGoogleSigninPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
