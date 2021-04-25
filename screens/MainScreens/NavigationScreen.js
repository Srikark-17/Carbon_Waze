import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import MapView, { Marker } from "react-native-maps";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colors from "./config/colors";
import { IconButton } from "react-native-paper";

import * as Location from "expo-location";
import MapViewDirections from "react-native-maps-directions";

const App = () => {
  const [location, setLocation] = useState();
  const [errorMsg, setErrorMsg] = useState(null);
  const [geocodedDestination, setGeocodedDestination] = useState();
  const [mapRoutingActive, setMapRoutingActive] = useState();
  const [
    reverseGeocodedCurrentLocation,
    setReverseGeocodedCurrentLocation,
  ] = useState();
  const [typedAddress, setTypedAddress] = useState();
  const destination = {
    latitude: 37.1,
    longitude: -85,
  };
  const information = {
    co2Reduced: 10,
    ETA: 8,
    miles: 4,
    walkscore: 99
  };
  let realDestination = {};

  const geocodeLocation = async () => {
    let geocodedAddress = await Location.geocodeAsync(typedAddress);
    console.log(geocodedAddress);
    realDestination = {
      latitude: geocodedAddress.latitude,
      longitude: geocodedAddress.longitude,
    };
    setGeocodedDestination(geocodedAddress);
    setMapRoutingActive(true);
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS === "android" && !Constants.isDevice) {
        setErrorMsg(
          "Oops, this will not work on Snack in an Android emulator. Try it on your device!"
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location.coords);
      let reverseGeocodedCurrentLocation = await Location.reverseGeocodeAsync(
        location.coords
      );
      console.log(reverseGeocodedCurrentLocation);
      setReverseGeocodedCurrentLocation(reverseGeocodedCurrentLocation);
    })();
  }, []);

  const GOOGLE_MAPS_APIKEY = "AIzaSyDyQHeTSGuhn_DPNZMnukVeJfC1F0qb1rk";

  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        {reverseGeocodedCurrentLocation ? (
          <Text style={styles.locationText}>
            Current Location: {reverseGeocodedCurrentLocation[0].name}{" "}
            {reverseGeocodedCurrentLocation[0].city}{" "}
            {reverseGeocodedCurrentLocation[0].region}{" "}
            {reverseGeocodedCurrentLocation[0].country}
          </Text>
        ) : (
          <ActivityIndicator />
        )}
      </View>
      {location ? (
        <MapView
          style={styles.map}
          provider={MapView.PROVIDER_GOOGLE}
          zoomControlEnabled={true}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {/* <Marker coordinate={geocodeLocation ? geocodeLocation[0] : destination} /> */}
          <Marker
            coordinate={geocodedDestination ? realDestination : destination}
          />
          {mapRoutingActive ? (
            <MapViewDirections
              origin={location.coords}
              destination={geocodedDestination ? realDestination : destination}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor="black"
            />
          ) : (
            <Marker />
          )}
          <Marker
            coordinate={location.coords}
            title="You are here."
            description="Your Current Location."
            image={require("../../assets/current.png")}
          />
        </MapView>
      ) : (
        <ActivityIndicator />
      )}
      {/* <View style={styles.search}>
        {location ? <MapView>
          <TextInput
            placeholder="Search Sustainable Routes"
            placeholderTextColor="#777777"
            style={styles.searchBarInput}
            onChangeText={setTypedAddress}
          />
          <MapViewDirections
            origin={location.coords}
            destination={geocodedDestination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="black"
          />
          <Marker
            coordinate={location.coords}
            title="You are here."
            description="Your Current Location."
            image={require("../../assets/current.png")}
          />
        </MapView> : <ActivityIndicator/>}
      </View>
      ) : (
      <ActivityIndicator />) */}
      <View style={styles.search}>
        <TextInput
          placeholder="Type your destination"
          placeholderTextColor="#777777"
          style={styles.searchBarInput}
          onChangeText={setTypedAddress}
        />
        <IconButton
          icon="check"
          color="#fff"
          size={20}
          style={{ bottom: 5, left: 30 }}
          onPress={() => geocodeLocation()}
        />
      </View>
      <View style={styles.widget}>
        <View style={styles.individualStatContainer}>
          <Text style={styles.widgetTitle}>Gas Savings</Text>
          {mapRoutingActive ? (
            <Text style={styles.widgetStat}>{information.co2Reduced}%</Text>
          ) : (
            <Text style={styles.widgetStat}>0%</Text>
          )}
        </View>
        <View style={styles.individualStatContainer}>
          <Text style={styles.widgetTitle}>Miles</Text>
          {mapRoutingActive ? (
            <Text style={styles.widgetStat}>{information.miles}</Text>
          ) : (
            <Text style={styles.widgetStat}>0</Text>
          )}
        </View>
        <View style={styles.individualStatContainer}>
          <Text style={styles.widgetTitle}>ETA</Text>
          {mapRoutingActive ? (
            <Text style={styles.widgetStat}>{information.ETA} min</Text>
          ) : (
            <Text style={styles.widgetStat}>0 min</Text>
          )}
        </View>
        <View style={styles.individualStatContainer}>
          <Text style={styles.widgetTitle}>Walk Score</Text>
          {mapRoutingActive ? (
            <Text style={styles.widgetStat}>{information.walkscore}</Text>
          ) : (
            <Text style={styles.widgetStat}>0</Text>
          )}
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
  },
  searchBarInput: {
    color: "#fff",
  },
  locationContainer: {
    backgroundColor: colors.primary,
    width: wp(100),
    height: hp(12),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 25,
  },
  search: {
    flex: 1,
    position: "absolute",
    top: hp(9.7),
    marginTop: Platform.OS === "ios" ? 40 : 20,
    flexDirection: "row",
    backgroundColor: "#2A2A2A",
    alignSelf: "center",
    borderRadius: 12,
    padding: 10,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
    justifyContent: "center",
    width: wp(80),
    height: hp(6),
    paddingVertical: hp(1.08),
    paddingLeft: hp(3.5),
    borderRadius: 12,
    marginBottom: hp(4.7),
  },
  locationContainerRight: {
    flexDirection: "row",
    marginRight: wp(4.83),
    marginTop: hp(5.58),
    width: wp(20),
    height: hp(5),
    justifyContent: "space-around",
    alignItems: "center",
  },
  locationText: {
    color: colors.white,
    fontSize: hp(2),
    marginLeft: wp(2.42),
    fontFamily: "Avenir",
  },
  icon: {
    color: colors.white,
  },
  map: {
    width: wp(100),
    height: hp(88),
    alignSelf: "flex-end",
  },
  widget: {
    backgroundColor: colors.primary,
    width: wp(87.39),
    height: hp(15),
    borderRadius: 20,
    bottom: hp(30),
    flexDirection: "row",
    padding: 20,
    alignItems: "baseline",
  },
  individualStatContainer: {
    flex: 0.3,
    alignItems: "center",
  },
  widgetTitle: {
    fontFamily: "Avenir",
    fontWeight: "600",
    fontSize: hp(1.73),
    color: "#fff",
    marginBottom: 20,
  },
  widgetStat: {
    fontFamily: "Avenir",
    fontWeight: "600",
    fontSize: hp(1.73),
    color: "#FFCC57",
  },
});
