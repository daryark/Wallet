import { useDispatch, useSelector } from 'react-redux';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { BsX } from 'react-icons/bs';

import { Backdrop, Modal, CloseBtn } from './ModalEdit.styled';

import { TextField } from 'components/FormikForm/TextField';

const modalRoot = document.querySelector('#modal-root');

export const ModalEdit = () => {
  //   const editContact = useSelector(selectEditContact);
  const dispatch = useDispatch();

  useEffect(() => {
    function handleEscapeClick(evt) {
      if (evt.code === 'Escape') {
        dispatch(setEditModal());
      }
    }
    window.addEventListener('keydown', handleEscapeClick);
    return () => {
      window.removeEventListener('keydown', handleEscapeClick);
    };
  }, [dispatch]);

  const config = [
    { label: 'Name', type: 'text', name: 'name' },
    { label: 'Number', type: 'tel', name: 'number' },
  ];
  const initialValues = {
    name: editContact.name,
    number: editContact.number,
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be more than 7 characters')
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    number: Yup.string()
      .min(7, 'Must be more than 7 characters')
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
  });
  const onSubmit = (values, { resetForm }) => {
    const name = values.name;
    const number = values.number;
    const user = { name, number, id: editContact.id };
    dispatch(editContactOperation(user));
    dispatch(setEditModal());

    resetForm();
  };

  const handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      dispatch(setEditModal());
    }
  };
  const onCloseBtnClick = () => {
    dispatch(setEditModal());
  };

  const handleEscapeClick = evt => {
    if (evt.code === 'Escape') {
      dispatch(setEditModal());
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Modal onKeyDown={handleEscapeClick}>
        <section>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              {config.map(({ label, type, name }) => (
                <TextField key={name} label={label} type={type} name={name} />
              ))}
              <button type="submit">Edit contact</button>
            </Form>
          </Formik>
        </section>
        <CloseBtn onClick={onCloseBtnClick}>
          <BsX size={25} />
        </CloseBtn>
      </Modal>
    </Backdrop>,
    modalRoot
  );
};
