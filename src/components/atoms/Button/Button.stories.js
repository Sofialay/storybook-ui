import React from 'react'
import { Children } from 'react'

import { Button } from './Button'

export default {
    title: 'Atoms/Button',
    component: Button,
}

const Template = (args) => <Button {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    color: 'primary',
    size: 'medium',
    children: 'Button'
}

