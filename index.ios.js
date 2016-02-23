/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict'

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  StatusBarIOS,
  View
} from 'react-native'

import Mapbox from 'react-native-mapbox-gl'
import reactMixin from 'react-mixin'
import secrets from './secrets'

var mapRef = 'mapRef'

class Neverland extends Component {
  constructor (props) {
    super(props)
    return {
      center: {
        latitude: -26.4537736,
        longitude: -49.1179425
      },
      zoom: 15
    }
  }

  onRegionChange (location) {
    this.setState({ currentZoom: location.zoom })
  }

  onRegionWillChange (location) {
    console.log(location)
  }

  onUpdateUserLocation (location) {
    console.log(location)
  }

  onLongPress (location) {
    console.log('Long pressed', location)
  }

  render () {
    StatusBarIOS.setHidden(true)
    return (
      <View style={styles.container}>
        <Mapbox
          style={styles.map}
          direction={0}
          rotateEnabled={true}
          scrollEnabled={true}
          zoomEnabled={true}
          showsUserLocation={true}
          ref={mapRef}
          accessToken={secrets.development.mapboxToken}
          styleURL={this.mapStyles.emerald}
          userTrackingMode={this.userTrackingMode.none}
          centerCoordinate={this.state.center}
          zoomLevel={this.state.zoom}
          onRegionChange={this.onRegionChange}
          onRegionWillChange={this.onRegionWillChange}
          onUpdateUserLocation={this.onUpdateUserLocation}
          onLongPress={this.onLongPress}
           />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  }
})

reactMixin(Neverland.prototype, Mapbox.mixin)

AppRegistry.registerComponent('Neverland', () => Neverland)
