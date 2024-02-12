import React from 'react'
import { Appbar } from 'react-native-paper'
import { getHeaderTitle } from '@react-navigation/elements'

const MainAppBar = (props) => {
  const title = getHeaderTitle(props.options, props.route.name)
  return (
    <Appbar.Header style={{ backgroundColor: '#75E28E' }}>
      {props.back ? <Appbar.BackAction onPress={() => props.navigation.goBack()} /> : null}
      <Appbar.Content title={title} />
      {props.back ? null : <Appbar.Action icon={props.icon} onPress={props.getUserPosition} />}
      {props.back ? null : <Appbar.Action icon='cog' onPress={() => props.navigation.navigate('Settings')} />}
    </Appbar.Header>
  )
}

export default MainAppBar