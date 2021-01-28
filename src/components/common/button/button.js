import styled from "styled-components";
import MaterialButton from "@material-ui/core/Button";

export const Button = styled(MaterialButton)`
  &.MuiButton-root {
    font-size: 1.3rem;
    background: ${(props) => props.theme.colors.siteBlack};
    color: ${(props) => props.theme.colors.white};

    :hover {
      background-color: rgba(0, 0, 0, 0.75);
    }
  }
`;

export default Button;
