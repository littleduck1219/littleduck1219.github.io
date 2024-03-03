import React, { useEffect } from 'react';
import { useMobileStore } from '../../store/useMobile';
import { useCategoryStore } from '../../store/useCategory';
import { X } from 'lucide-react';
import * as style from './style.MobileCategory';
import { CategoryListProps } from 'model/main';

export default function MobileCategory({
  selectedCategory,
  categoryList,
}: CategoryListProps) {
  const isMobile = useMobileStore(set => set.isMobile);
  const { isOpen, onOpen, onClose } = useCategoryStore();

  const navOpenHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      // 모바일 카테고리가 열리면 body의 스크롤을 비활성화
      document.body.style.overflow = 'hidden';
    } else {
      // 모바일 카테고리가 닫히면 body의 스크롤을 다시 활성화
      document.body.style.overflow = '';
    }

    // 컴포넌트 언마운트 시 스크롤을 다시 활성화
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <style.MobileCategoryContainer isMobile={isMobile} isCategory={isOpen}>
      <style.CategoryCloserWrapper>
        <style.CategoryCloser onClick={navOpenHandler}>
          <X />
        </style.CategoryCloser>
      </style.CategoryCloserWrapper>
      <style.MobileCategoryWrapper>
        <style.MobileCategory>
          {Object.entries(categoryList).map(([name, count]) => (
            <style.CategoryItem
              to={`/?category=${name}`}
              active={name === selectedCategory}
              key={name}
              onClick={navOpenHandler}
            >
              {name}
              <span style={{ fontSize: '12px' }}>({count})</span>
            </style.CategoryItem>
          ))}
        </style.MobileCategory>
      </style.MobileCategoryWrapper>
    </style.MobileCategoryContainer>
  );
}
