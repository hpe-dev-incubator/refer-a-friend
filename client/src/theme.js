import { hpe } from 'grommet-theme-hpe';
import { deepMerge } from 'grommet/utils/object';

export default deepMerge(hpe, {
  global: {
    breakpoints: {
      small: {
        value: 950
      }
    },
    colors: {
      "fresh-green": "#00C496",
      "dark-gray": "#384d5c"
    }
  }
})
