export const selectStyles = theme => {
  return {
    control: provided => ({
      ...provided,
      border: `${theme.borders.none}`,
      paddingBottom: 4,
      borderRadius: 0,
      borderBottom: `${theme.borders.normal} ${theme.color.text_grey_secondary}`,
      minHeight: 34,
      boxShadow: 'none',
      backgroundColor: `${theme.color.bg_white}`,
      transition: 'color 0.2s ease',

      '&:hover': {
        borderBottom: `${theme.borders.normal} ${theme.color.text_grey_secondary}`,
      },
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    input: provided => ({
      ...provided,
      fontSize: `${theme.fontSizes.m}`,
      color: `${theme.color.text_dark}`,
    }),
    placeholder: provided => ({
      ...provided,
      color: '#bdbdbd',
      margin: 0,
      fontSize: `${theme.fontSizes.m}`,
    }),
    singleValue: provided => ({
      ...provided,
      color: `${theme.color.text_dark}`,
      margin: 0,
      fontSize: `${theme.fontSizes.m}`,
    }),
    dropdownIndicator: provided => ({
      ...provided,
      color: `${theme.color.text_dark}`,
      padding: '9px 8px',
      alignItems: 'flex-start',
      width: 'auto',
      height: 'auto',
      transition: 'color 0.2s ease',

      '&:hover': {
        color: `${theme.color.text_grey_secondary}`,
      },

      '&>svg': {
        width: '18px',
        height: 'auto',
      },
    }),
    menu: provided => ({
      ...provided,
      height: 'auto',
      maxHeight: 352,
      background: `${theme.color.bg_white}b3`,
      boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(20px)',
      borderRadius: 20,
      overflow: 'hidden',
    }),
    menuList: provided => ({
      ...provided,
      height: 'auto',
      maxHeight: 352,
      background: 'transparent',
      borderRadius: 20,
    }),
    option: (provided, { isSelected }) => ({
      ...provided,
      background: isSelected ? `${theme.color.bg_white}` : 'transparent',
      color: isSelected
        ? `${theme.color.text_pink}`
        : `${theme.color.text_dark}`,
      fontWeight: isSelected ? 700 : 400,
      cursor: 'pointer',
      padding: '8.5px 20px',
      fontSize: `${theme.fontSizes.m}`,
      lineHeight: 1.5,

      '&:hover': {
        color: `${theme.color.text_pink}`,
        background: `${theme.color.bg_white}`,
        fontWeight: 700,
      },
    }),
  };
};
