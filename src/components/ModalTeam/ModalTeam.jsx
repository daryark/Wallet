import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { ModalCloseBtn } from 'reusable';
import { creators } from './teamMembers';
import { toggleModalTeam } from 'redux/global/globalSlice';
import { BackDrop, Modal } from './ModalTeam.styled';

function ModalTeam() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentIndex > creators.length) {
      setCurrentIndex(0);
    }

    let slider = setInterval(
      () => setCurrentIndex(prevState => prevState + 1),
      3500
    );
    return () => {
      clearInterval(slider);
    };
  }, [currentIndex]);

  useEffect(() => {
    const onEscClose = e => {
      if (e.code === 'Escape') {
        dispatch(toggleModalTeam());
      }
    };

    document.addEventListener('keydown', onEscClose);
    return () => document.removeEventListener('keydown', onEscClose);
  }, [dispatch]);

  function sliderMove(id) {
    let position = 'nextSlide';
    if (id === currentIndex) {
      position = 'activeSlide';
    }

    if (
      id === currentIndex - 1 ||
      (currentIndex === 0 && id === creators.length)
    ) {
      // console.log(currentIndex);
      position =
        currentIndex % 2 === 0 || !currentIndex
          ? 'lastSlideLeft'
          : 'lastSlideRight';
    }
    return position;
  }

  return (
    <BackDrop
      onClick={e => {
        if (e.target === e.currentTarget) {
          dispatch(toggleModalTeam());
        }
      }}
    >
      <Modal>
        <ModalCloseBtn type="button" isRandomModalOpen={toggleModalTeam} />
        <h2>This website creators</h2>
        <div>
          <ul>
            {creators.map(({ name, role, src, id }) => {
              const position = sliderMove(id);
              return (
                <li key={id} className={position}>
                  <img src={src} alt={name} width="85" loading="lazy" />
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
    </BackDrop>
  );
}

export default ModalTeam;
