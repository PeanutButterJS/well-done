import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import DetailsIcon from "@material-ui/icons/Details";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AddEditCategoryModal from "./add-edit-category-modal";
import ConfirmDeleteCategoryModal from "./confirm-delete-category-modal";
import ViewDetailsModal from "./view-details-modal";

const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  display: flex;
  z-index: 1100;
  box-sizing: border-box;
  flex-shrink: 0;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: ${(props) => props.theme.colors.siteBlack};
  color: ${(props) => props.theme.colors.white};
  padding: 0 15px;
  height: 70px;
  font-size: 1.8rem;
  align-items: center;
  justify-content: end;
`;

const Hamburger = styled(IconButton)`
  &.MuiButtonBase-root {
    padding: 0;
  }
  .MuiSvgIcon-root {
    width: 3rem;
    height: 3rem;
  }
`;

const StyledMenu = styled(Menu)`
  .MuiPaper-root {
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }
`;

const StyledMenuItem = styled(MenuItem)`
  &.MuiListItem-root {
    font-size: 1.4rem;
  }
`;

const StyledAddIcon = styled(AddIcon)`
  &.MuiSvgIcon-root {
    width: 2rem;
    height: 3rem;
    margin-right: 4px;
  }
`;

const StyledDeleteIcon = styled(DeleteIcon)`
  &.MuiSvgIcon-root {
    width: 2rem;
    height: 3rem;
    margin-right: 4px;
  }
`;

const StyledDetailsIcon = styled(DetailsIcon)`
  &.MuiSvgIcon-root {
    width: 2rem;
    height: 3rem;
    margin-right: 4px;
  }
`;

const StyledEditIcon = styled(EditIcon)`
  &.MuiSvgIcon-root {
    width: 1.6rem;
    height: 3rem;
    margin-right: 8px;
  }
`;

const MenuWrapper = styled.div`
  margin-right: 15px;
`;

export const Header = ({ pageTitle, addCategory, currentCategory }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [addCategoryModalOpen, setAddCategoryModalOpen] = useState();
  const [editCategoryModalOpen, setEditCategoryModalOpen] = useState();
  const [deleteCategoryModalOpen, setDeleteCategoryModalOpen] = useState();
  const [viewCategoryModalOpen, setViewCategoryModalOpen] = useState();

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const openAddCategoryModal = () => {
    setAddCategoryModalOpen(true);
    handleClose();
  };

  const openEditCategoryModal = () => {
    setEditCategoryModalOpen(true);
    handleClose();
  };

  const openDeleteCategoryModal = () => {
    setDeleteCategoryModalOpen(true);
    handleClose();
  };

  const openViewCategoryModal = () => {
    setViewCategoryModalOpen(true);
    handleClose();
  };

  return (
    <StyledHeader>
      <MenuWrapper>
        <Hamburger
          aria-haspopup="true"
          aria-controls="menu"
          color="inherit"
          aria-label="menu"
          onClick={handleMenu}
        >
          <MenuIcon />
        </Hamburger>
        <StyledMenu
          elevation={0}
          id="menu"
          anchorEl={anchorEl}
          keepMounted
          open={!!anchorEl}
          onClose={handleClose}
        >
          <StyledMenuItem onClick={() => openAddCategoryModal(true)}>
            <StyledAddIcon />
            Add Category
          </StyledMenuItem>
          {currentCategory && (
            <StyledMenuItem onClick={() => openEditCategoryModal(true)}>
              <StyledEditIcon />
              Edit Category
            </StyledMenuItem>
          )}
          {currentCategory && (
            <StyledMenuItem onClick={() => openDeleteCategoryModal(true)}>
              <StyledDeleteIcon />
              Delete Category
            </StyledMenuItem>
          )}
          {currentCategory && (
            <StyledMenuItem onClick={() => openViewCategoryModal(true)}>
              <StyledDetailsIcon />
              View Category
            </StyledMenuItem>
          )}
        </StyledMenu>
      </MenuWrapper>
      <div>{pageTitle}</div>
      {(addCategoryModalOpen || editCategoryModalOpen) && (
        <AddEditCategoryModal
          currentCategory={editCategoryModalOpen && currentCategory}
          onCancel={() => {
            setAddCategoryModalOpen(false);
            setEditCategoryModalOpen(false);
          }}
        />
      )}
      {deleteCategoryModalOpen && (
        <ConfirmDeleteCategoryModal
          currentCategory={currentCategory}
          onCancel={() => {
            setDeleteCategoryModalOpen(false);
          }}
        />
      )}
      {viewCategoryModalOpen && (
        <ViewDetailsModal
          currentCategory={currentCategory}
          onCancel={() => {
            setViewCategoryModalOpen(false);
          }}
        />
      )}
    </StyledHeader>
  );
};

Header.propTypes = {
  pageTitle: PropTypes.string,
  currentCategory: PropTypes.object
};

const mapStateToProps = ({ categories }) => ({
  currentCategory: categories.currentCategory
});

export default connect(mapStateToProps)(Header);
