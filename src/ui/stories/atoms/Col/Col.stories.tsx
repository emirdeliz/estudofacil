import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Col, ColProps } from '@/atoms';
import styled from 'styled-components';

export default {
  title: 'Components/Atoms/Col',
  component: Col,
} as Meta;

const Container = styled.div`
  width: 500px;
`;

const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.N2};
  padding: ${({ theme }) => theme.padding.Nm};
  margin-bottom: ${({ theme }) => theme.margin.Nm};
  width: 100%;
`;

const Template: Story<ColProps> = () => (
  <Container>
    {[
      'c1',
      'c2',
      'c3',
      'c4',
      'c5',
      'c6',
      'c7',
      'c8',
      'c9',
      'c10',
      'c11',
      'c12',
      'auto',
    ].map((item) => (
      <Col {...{ [item]: true }} key={item}>
        <Content>{item}</Content>
      </Col>
    ))}
  </Container>
);

export const ColSimple = Template.bind({});
