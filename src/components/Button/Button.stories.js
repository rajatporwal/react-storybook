import React from 'react'
import Button from './Button'

// default export is for parent/main folder
export default {
    title: 'Button',     // mandatory and should be unique
    component: Button
}

// childrens of Button hierarchy
export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>