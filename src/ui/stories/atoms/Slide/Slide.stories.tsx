import React, { useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Slide, SlideProps, Flex, Title } from '@/atoms';

export default {
  title: 'Components/Atoms/Slide',
  component: Slide,
} as Meta;

const Template: Story<SlideProps> = (args) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => {
        const newIndex = prev + 1;
        return newIndex > args.children.length - 1 ? 0 : newIndex;
      });
    }, 2000);
    return () => clearInterval(intervalId);
  }, [args.children.length]);

  return <Slide {...args} currentIndex={currentIndex} />;
};

export const Simple = Template.bind({});
Simple.args = {
  children: [
    <Flex key="0">
      <Title fs6 white lh5>
        Slide 1
      </Title>
    </Flex>,
    <Flex key="1">
      <Title fs6 white lh5>
        Slide 2
      </Title>
    </Flex>,
    <Flex key="2">
      <Title fs6 white lh5>
        Slide 3
      </Title>
    </Flex>,
    <Flex key="3">
      <Title fs6 white lh5>
        Slide 4
      </Title>
    </Flex>,
    <Flex key="4">
      <Title fs6 white lh5>
        Slide 5
      </Title>
    </Flex>,
  ],
};
