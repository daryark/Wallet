const ButtonCancel = ({ handleCloseModal, text }) => {
  return (
    <button type="button" className="cancel-btn" onClick={handleCloseModal}>
      {text}
    </button>
  );
};

export default ButtonCancel;
