import {action} from '@storybook/addon-actions'
import type {Meta, StoryObj} from '@storybook/react'
import {View} from 'react-native'
import {MyButton} from './Button'

const ButtonProps = {
  title: 'Button',
  component: MyButton,
  args: {
    text: 'Hello world',
  },
  decorators: [story => <View style={{padding: 16}}>{story()}</View>],
} satisfies Meta<typeof MyButton>

export default ButtonProps

type Story = StoryObj<typeof ButtonProps>

export const Basic: Story = {
  args: {
    onPress: action('onPress'),
  },
}
