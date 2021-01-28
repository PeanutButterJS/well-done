import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import Modal from "../common/modal";
import styled from "styled-components";
import { addCategory as addCategoryAction } from "../../common-actions";
import { Title, ButtonRow, ModalContent } from "../common/modal/parts";
import Button from "../../components/common/button/button";

const Container = styled(ModalContent)`
  width: 320px;
`;

const Text = styled.div`
  font-size: 1.3rem;
`;

export const ConfirmDeleteCategoryModal = ({
  onCancel,
  addCategory,
  categories,
  currentCategory
}) => {
  const deleteCategory = () => {
    const newCategories = [
      ...categories.filter((category) => category.id !== currentCategory.id)
    ];

    addCategory(newCategories);
    onCancel();
  };

  return (
    <Modal isOpen onClose={() => onCancel()}>
      <Container>
        <Title>Delete Category</Title>
        <Text>{`Are you sure you want to delete "${currentCategory.name}"?`}</Text>
        <ButtonRow>
          <Button onClick={() => deleteCategory()}>Yes</Button>
        </ButtonRow>
      </Container>
    </Modal>
  );
};

ConfirmDeleteCategoryModal.propTypes = {
  onCancel: PropTypes.func,
  addCategory: PropTypes.func,
  currentCategory: PropTypes.object
};

const mapStateToProps = ({ categories }) => ({
  categories: categories.categories
});

export default connect(mapStateToProps, {
  addCategory: addCategoryAction
})(ConfirmDeleteCategoryModal);
