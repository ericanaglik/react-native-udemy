import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import ImageScreen from './src/screens/ImageScreen'
import ColorScreen from './srs/screens/ColorScreen'

const navigator = createStackNavigator(
  {
    Color: ColorScreen,
    Image: ImageScreen
  },
  {
    initialRouteName: "Color",
    defaultNavigationOptions: {
      title: "Colors"
    }
  }
);

export default createAppContainer(navigator);
