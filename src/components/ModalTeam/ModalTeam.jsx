import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ModalCloseBtn } from 'reusable';
import { Modal } from './ModalTeam.styled';
import { creators } from './teamMembers';
import { selectIsModalOpen } from 'redux/modal/modalSelector';

function ModalTeam() {
  const dispatch = useDispatch();
  useEffect(() => {
    const onEscClose = e => {
      if (e.code === 'Escape') {
        dispatch(selectIsModalOpen());
      }
    };
    document.addEventListener('keydown', onEscClose);
    return () => document.removeEventListener('keydown', onEscClose);
  }, [dispatch]);

  return (
    <Modal>
      <ModalCloseBtn />
      <h2>This website creators</h2>
      <div>
        <ul>
          {creators.map(({ name, role, src, id }) => {
            return (
              <li key={id}>
                <img
                  src={require('images/team/Dasha_Yarkovska.jpg')}
                  alt={name}
                  width="85"
                  loading="lazy"
                />
                <div>
                  <p>{name}</p>
                  <p>{role}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Modal>
  );
}

export default ModalTeam;
