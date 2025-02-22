import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height }: SvgIconProps) => (
  <img src={`/img/svg/${src}`} alt={src} width={width} height={height} />
);


export const ImgIcon = ({ src, width, height }: SvgIconProps) => (
    <img src={`/img/imgs/${src}`} alt={src} width={width} height={height} />
);
