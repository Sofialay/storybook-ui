import { Story } from '@storybook/react'

import { Button, ButtonProps } from './Button'

export default {
    title: 'Atoms/Button',
    component: Button,
}

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary',
}

export const Outline = Template.bind({})
Outline.args = {
    type: 'outline',
}

export const Text = Template.bind({})
Text.args = {
    type: 'text',
    isInline: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
    type: 'disabled',
}