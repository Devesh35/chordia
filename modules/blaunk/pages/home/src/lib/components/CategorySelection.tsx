import {
  Background,
  BorderRadius,
  Colors,
  Cursor,
  FontSize,
  Overflow,
  ScrollBar,
  Size,
} from '@li/config/design';
import { Accordion } from '@li/design/elements';
import styled from '@emotion/styled';
import { MenuCategories } from '@md/blaunk/config';

type Props = {
  selectedCategory: string;
  setSelectedCategory: (id: string) => void;
};

export const CategorySelection = ({
  selectedCategory,
  setSelectedCategory,
}: Props) => {
  return (
    <CategoryWrapper>
      <CategoryScroll>
        {MenuCategories.map((category) =>
          category.subItems ? (
            <Accordion key={category.id} title={category.name}>
              {category.subItems.map((subItem, i) => (
                <CategoryItem
                  key={subItem.id}
                  isSubItem
                  onClick={() => setSelectedCategory(subItem.id)}
                  isSelected={subItem.id === selectedCategory}
                >
                  {subItem.name}
                </CategoryItem>
              ))}
            </Accordion>
          ) : (
            <CategoryItem
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              isSelected={category.id === selectedCategory}
            >
              {category.name}
            </CategoryItem>
          ),
        )}
      </CategoryScroll>
    </CategoryWrapper>
  );
};

const CategoryWrapper = styled.div`
  ${Size.full}
  ${Overflow.hidden}
  ${BorderRadius.Medium}
  ${Background.color('Primary')}
`;

const CategoryScroll = styled.div`
  ${Size.full}
  ${ScrollBar.none}
  ${Overflow.scroll('y')}
`;

const CategoryItem = styled.div<{ isSelected: boolean; isSubItem?: true }>`
  padding: 12px;
  ${({ isSubItem }) => isSubItem && `padding-left: 24px`};
  ${FontSize.P16}
  ${Size.fullWidth}
  ${Cursor.pointer}
  ${({ isSelected }) =>
    Background.color(isSelected ? 'SecondaryDark' : 'Secondary')}
  border-bottom: 1px solid ${Colors.SecondaryDark};
  &:last-of-type {
    border-bottom: none;
  }
  &:hover {
    ${Background.color('SecondaryDark')}
  }
`;
