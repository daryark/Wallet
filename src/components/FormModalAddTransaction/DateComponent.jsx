import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

const SelectComponent = ({
  field,
  className,
  dateFormat,
  timeFormat,
  value,
  onChange,
}) => {
  return (
    <Datetime
      name={field.name}
      className={className}
      dateFormat={dateFormat}
      timeFormat={timeFormat}
      value={value}
      onChange={val => onChange(val)}
    />
  );
};

export default SelectComponent;
