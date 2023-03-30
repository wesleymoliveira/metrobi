import React from "react";
import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

import theme from "../src/styles/theme";

const AllTheProviders = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui, options) => {
  return render(ui, { wrapper: AllTheProviders, ...options });
};

const snapshotRenderer = (component) => {
  return renderer.create(
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  );
};

export * from "@testing-library/react";

export { customRender as render, snapshotRenderer  };
