import styled from 'styled-components';
import { Diagram } from './Diagram/Diagram';
import { useTranslation } from 'react-i18next';

const Title = styled.h1`
  font-weight: 400;
  font-size: 30px;
  margin-bottom: 8px;
  align-self: flex-start; // добавила

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Statistics = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Title>{t('statisticsTitle')}</Title>
      <Diagram />
    </div>
  );
};
