import type {Meta, StoryObj} from '@storybook/react'
import {Button, View} from 'react-native'

const meta = {
  title: 'MyButton',
  component: Button,
  // args: {
  //   text: 'Hello world',
  // },
  decorators: [
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Story => (
      <View style={{padding: 16}}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>
