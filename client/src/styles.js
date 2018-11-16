import styled from 'styled-components';
import { Grommet } from 'grommet';

export const StyledApp = styled(Grommet)`
  min-height: 100vh;
  min-width: unset;
  max-width: 100vw;
  & > div {
    min-height: 100vh;
  }
`;