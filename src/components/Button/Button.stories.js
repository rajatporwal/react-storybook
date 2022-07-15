import { action, actions } from '@storybook/addon-actions'
import React from 'react'
import Center from '../Center/Center'
import Button from './Button'

// default export is for parent/main folder
export default {
    title: 'Button',     // mandatory and should be unique
    component: Button,
    args: {             // pass default props
        children: 'Default Button from Args',
        onClick: action('Click handler')
    },
    decorators: [story => <Center>{story()}</Center>],       // add Center component to each Button story
}

// childrens of Button hierarchy
export const Primary = () => <Button variant='primary'>Primary Test</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>

const Template = args => <Button {...args} />

export const PrimaryA = Template.bind({})

PrimaryA.args = {
    variant: 'primary',
    children: 'Primary Args'
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
    variant: 'secondary',
    // children: 'Secondary Args'
}

export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
    ...PrimaryA.args,
    children: 'Long Primary A',
    ...actions('onClick', 'onMouseOver')
}