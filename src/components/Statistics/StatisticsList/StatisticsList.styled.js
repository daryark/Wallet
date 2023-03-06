import styled from 'styled-components';
import { theme } from 'styles/theme';

export const StatisticsListTitle = styled.div`
  width: 280px;
  height: 58px;
  padding: 0 20px;
  margin-bottom: 14px;

  background-color: ${theme.color.bg_white};
  border-radius: ${theme.radii.large};

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.bold};
  line-height: ${theme.lineHeights.body};
`;

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 280px;
  padding: 0 20px;
`;

export const StatisticsItem = styled.li`
  display: flex;
  align-items: center;

  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.normal};
  line-height: ${theme.space[6]}px;

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
  width: 280px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  margin-top: 28px;
`;

export const StatisticsSumItem = styled(StatisticsItem)`
  justify-content: space-between;
  font-weight: ${theme.fontWeights.bold};
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

export const StatisticsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 2;
`;
