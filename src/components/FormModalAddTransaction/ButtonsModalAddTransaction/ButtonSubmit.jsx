const ButtonSubmit = ({ className, text }) => {
  return (
    <button type="submit" className={className}>
      {text}
    </button>
  );
};

export default ButtonSubmit;
