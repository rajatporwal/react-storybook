// preview.js is the configuration file for stories we write

import React from "react"
import { addDecorator } from "@storybook/react"
import { withConsole } from "@storybook/addon-console"
import Center from "../src/commons/Center"

// add Center component to every story
addDecorator(story => <Center>{story()}</Center>)

// add console addOn
addDecorator((story, context) => withConsole()(story)(context))

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}