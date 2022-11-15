import React from 'react';
import { VStack } from '..';

export interface TextStackProps {
  content: (string | number)[];
}

export const TextStack = ({ content }: TextStackProps) => {
  return (
    <VStack>
      {content.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </VStack>
  );
};

export default TextStack;
