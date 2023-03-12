import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsMoon, BsSun } from 'react-icons/bs';
import { selectTheme } from 'redux/global/global-selectors';
import { toggleThemeTitle } from 'redux/global/globalSlice';
import { ThemeButton } from './ThemeButton.styled';

export function ThemeSwitcher() {
  const themeTitle = useSelector(selectTheme);
  const dispatch = useDispatch();

  const handleThemeChange = e => {
    dispatch(toggleThemeTitle(themeTitle));
  };
  return (
    <ThemeButton onClick={handleThemeChange}>
      {themeTitle === 'light' ? <BsMoon /> : <BsSun />}
    </ThemeButton>
  );
}
