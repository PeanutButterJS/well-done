import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import CategoryIcon from "@material-ui/icons/Category";
import dayjs from "dayjs";

const StyledCategoryIcon = styled(CategoryIcon)`
  &.MuiSvgIcon-root {
    width: 4rem;
    height: 4rem;
    margin-right: 15px;
    fill: ${(props) =>
      props.$isCurrentCategory
        ? props.theme.colors.white
        : props.theme.colors.siteBlack};
  }
`;

const Container = styled(Button)`
  .MuiButton-label {
    overflow: hidden;
  }
  &.MuiButton-root {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    :first-child {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
    padding: 8px 18px;
    text-transform: none;
    font-size: 1.6rem;
    text-align: left;
    overflow: hidden;
    border-radius: 0;
    background: ${(props) =>
      props.$isCurrentCategory ? "#555759" : "transparent"};
    color: ${(props) => props.theme.colors.siteBlack};
    width: 100%;
    justify-content: end;

    :hover {
      background: ${(props) =>
        props.$isCurrentCategory ? "rgba(0, 0, 0, 0.6)" : "transparent"};
      color: ${(props) => props.theme.colors.siteBlack};
      box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
        0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    }
  }
`;
const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  color: ${(props) =>
    props.$isCurrentCategory
      ? props.theme.colors.white
      : props.theme.colors.siteBlack};
`;
const DateText = styled.span`
  font-size: 1.3rem;
  color: ${(props) =>
    props.$isCurrentCategory
      ? "rgba(255, 255, 255, 0.65)"
      : "rgba(0, 0, 0, 0.65)"};
`;
const Text = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: calc(100% - 76px);
`;

export const Category = ({
  category,
  isCurrentCategory,
  setCurrentCategory
}) => {
  return (
    <Container
      disableRipple
      onClick={() => setCurrentCategory(category)}
      $isCurrentCategory={isCurrentCategory}
    >
      <StyledCategoryIcon $isCurrentCategory={isCurrentCategory} />
      <TextWrapper $isCurrentCategory={isCurrentCategory}>
        <Text>{category.name}</Text>
        <DateText $isCurrentCategory={isCurrentCategory}>{`Created ${dayjs(
          category.id
        ).format("MM/DD/YYYY")}`}</DateText>
      </TextWrapper>
    </Container>
  );
};

Category.propTypes = {
  category: PropTypes.object,
  isCurrentCategory: PropTypes.bool,
  setCurrentCategory: PropTypes.func
};

export default Category;
