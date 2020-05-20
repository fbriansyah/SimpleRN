import * as React from 'react'
import { View, Button } from 'react-native'
import PropTypes from 'prop-types'

function TestComponent(props) {
  return (
    <View>
      <Button title="Press Me" onPress={props.onPress} />
    </View>
  )
}

TestComponent.prototype = {
  onPress: PropTypes.func.isRequired
}

export default TestComponent
