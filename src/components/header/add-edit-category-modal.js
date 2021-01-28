import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";
import Modal from "../common/modal";
import styled from "styled-components";
import { addCategory as addCategoryAction } from "../../common-actions";
import TextInput from "../common/controls/text-input";
import { Title, ButtonRow, ModalContent } from "../common/modal/parts";
import Button from "../../components/common/button/button";

const Container = styled(ModalContent)`
  width: 300px;
`;

export const AddEditCategoryModal = ({
  onCancel,
  addCategory,
  categories,
  currentCategory
}) => {
  const form = useFormik({
    initialValues: {
      name: currentCategory?.name || ""
    },
    onSubmit: (values) => {
      let newCategories = [];
      if (currentCategory) {
        newCategories = [
          ...categories.map((category) => {
            if (category.id === currentCategory.id) {
              return {
                ...category,
                name: values.name
              };
            }
            return category;
          })
        ];
      } else {
        newCategories = [
          {
            id: Date.now(),
            name: values.name
          },
          ...categories
        ];
      }

      addCategory(newCategories);
      onCancel();
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = "How about a name for your category";
      }
      return errors;
    }
  });

  return (
    <Modal isOpen onClose={() => onCancel()}>
      <form onSubmit={(values) => form.handleSubmit(values)} noValidation>
        <Container>
          <Title>{currentCategory ? "Edit Category" : "Add Category"}</Title>
          <TextInput
            required
            label="Category Name"
            name="name"
            value={form.values.name}
            onChange={form.handleChange}
            error={form.errors.name}
          />
          <ButtonRow>
            <Button type="submit">{currentCategory ? "Edit" : "Add"}</Button>
          </ButtonRow>
        </Container>
      </form>
    </Modal>
  );
};

AddEditCategoryModal.propTypes = {
  onCancel: PropTypes.func,
  addCategory: PropTypes.func,
  currentCategory: PropTypes.object
};

const mapStateToProps = ({ categories }) => ({
  categories: categories.categories
});

export default connect(mapStateToProps, {
  addCategory: addCategoryAction
})(AddEditCategoryModal);
