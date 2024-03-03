import React, { ElementRef, useRef, useState } from 'react';
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
  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ElementRef<'div'>>(null);
  const navbarRef = useRef<ElementRef<'div'>>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  return (
    <>
      <style.CategoryContainer
        ref={sidebarRef}
        isResetting={isResetting}
        isMobile={isMobile}
        isOpen={isCategory}
      >
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
