import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../src/theme/MainTheme';

addDecorator((story) => <ThemeProvider theme={lightTheme}>{story()}</ThemeProvider>);
