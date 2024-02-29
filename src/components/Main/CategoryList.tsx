import React from 'react';
import { CategoryListProps } from 'model/main';
import * as style from './style.CategoryList';

export default function CategoryList({
  selectedCategory,
  categoryList,
}: CategoryListProps) {
  return (
    <style.CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <style.CategoryItem
          to={`/?category=${name}`}
          active={name === selectedCategory}
          key={name}
        >
          #{name}({count})
        </style.CategoryItem>
      ))}
    </style.CategoryListWrapper>
  );
}
