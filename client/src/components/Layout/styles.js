import { Box, Text, Paragraph } from 'grommet';
import styled from 'styled-components';

export const Background = styled(Box)`
  height: 100vh;
  background-color: rgb(56, 77, 92);
`
export const Header = styled(Paragraph)`
  font-weight: bold;
  font-size: 35px;
`
export const Hexagon = styled(Box)`
  width: 25px;
  height: 16px;
  top: 5.5px;
  background: rgb(144, 101, 232);
  position: relative;

    &:before {
      content: "";
      position: absolute;
      top: -8px;
      left: 0;
      width: 0;
      height: 0;
      border-left: 12.5px solid transparent;
      border-right: 12.5px solid transparent;
      border-bottom: 8px solid rgb(144, 101, 232);
    }

    &:after {
      content: "";
      position: absolute;
      bottom: -7px;
      left: 0;
      width: 0;
      height: 0;
      border-left: 12.5px solid transparent;
      border-right: 12.5px solid transparent;
      border-top: 8px solid rgb(144, 101, 232);

    }
`