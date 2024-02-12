import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
  settingsArea: {
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
})

const Settings = (props) => {
  const [selectedType, setSelectedType] = useState(props.mapType)

  return (
    <View style={styles.settingsArea}>
      <Text style={[styles.heading, { color: props.backgroundColor }]}>Map Type</Text>
      <Picker
        selectedValue={selectedType}
        onValueChange={(itemValue) => {
          setSelectedType(itemValue)
          props.setMapType(itemValue)
        }}>
        <Picker.Item label='Standard' value='standard' />
        <Picker.Item label='Terrain' value='hybrid' />
        <Picker.Item label='Satellite' value='satellite' />
      </Picker>
    </View>
  )
}

export default Settings