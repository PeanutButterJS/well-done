import React from "react";
import Header from "./components/header/header";
import CategoriesManager from "./components/categories/components/categories-manager";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./global-styles";
import { theme } from "./theme";

const Page = styled.main`
  position: relative;
  top: 70px;
`;

const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header pageTitle="Categories" />
      <Page>
        <CategoriesManager />
      </Page>
    </ThemeProvider>
  </div>
);

export default App;
