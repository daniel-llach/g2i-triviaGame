import React from 'react'
import {Provider} from './store'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import routes from './routes'

const navigationHeader = {
  defaultNavigationOptions: {
    headerStyle: {
      height: 100,
      backgroundColor: '#f5f2f0',
      borderBottomColor: '#f5f2f0',
    },
  },
}

const MainNavigator = createStackNavigator(routes, navigationHeader)
const Navigation = createAppContainer(MainNavigator)

const App = () => (
  <Provider>
    <Navigation />
  </Provider>
)

export default App
