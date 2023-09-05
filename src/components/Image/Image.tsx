import { FC } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className: string;
}

const Image: FC<ImageProps> = ({ src, alt, className }) => (
  <div className='image__container'>
    <img src={src} alt={alt} className={className} />
  </div>
);

export { Image };
