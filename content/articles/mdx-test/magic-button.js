import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button(({ borderColor }) => ({
  padding: '6px 11px',
  border: 'solid 5px',
  borderColor,
  boxShadow: 'inset 0 0 0 1px #000, 0 0 0 1px #000',
  backgroundColor: '#fff',
  fontFamily: 'monospace',
  fontSize: '20px',

  '&:focus': {
    outline: 'none',
    textDecoration: 'underline'
  }
}));

export function MagicButton({ children }) {
  const [color, setColor] = useState(() => generateRandomColor());
  const handleClick = () => setColor(generateRandomColor());

  return (
    <Button onClick={handleClick} borderColor={color}>
      {children}
    </Button>
  );
}

function generateRandomColor() {
  const randomNum = () => Math.floor(Math.random() * 256);
  return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
}
