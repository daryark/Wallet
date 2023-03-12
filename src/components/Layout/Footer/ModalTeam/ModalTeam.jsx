import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { creators } from './teamMembers';
import { toggleModalTeam } from 'redux/global/globalSlice';
import { selectIsModalTeamOpen } from 'redux/global/global-selectors';
import { ModalCloseBtn } from 'reusable';
import ModalBackdrop from 'components/ModalBackdrop/ModalBackdrop';
import { ModalStyled } from './ModalTeam.styled';
import { SelectLink } from '../SelectLink/SelectLink';

export function ModalTeam() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isModalOpen = useSelector(selectIsModalTeamOpen);

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentIndex > creators.length) {
      setCurrentIndex(0);
    }

    let slider = setInterval(
      () => setCurrentIndex(prevState => prevState + 1),
      1500
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

    if (isModalOpen) document.addEventListener('keydown', onEscClose);
    return () => document.removeEventListener('keydown', onEscClose);
  }, [dispatch, isModalOpen]);

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
    <>
      {isModalOpen && (
        <ModalBackdrop randomModalClose={toggleModalTeam}>
          <ModalStyled>
            <ModalCloseBtn type="button" isRandomModalOpen={toggleModalTeam} />
            <h2>This website creators</h2>
            <SelectLink />
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
          </ModalStyled>
        </ModalBackdrop>
      )}
    </>
  );
}
