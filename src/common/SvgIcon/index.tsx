import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height }: SvgIconProps) => (


    <img
        src={`${process.env.PUBLIC_URL}/assets/img/svg/${src}`}
        alt={src}
        width={width}
        height={height}
    />
);
