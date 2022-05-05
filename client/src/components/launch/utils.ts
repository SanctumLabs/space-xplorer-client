/* eslint-disable import/extensions */
import galaxy from '@assets/images/galaxy.jpg';
import iss from '@assets/images/iss.jpg';
import moon from '@assets/images/moon.jpg';

const backgrounds = [galaxy, iss, moon];

// eslint-disable-next-line import/prefer-default-export
export function getBackgroundImage(idOrUrl: string | number): string {
  return typeof idOrUrl === 'number'
    ? `url(${backgrounds[Number(idOrUrl) % backgrounds.length]})`
    : `url(${idOrUrl})`;
}
