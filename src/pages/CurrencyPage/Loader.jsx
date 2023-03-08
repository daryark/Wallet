import { RotatingSquare } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <RotatingSquare
      height="100"
      width="100"
      color="#FFFFFF"
      ariaLabel="rotating-square-loading"
      strokeWidth="4"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};
