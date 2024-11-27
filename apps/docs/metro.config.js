/* eslint-disable @typescript-eslint/no-require-imports */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path')
const {getDefaultConfig} = require('expo/metro-config')

const defaultConfig = getDefaultConfig(__dirname)

// eslint-disable-next-line import/order
const withStorybook = require('@storybook/react-native/metro/withStorybook')

module.exports = withStorybook(defaultConfig, {
  enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true',
  configPath: path.resolve(__dirname, './.ondevice'),
  onDisabledRemoveStorybook: true,
})
