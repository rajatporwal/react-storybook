import React from 'react'
import Input from './Input'

export default {
  title: 'Input',
  component: Input
}

export const Small = () => <Input size='small' placeholder='Small size' />
export const Medium = () => <Input size='medium' placeholder='Medium size' />
export const Large = () => <Input size='large' placeholder='Large size' />

// to update story name without changing story export name
Small.storyName = 'Small Input' 