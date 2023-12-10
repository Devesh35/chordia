import {
  Background,
  Border,
  BorderRadius,
  BoxSizing,
  Colors,
  Cursor,
  Flex,
  FontSize,
  Layers,
  Overflow,
  Position,
  ScrollBar,
  Size,
  TransitionDuration,
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
  onChange?: (item?: SelectItem<K>) => void;
};

export const Select = <K extends string = string>({
  options,
  onChange,
  className,
  placeholder,
}: SelectProps<K>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<SelectItem<K>>();
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
        <Title>{selected?.item || placeholder || 'Select'}</Title>
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
`;

const Item = styled.div`
  padding: 12px;
  height: 48px;
  ${FontSize.L16}
  ${Layers.First}
  ${Cursor.pointer}
  ${BoxSizing.borderBox}
  ${Background.color('White')}
  ${Flex({ align: 'center', justify: 'space-between' })}
`;

const Header = styled(Item)`
  ${Border.medium('Gray300')};
  ${BorderRadius.Medium};
  &:focus-within {
    ${Border.color('Primary500')};
    outline: 1px solid ${Colors.Primary500};
  }
  &:hover {
    ${Border.color('Gray500')};
  }
`;

const Title = styled.span`
  ${FontSize.H6}
`;

const Icon = styled.div<{ isOpen: boolean }>`
  ${Flex()}
  width: 16px;
  height: 16px;
  transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform;
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
  height: ${(props) => (props.isOpen ? `${props.contentHeight}px` : '0')};
  transition: height;
  ${TransitionDuration.veryFast}
  ${TransitionTimingFunctions.default}
  ${ScrollBar.none}
  ${BorderRadius.Medium}
  ${Overflow.scroll('y')}
`;

const Option = styled(Item)`
  ${Size.fullWidth}
  ${Position.relative}
  border-bottom: 1px solid ${Colors.Divider};
  &:last-of-type {
    border: none;
  }
`;
