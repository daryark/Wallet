import { useEffect, useState } from 'react';
import { BsCaretUpFill } from 'react-icons/bs';
import { BtnUp } from './StickyBtn.styled';

export const ButtonUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  return (
    <>
      {isVisible && (
        <BtnUp onClick={scrollToTop}>
          <BsCaretUpFill size={25} />
        </BtnUp>
      )}
    </>
  );
};
