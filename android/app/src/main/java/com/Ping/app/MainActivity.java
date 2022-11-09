package com.Ping.app;
import com.getcapacitor.community.database.sqlite.CapacitorSQLite;

import android.os.Bundle;

import com.getcapacitor.Plugin;
import com.getcapacitor.BridgeActivity;
import com.google.firebase.analytics.FirebaseAnalytics;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity
{
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    registerPlugin(FirebaseAnalytics.class);
    // Initializes the Bridge
    //this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      //add(CapacitorSQLite.class);
      //add(com.capactiorjs.plugins.pushnotitifcations.pushnotitifcationsPlugin.class);
    }

  private void registerPlugin(Class<FirebaseAnalytics> firebaseAnalyticsClass) {
  }

}
