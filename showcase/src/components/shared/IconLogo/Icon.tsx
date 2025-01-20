import React from 'react';

interface IIconProps extends React.HTMLProps<HTMLSpanElement> {
    img: string,
    className?:string,
}

const ImgIcon: React.FC<IIconProps> = (props) => {
    return (
        <img className={props.className ? props.className :  "default-icon"} src={props.img} alt="carregando.." />
    )
}

export default ImgIcon;