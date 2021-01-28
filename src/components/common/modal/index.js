import PropTypes from "prop-types";
import React from "react";
import Dialog from "@material-ui/core/Dialog";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";

const Close = styled(ClearIcon)``;

const StyledIconButton = styled(IconButton)`
  &.MuiIconButton-root {
    top: 13px;
    position: absolute;
    right: 14px;
    padding: 4px;
    z-index: 2;

    cursor: pointer;
    background: transparent;
    color: ${(props) => props.theme.colors.siteBlack};
    .MuiSvgIcon-root {
      width: 3.5rem;
      height: 3.5rem;
    }
  }
`;

const StyledModal = styled(Dialog)`
  .MuiPaper-root {
    box-shadow: 6px 6px 6px #00000029;
    border-radius: 5px;
    padding: 10px;
    &::-webkit-scrollbar {
      width: 7px;
      height: 7px;
      background-color: #f0f0f0;
    }
    &::-webkit-scrollbar-track {
      border-radius: 10px;
      background: rgba(0, 0, 0, 0.1);
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: rgba(0, 0, 0, 0.2);
    }
    &::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.1);
    }
    &::-webkit-scrollbar-thumb:active {
      background: rgba(0, 0, 0, 0.1);
    }
  }
  .MuiDialog-paperWidthSm {
    max-width: none;
  }
`;

export const Modal = ({
  children,
  onClose,
  isOpen = false,
  maxWidth = "sm",
  className
}) => (
  <StyledModal
    onClose={onClose}
    open={isOpen}
    maxWidth={maxWidth}
    className={className}
  >
    <StyledIconButton>
      <Close onClick={onClose} />
    </StyledIconButton>
    {children}
  </StyledModal>
);

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  className: PropTypes.string
};

export default Modal;
