import PropTypes from "prop-types";
import React from "react";
import Modal from "../common/modal";
import styled from "styled-components";
import { ModalContent } from "../common/modal/parts";
import CategoryIcon from "@material-ui/icons/Category";
import dayjs from "dayjs";

const StyledCategoryIcon = styled(CategoryIcon)`
  &.MuiSvgIcon-root {
    width: 8rem;
    height: 10rem;
    margin-right: 15px;
    fill: ${(props) => props.theme.colors.siteBlack};
  }
`;

const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  color: ${(props) => props.theme.colors.siteBlack};
`;
const DateText = styled.span`
  font-size: 1.3rem;
  color: rgba(0, 0, 0, 0.65);
`;

const Container = styled(ModalContent)`
  min-width: 320px;
  width: auto;
  display: flex;
  padding-top: 20px;
  flex-direction: row;
  overflow: hidden;
`;

const Title = styled.div`
  font-size: 3rem;
  line-height: 3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

export const ViewDetailsModal = ({ onCancel, currentCategory }) => {
  return (
    <Modal isOpen onClose={() => onCancel()}>
      <Container>
        <StyledCategoryIcon />
        <TextWrapper>
          <Title>{currentCategory.name}</Title>
          <DateText>{`Created ${dayjs(currentCategory.id).format(
            "MM/DD/YYYY"
          )}`}</DateText>
        </TextWrapper>
      </Container>
    </Modal>
  );
};

ViewDetailsModal.propTypes = {
  onCancel: PropTypes.func,
  currentCategory: PropTypes.object
};

export default ViewDetailsModal;
