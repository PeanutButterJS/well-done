import React, { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Category from "./category";
import {
  fetchCategories as fetchCategoriesAction,
  setCurrentCategory as setCurrentCategoryAction
} from "../../../common-actions";

const Section = styled.section`
  padding: 30px 0 10px;
`;

const EmptyState = styled.div`
  font-size: 2rem;
  font-weight: 400;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 3rem;
`;

const EmptyStateLineTwo = styled.div`
  font-size: 1.3rem;
`;

const Categories = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const CategoriesManager = ({
  fetchCategories,
  categories,
  currentCategory,
  setCurrentCategory
}) => {
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <Section>
      {(!categories || categories.length <= 0) && (
        <EmptyState>
          <div>No categories</div>
          <EmptyStateLineTwo>Try adding some above</EmptyStateLineTwo>
        </EmptyState>
      )}
      {categories && (
        <Categories>
          {categories.map((cat) => {
            debugger;
            return (
              <Category
                setCurrentCategory={setCurrentCategory}
                isCurrentCategory={
                  currentCategory && currentCategory.id === cat.id
                }
                key={cat.id}
                category={cat}
              />
            );
          })}
        </Categories>
      )}
    </Section>
  );
};

CategoriesManager.propTypes = {
  fetchCategories: PropTypes.func,
  categories: PropTypes.array,
  currentCategory: PropTypes.object
};

const mapStateToProps = ({ categories }) => ({
  categories: categories.categories,
  currentCategory: categories.currentCategory
});

export default connect(mapStateToProps, {
  fetchCategories: fetchCategoriesAction,
  setCurrentCategory: setCurrentCategoryAction
})(CategoriesManager);
