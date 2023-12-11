import {
  Background,
  Border,
  BorderRadius,
  Colors,
  Cursor,
  Flex,
  FontSize,
  Foreground,
  Layers,
  Overflow,
  Padding,
  Position,
  ScrollBar,
  Shadows,
  Size,
  TransitionDuration,
  TransitionProperty,
  TransitionTimingFunctions,
} from '@li/config/design';
import { DownFilled } from '@li/design/icons';
import styled from '@emotion/styled';
import { useCallback, useEffect, useRef, useState } from 'react';

export type SelectItem<K extends string = string> = {
  id: K;
  item: React.ReactNode;
};

export type SelectProps<K extends string = string> = {
  options: SelectItem<K>[];
  className?: string;
  placeholder?: string;
  header?: (selected?: SelectItem<K>) => React.ReactNode;
  defaultItem?: SelectItem<K>;
  onChange?: (item?: SelectItem<K>) => void;
};

export const Select = <K extends string = string>({
  header,
  options,
  onChange,
  className,
  defaultItem,
  placeholder,
}: SelectProps<K>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<SelectItem<K> | undefined>(
    defaultItem,
  );
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (contentRef.current)
      setContentHeight(Math.min(400, contentRef.current.scrollHeight));
  });

  const toggleAccordion = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [setIsOpen]);

  const onSelect = (item: SelectItem<K>) => {
    onChange?.(item);
    setSelected(item);
    toggleAccordion();
  };

  return (
    <Wrapper className={className}>
      <Header onClick={toggleAccordion}>
        {header?.(selected) || (
          <Title selected={!!selected?.id}>
            {selected?.item || placeholder || 'Select'}
          </Title>
        )}
        <Icon isOpen={isOpen}>
          <DownFilled />
        </Icon>
      </Header>
      <OptionWrapper
        isOpen={isOpen}
        ref={contentRef}
        contentHeight={contentHeight}
      >
        {options.map((o) => (
          <Option onClick={() => onSelect(o)} key={o.id}>
            {o.item}
          </Option>
        ))}
      </OptionWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${Size.fullWidth}
  ${Position.relative}
  ${BorderRadius.Medium}
  ${Border.medium('Gray300')};
  ${Background.color('White')}
  &:focus-within {
    ${Border.color('Primary500')};
    outline: 1px solid ${Colors.Primary500};
  }
  &:hover {
    ${Border.color('Gray500')};
  }
`;

const Item = styled.div`
  ${Layers.First}
  ${Cursor.pointer}
  ${Size.height(48)}
  ${Padding.all(0.75)}
  ${Flex({ align: 'center', justify: 'space-between' })}
`;

const Header = styled(Item)`
  ${Size.full}
  ${BorderRadius.Medium}
`;

const Title = styled.span<{ selected: boolean }>`
  ${FontSize.H6}
  ${({ selected }) => Foreground.color(selected ? 'OnWhite' : 'Gray600')}
`;

const Icon = styled.div<{ isOpen: boolean }>`
  ${Flex()}
  ${Size.width(24)}
  ${Size.height(24)}
  &>svg {
    ${Size.width(24)}
    ${Size.height(24)}
  }
  transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  ${TransitionProperty('transform')}
  ${TransitionDuration.fast}
  ${TransitionTimingFunctions.easeOut}
`;

const OptionWrapper = styled.div<{
  isOpen: boolean;
  contentHeight: number;
}>`
  ${Size.full}
  ${Layers.First}
  ${Position.absolute}
  ${(props) => Size.height(props.isOpen ? props.contentHeight : '0')}
  ${TransitionProperty('height')}
  ${TransitionDuration.veryFast}
  ${TransitionTimingFunctions.default}
  ${ScrollBar.none}
  ${BorderRadius.Medium}
  ${Overflow.scroll('y')}
  ${Shadows.s}
`;

const Option = styled(Item)`
  ${FontSize.L16}
  ${Background.color('White')}
  ${Foreground.color('OnWhite')}
  ${Size.fullWidth}
  ${Position.relative}
  border-bottom: 1px solid ${Colors.Divider};
  &:last-of-type {
    ${Border.none}
  }
`;
