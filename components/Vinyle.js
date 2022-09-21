import Image from "next/image";
import React from "react";
import Style from "../styles/Vinyle.module.css";

export default function Vinyle({props}) {
    console.log(props.img)

    return (
      <div className={Style.vinyle}>
       <div className={Style.Vinyle_vinyle__43n1V}>
        <Image
          src="../public/assets/images/vinyle.png"
          width="300"
          height="300"
          alt="test"
        />
        <div className={Style.Vinyle_cover__jyqpE}>
        <Image
            src={ props.img}
            width="300"
            height="300"
            alt="test"
          />
        </div>
      </div>
       
      </div>
    );
}
