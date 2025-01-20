import React, { useEffect, useState } from "react";

interface INavBar{
  ClassName?:string,
  ClassNameText?:string,
  link?:string,
  label:string,
  icon?: string,
}

const NavBarLink: React.FC<INavBar> = ({ClassName, ClassNameText, link, label, icon}) => {

    return (
        <nav className={ClassName?ClassName:"default-nav"}>
          <ul>
            <li>
         
              <a href={link} className={ClassNameText}>
                <img src={icon?icon:""}/>
                {label}
                </a>
            </li>
          </ul>
        </nav>
    )
}

export default NavBarLink;