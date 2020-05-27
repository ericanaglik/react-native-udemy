import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import ImageScreen from './src/screens/ImageScreen'
import ColorScreen from './src/screens/ColorScreen'
import HomeScreen from './src/screens/HomeScreen'
import SquareScreen from './src/screens/SquareScreen'
import TextScreen from './src/screens/TextScreen'
import BoxScreen from './src/screens/BoxScreen'

const navigator = createStackNavigator(
  {
    Color: ColorScreen,
    Image: ImageScreen,
    Home: HomeScreen,
    Square: SquareScreen,
    Text: TextScreen,
    Box: BoxScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Welcome"
    }
  }
);

export default createAppContainer(navigator);
