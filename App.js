import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen'

const navigator = createStackNavigator(
  {
    List: ListScreen,
    Image: ImageScreen
  },
  {
    initialRouteName: "Image",
    defaultNavigationOptions: {
      title: "Pokemon"
    }
  }
);

export default createAppContainer(navigator);
