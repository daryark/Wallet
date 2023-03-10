export const selectStyles = () => {
  return {
    control: provided => ({
      ...provided,
      border: 'none',
      paddingBottom: 4,
      borderRadius: 0,
      borderBottom: '1px solid #e0e0e0',
      minHeight: 34,
      boxShadow: 'none',

      '&:hover': {
        borderBottom: '1px solid #e0e0e0',
      },
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    input: provided => ({
      ...provided,
      fontSize: 18,
      color: '#000000',
    }),
    placeholder: provided => ({
      ...provided,
      color: '#bdbdbd',
      margin: 0,
      fontSize: 18,
    }),
    singleValue: provided => ({
      ...provided,
      color: '#000000',
      margin: 0,
      fontSize: 18,
    }),
    dropdownIndicator: provided => ({
      ...provided,
      color: '#000000',
      padding: '9px 8px',
      alignItems: 'flex-start',
      width: 'auto',
      height: 'auto',
      transition: 'color 0.4s ease',

      '&:hover': {
        color: '#e0e0e0',
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
      background: 'rgba(255, 255, 255, 0.7)',
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
      background: isSelected ? '#ffffff' : 'transparent',
      color: isSelected ? '#FF6596' : '#000000',
      fontWeight: isSelected ? 700 : 400,
      cursor: 'pointer',
      padding: '8.5px 20px',
      fontSize: 18,
      lineHeight: 1.5,

      '&:hover': {
        color: '#FF6596',
        background: '#ffffff',
        fontWeight: 700,
      },
    }),
  };
};
