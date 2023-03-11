import styled from "styled-components";

export const Container = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 380px;
  height: 380px;
`
export const Title = styled.h1`
  font-weight: 400;
  font-size: 30px;
  margin-bottom: 8px;
`


export const customStyles = {
  control: (provided) => ({
    ...provided,
    width: '230px',
    height: '40px',
    borderRadius: '30px',
    border: 'solid 1px #000000',
    cursor: 'pointer',
    '&:hover': {
      borderColor: '#D8093A',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#dedede' : 'transparent',
    color: state.isSelected ? '#333333' : '#666666',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '2px 103px 2px 20px',
    gap: '10px', //
    '&:hover': {
      backgroundColor: '#dedede',
      color: '#333333',
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#333333',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#333333',
    '&:hover': {
      color: '#D8093A',
    },
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  menu: (provided) => ({
    ...provided,
    width: '230px',
    borderRadius: '30px',
    overflow: 'hidden',

  }),
};
