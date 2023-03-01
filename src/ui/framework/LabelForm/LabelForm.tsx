import React from "react";
import { Title } from "../Title/Title";

interface LabelFormProps {
  children: string|number;
}

export const LabelForm = ({ children }: LabelFormProps) => {
  return (
    <Title>{children}</Title>
  );
}