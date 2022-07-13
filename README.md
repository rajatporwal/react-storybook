# Getting Started with React Story Book

## Available Scripts

In the project directory, you can run:

### `npx sb init`

- **main.js** is the configuration file for storybook itself
- **preview.js** is the configuration file for stories we write

 -  Install addon storybook source to [display source code](https://storybook.js.org/addons/@storybook/addon-storysource#displaying-full-source)

### `yarn add @storybook/addon-storysource --dev`

 -  Update story name without changing story export name

### `Small.storyName = 'Small Input' `

- [sorting stories](https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy#sorting-stories)

- **global decorator** : wraps every stories with some component

### `addDecorator(story => <Center>{story()}</Center>)`

- **local decorator** : wraps all the compoennt of the selected story

### `decorators: [story => <Center>{story()}</Center>]`

- run storybook - http://localhost:6006
### `yarn storybook`
