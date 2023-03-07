import React from 'react';
import { useField, useFormikContext } from 'formik';
import Datetime from 'react-datetime';

export const DateTimeField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  return (
    <Datetime
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={val => {
        setFieldValue(field.name, val);
      }}
    />
  );
};
