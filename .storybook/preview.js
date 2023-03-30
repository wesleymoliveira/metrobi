import React from "react";
import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";

import { CustomThemeProvider } from "../src/styles/CustomThemeProvider";
import theme from "../src/styles/theme";
window.React = React;

/* export const decorators = [
  (Story) => {
    <CustomThemeProvider>
      <Story />
    </CustomThemeProvider>;
  },
]; */

const themes = [theme];
addDecorator(withThemesProvider(themes), ThemeProvider);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
