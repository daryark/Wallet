import 'react-datetime/css/react-datetime.css';

import { DatetimeStyled } from './DateComponent.styled';

const SelectComponent = ({
  field,
  className,
  dateFormat,
  timeFormat,
  value,
  onChange,
}) => {
  return (
    <DatetimeStyled
      name={field.name}
      className={className}
      dateFormat={dateFormat}
      timeFormat={timeFormat}
      value={value}
      onChange={val => onChange(val)}
      closeOnSelect={true}
    />
  );
};

export default SelectComponent;
