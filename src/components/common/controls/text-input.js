import TextField from "@material-ui/core/TextField";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Feild = styled(TextField)`
  width: 100%;
  .MuiInputBase-root {
    font-size: 1.5rem;
    &.Mui-focused:after,
    &:after {
      border-bottom-color: ${(props) => props.theme.colors.siteBlack};
    }
  }
  .MuiInputLabel-formControl {
    font-size: 1.5rem;
    &.Mui-focused {
      color: ${(props) => props.theme.colors.siteBlack};
    }
  }
  .MuiFormHelperText-root.Mui-error {
    font-size: 1.1rem;
  }
`;

export const TextInput = ({
  name,
  onChange,
  value,
  label,
  error,
  required
}) => {
  return (
    <Feild
      className={`${name}-textfield`}
      required={required}
      error={!!error}
      id={name}
      value={value}
      onChange={(e) => onChange(e)}
      label={label}
      helperText={error}
    />
  );
};

TextInput.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.bool
};

export default TextInput;
