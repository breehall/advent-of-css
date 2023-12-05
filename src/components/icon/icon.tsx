import { FunctionComponent } from 'react';
import iconSpritesURL from '../../assets/icons/icons.svg';

const ICON_TYPES = [
   'calendar',
   'check',
   'chevron',
   'close',
   'eyeClosed',
   'eyeOpen',
   'logout',
   'minus',
   'plus',
   'question',
   'thumbsDown',
   'thumbsUp',
   'upload',
   'user',
] as const;
type IconType = (typeof ICON_TYPES)[number];

export type IconProps = {
   id: IconType;
   size?: number;
};

export const Icon: FunctionComponent<IconProps> = ({ id, size = 24 }) => {
   return (
      <svg width={size} height={size}>
         <use xlinkHref={`${iconSpritesURL}#${id}`} />
      </svg>
   );
};

export default Icon;
