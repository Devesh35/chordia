'use client';

import {
  Background,
  Border,
  BorderRadius,
  Cursor,
  Flex,
  FontSize,
  Foreground,
  Margin,
  Overflow,
  ScrollBar,
  Size,
} from '@li/config/design';
import styled from '@emotion/styled';
import { CategorySelection } from './CategorySelection';
import { useCallback, useEffect, useState } from 'react';
import { SubCategories, getRandomImagesArray } from '@md/blaunk/config';
import { Divider } from '@li/design/elements';
import { ImageCardOverlay } from '@li/design/components';
import { CircleClose, Star } from '@li/design/icons';
import { SectionHeader } from '@md/blaunk/design';

const images = getRandomImagesArray(12)(225);

export const CategorySearch = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    'accessories_general',
  );
  const [selectedSubCategory, setSelectedSubCategory] = useState<string[]>([]);

  useEffect(() => setSelectedSubCategory([]), [selectedCategory]);

  const toggleSub = useCallback((id: string) => {
    setSelectedSubCategory(
      (cat) =>
        (cat = cat.includes(id) ? cat.filter((c) => c !== id) : [...cat, id]),
    );
  }, []);

  return (
    <Wrapper>
      <SectionHeader sectionName="Search categories" />
      <ContentWrapper>
        <SelectionWrapper>
          <CategorySelection
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </SelectionWrapper>
        <Viewer>
          <SubCategoriesContainer>
            <SubCategoriesWrapper>
              {SubCategories[selectedCategory]?.map((a) => (
                <SubCategoryItem
                  key={`${selectedCategory}:${a.id}`}
                  onClick={() => toggleSub(a.id)}
                  isSelected={selectedSubCategory.includes(a.id)}
                >
                  {a.label}
                </SubCategoryItem>
              )) || (
                <SubCategoryItem
                  key={`${selectedCategory}:all`}
                  isSelected={true}
                >
                  All
                </SubCategoryItem>
              )}
            </SubCategoriesWrapper>
            <SubCategoriesClear isActive={!!selectedSubCategory.length}>
              <CircleClose onClick={() => setSelectedSubCategory([])} />
            </SubCategoriesClear>
          </SubCategoriesContainer>
          {<Divider color="Primary" />}
          <CategoryItemsWrapper>
            {images.map((src) => (
              <ImageCardOverlay
                isClickable
                key={src}
                image={{
                  width: 225,
                  height: 225,
                  alt: 'img',
                  src: src,
                }}
                bottom={
                  <CategoryItemLabel>
                    <CategoryItemTitle>
                      <CategoryItemLabelTitle>
                        Product name
                      </CategoryItemLabelTitle>
                      <CategoryItemLabelSubTitle>
                        Sub-category name
                      </CategoryItemLabelSubTitle>
                    </CategoryItemTitle>
                    ₹ 1,000
                  </CategoryItemLabel>
                }
                top={
                  <CategoryItemRatingWrapper>
                    <CategoryItemRating>
                      4.5 <Star />
                    </CategoryItemRating>
                  </CategoryItemRatingWrapper>
                }
              />
            ))}
          </CategoryItemsWrapper>
        </Viewer>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${Margin({ inline: 1 })}
`;

const ContentWrapper = styled.div`
  ${BorderRadius.Medium}
  ${Border.medium('PrimaryDark')}
  ${Flex()}
  max-height: 600px;
  ${Overflow.hidden}
  ${Background.color('BackgroundSecondary')}
`;

const SelectionWrapper = styled.div`
  width: 320px;
`;

const Viewer = styled.div`
  ${Flex({ direction: 'column', flex: 1 })}
  padding: 12px 12px 4px;
`;

const SubCategoriesContainer = styled.div`
  height: 100px;
  max-height: 100px;
  padding-bottom: 8px;
  margin-bottom: 4px;
  ${ScrollBar.none}
  display: inline-flex;
`;

const SubCategoriesWrapper = styled.div`
  ${Flex({ gap: 8, rowGap: 4, wrap: true, flex: 1 })}
  ${Overflow.scroll('y')}
  ${ScrollBar.dark}
`;

const SubCategoryItem = styled.div<{ isSelected: boolean }>`
  ${({ isSelected }) =>
    Background.color(isSelected ? 'Transparent60' : 'Transparent80')}
  ${BorderRadius.Medium}
  ${FontSize.P14}
  height: 24px;
  padding: 2px 8px;
  ${Cursor.pointer}
  &:hover {
    ${Background.color('Transparent60')}
  }
`;

const SubCategoriesClear = styled.div<{ isActive: boolean }>`
  ${FontSize.H4}
  padding: 0 12px;
  margin: 0;
  ${({ isActive }) => (isActive ? Cursor.pointer : Cursor.noEvents)}
  ${({ isActive }) =>
    isActive
      ? Foreground.color('Transparent40')
      : Foreground.color('BackgroundSecondary')}
`;

const CategoryItemsWrapper = styled.div`
  ${Flex({ gap: 4, wrap: true })}
  padding-top: 12px;
  max-height: 460px;
  ${ScrollBar.dark}
  ${Overflow.scroll('y')}
`;

const CategoryItemLabel = styled.div`
  ${Foreground.color('White')}
  ${Size.fullWidth}
  ${Flex({ justify: 'space-between' })}
`;

const CategoryItemTitle = styled.div``;

const CategoryItemLabelTitle = styled.div`
  ${FontSize.L18}
`;
const CategoryItemLabelSubTitle = styled.div`
  ${FontSize.L14}
`;

const CategoryItemRatingWrapper = styled.div`
  ${Flex({ align: 'center', gap: 4, justify: 'flex-end' })}
`;

const CategoryItemRating = styled.div`
  ${FontSize.H6}
  ${Flex({ align: 'center', gap: 4 })}
  ${Background.color('Primary')}
  ${Foreground.color('OnPrimaryAccent')}
  padding: 4px 8px;
  ${BorderRadius.Rounded}
`;
