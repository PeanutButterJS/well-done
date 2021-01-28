import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export default createGlobalStyle`  
html {
  font-size: 10px;
  color: ${theme.colors.siteBlack};
  font-family: 'Roboto';
}
`;
