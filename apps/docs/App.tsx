import {type ReactElement} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {AppRegistry} from 'react-native'

// 기본 앱 UI
function MainApp(): ReactElement {
  return (
    <View style={styles.container}>
      <Text>Welcome to the main app!</Text>
    </View>
  )
}

// 조건부로 Storybook UI 로드
let AppEntryPoint = MainApp

console.log(
  'process.env.EXPO_PUBLIC_STORYBOOK_ENABLED',
  process.env.EXPO_PUBLIC_STORYBOOK_ENABLED,
)

if (process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true') {
  // Storybook UI 로드
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  AppEntryPoint = require('./.ondevice').default // .ondevice/index.tsx의 StorybookUIRoot
}

// AppRegistry에 앱 등록
AppRegistry.registerComponent('main', () => AppEntryPoint)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default AppEntryPoint
