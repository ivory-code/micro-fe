import AsyncStorage from '@react-native-async-storage/async-storage'
import {view} from './storybook.requires'
import {AppRegistry} from 'react-native'

const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
})

AppRegistry.registerComponent('main', () => StorybookUIRoot)

export default StorybookUIRoot
