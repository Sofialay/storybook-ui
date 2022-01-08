import React from 'react'

import { Button } from './Button'

export default {
    title: 'Atoms/Button',
    component: Button,
}

const Template = (args) => <Button {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary',
    children: 'Button'
}

export const Outline = Template.bind({})
Outline.args = {
    type: 'outline',
    children: 'Button'
}

export const Text = Template.bind({})
Text.args = {
    type: 'text',
    children: 'Button',
    isInline: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
    type: 'disabled',
    children: 'Button'
}