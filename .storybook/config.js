
import { configure, addDecorator } from '@storybook/react';
import themeDecorator from "./themeDecorator"

// automatically import all files ending in *.stories.tsx
configure(require.context('../src', true, /\.stories\.tsx?$/), module);

addDecorator(themeDecorator);
