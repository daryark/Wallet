import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

export function ThemeButton({ themeTitle }) {
  return (
    <ThemeButton>{themeTitle === 'light' ? <BsMoon /> : <BsSun />}</ThemeButton>
  );
}
