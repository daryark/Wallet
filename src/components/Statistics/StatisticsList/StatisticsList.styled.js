import styled from 'styled-components';

export const StatisticsCommonWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 48px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: 768px) {
    margin-top: 20px;
    margin-bottom: 24px;

    flex-direction: row;
  }

  @media screen and (min-width: 1280px) {
    width: 715px;
    margin-top: 32px;
    margin-bottom: 44px;
  }
`;

export const StatisticsListWrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`;

export const StatisticsListTitle = styled.div`
  height: 58px;
  padding: 0 20px;
  margin-top: 20px;
  margin-bottom: 14px;

  background-color: ${({ theme }) => theme.color.bg_white};
  border-radius: ${({ theme }) => theme.radii.large};

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.body};
`;

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 0 20px;
`;

export const StatisticsItem = styled.li`
  display: flex;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  line-height: ${({ theme }) => theme.space[6]}px;

  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: calc(100% + 40px);
    bottom: 0;
    border-bottom: 1px solid #dcdcdf;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);

    top: 150%;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

export const StatisticsSumList = styled.ul`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  margin-top: 28px;
`;

export const StatisticsSumItem = styled(StatisticsItem)`
  justify-content: space-between;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  border: none;
  box-shadow: none;

  &::after {
    content: none;
  }
`;

export const Cube = styled.div`
  width: 24px;
  height: 25px;
  margin-right: 16px;
  border-radius: 2px;
  background-color: ${({ color }) => color};
`;

export const Sum = styled.p`
  line-height: ${({ theme }) => theme.lineHeights.body};
`;

export const StatisticsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 2;
`;
