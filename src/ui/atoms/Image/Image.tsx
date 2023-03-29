import NextImage from 'next/image';
import * as S from './Image.style';

interface ImageProps {
  src: string;
  alt: string;
}

export const Image = ({ src, alt }: ImageProps) => {
  return (
    <S.Image>
      <NextImage src={src} alt={alt} fill />
    </S.Image>
  );
};

export const ImageStyle = S;
