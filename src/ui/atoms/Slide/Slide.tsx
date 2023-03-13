import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { useAddEventListener } from '@/hooks';
import * as S from './Slide.style';

export interface SlideProps {
  children: Array<ReactNode>;
  currentIndex: number;
}

export const Slide = ({ children, currentIndex }: SlideProps) => {
  const scrollCurrent = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(currentIndex);
  const { addEventListener } = useAddEventListener();

  const changeSelectedIndex = useCallback(
    (value: number) => {
      let newIndex = value;
      const firstIndex = 0;
      const lastIndex = (children?.length || 1) - 1;

      if (newIndex > lastIndex) {
        newIndex = firstIndex;
      }
      if (newIndex < firstIndex) {
        newIndex = lastIndex;
      }
      setSelectedIndex(newIndex);
    },
    [children?.length]
  );

  const updateScrollPosition = useCallback(() => {
    const target = scrollCurrent.current;

    if (target) {
      const currentElement = target.children[selectedIndex] as HTMLDivElement;
      const widthBase = currentElement?.offsetWidth;
      const scrollLeft = widthBase * selectedIndex;
      target.scrollLeft =
        scrollLeft > 0 ? target.offsetWidth * selectedIndex : 0;
    }
  }, [selectedIndex]);

  useEffect(() => {
    changeSelectedIndex(currentIndex);
  }, [changeSelectedIndex, currentIndex]);

  useEffect(() => {
    return addEventListener(window, 'resize', updateScrollPosition);
  }, [addEventListener, updateScrollPosition]);

  useEffect(updateScrollPosition, [updateScrollPosition]);

  return (
    <S.Slide
      ref={scrollCurrent}
      data-testid="slide"
      data-slide-current-index={currentIndex}
    >
      {children &&
        children.map((item, index) => (
          <S.Item key={index} current={currentIndex === index}>
            {item}
          </S.Item>
        ))}
    </S.Slide>
  );
};
