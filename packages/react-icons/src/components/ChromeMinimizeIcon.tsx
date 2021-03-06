import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const ChromeMinimizeIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" className={classes.svg}>
      <path d="M2048 819v205H0V819h2048z" />
    </svg>
  ),
  displayName: 'ChromeMinimizeIcon',
});

export default ChromeMinimizeIcon;
