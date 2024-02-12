import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%',
  },
});

const Map = (props) => {
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    setMarker({
      latitude: props.location.latitude,
      longitude: props.location.longitude,
    });
  }, [props.location]);

  return (
    <MapView
      style={styles.map}
      region={props.location}
      mapType={props.mapType}
      onLongPress={props.onMapLongPress}
    >
      {marker && <Marker coordinate={marker} title="My Location" />}
    </MapView>
  );
};

export default Map;