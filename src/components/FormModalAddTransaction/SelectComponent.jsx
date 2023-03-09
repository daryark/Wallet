import Select from 'react-select';
import { TfiAngleDown } from 'react-icons/tfi';

export const selectStyles = transactionType => {
  const optionColor = transactionType ? '#FF6596' : '#24CCA7';
  return {
    control: provided => ({
      ...provided,
      // minWidth: '100%',
      border: 'none',
      paddingBottom: 4,
      borderRadius: 0,
      borderBottom: '1px solid #e0e0e0',
      minHeight: 34,
      boxShadow: 'none',
      '&:hover': {
        border: 'none',
        boxShadow: 'none',
        borderBottom: '1px solid #e0e0e0',
      },
    }),
    indicatorSeparator: () => ({ display: 'none' }),
    valueContainer: provided => ({
      ...provided,

      height: 34,
      padding: '0 0 0 20px',
      alignItems: 'center',
    }),
    input: provided => ({
      ...provided,
      height: 34,
      padding: '0 0 0 20px',
      margin: 0,
    }),
    placeholder: provided => ({
      ...provided,
      color: '#bdbdbd',
      margin: 0,
      fontSize: 18,
      lineHeight: 1,
      fontFamily: 'Circe, sans-serif',
    }),
    singleValue: provided => ({
      ...provided,
      color: '#000000',
      margin: 0,
      fontSize: 18,
      lineHeight: 1,
      fontFamily: 'Circe, sans-serif',
    }),

    TfiAngleDown: provided => ({
      ...provided,
      color: '#000000',
      padding: 7,
      alignItems: 'flex-start',
      width: 28,
      height: 9,
      '&:hover': {
        color: '#000000',
      },

      '&>svg': {
        width: '30px',
        height: 'auto',
      },
    }),

    menu: provided => ({
      ...provided,
      background: 'rgba(255, 255, 255, 0.7)',
      boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(20px)',
      borderRadius: 20,
      overflow: 'hidden',
    }),

    menuList: provided => ({
      ...provided,
      background: 'transparent',
      borderRadius: 20,
      cursor: 'pointer',
    }),

    option: (provided, { isFocused, isSelected }) => ({
      ...provided,
      background: isFocused || isSelected ? '#ffffff' : 'transparent',
      color: isFocused || isSelected ? optionColor : '#000000',
      cursor: 'pointer',
      padding: '14px 20px',
      fontSize: 18,
      lineHeight: 1,
      fontFamily: 'Circe, sans-serif',
    }),
  };
};

const SelectComponent = ({
  field,
  transactionType,
  options,
  placeholder = 'Select',
  className,
  onChange,
}) => {
  return (
    <Select
      name={field.name}
      className={className}
      placeholder={placeholder}
      options={options}
      onChange={onChange}
      components={{ TfiAngleDown }}
      styles={selectStyles(transactionType)}
    />
  );
};

export default SelectComponent;
