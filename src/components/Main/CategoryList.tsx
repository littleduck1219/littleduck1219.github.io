import React from 'react';
import { CategoryListProps } from 'model/main';
import * as style from './style.CategoryList';
import { useMobileStore } from '../../store/useMobile';
import { useCategoryStore } from '../../store/useCategory';

export default function CategoryList({
  selectedCategory,
  categoryList,
}: CategoryListProps) {
  const isMobile = useMobileStore(set => set.isMobile);
  const isCategory = useCategoryStore(set => set.isOpen);

  return (
    <>
      <style.CategoryContainer isMobile={isMobile} isOpen={isCategory}>
        <style.CategoryListWrapper>
          {Object.entries(categoryList).map(([name, count]) => (
            <style.CategoryItem
              to={`/?category=${name}`}
              active={name === selectedCategory}
              key={name}
            >
              {name}
              <span style={{ fontSize: '12px' }}>({count})</span>
            </style.CategoryItem>
          ))}
        </style.CategoryListWrapper>
      </style.CategoryContainer>
    </>
  );
}
