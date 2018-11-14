import { hpe } from 'grommet-theme-hpe';
import { deepMerge } from 'grommet/utils/object';

export default deepMerge(hpe, {
  global: {
    breakpoints : {
      small : {
        value: 970,
      }
    }
  }
})
