import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import AppNavigator from "./navigation/AppNavigator";
import AuthNavigator from "./navigation/AuthNavigator";
import LoadingScreen from "./screens/LoadingScreen";

export default function App() {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // Logged in
        setUser(authUser);
      } else {
        // Logged out
        setUser(null);
      }
      if (initializing) {
        setInitializing(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (initializing) return <LoadingScreen />;
  if (!user) {
    return <AuthNavigator />;
  } else if (user) {
    return <AppNavigator />;
  }
}
