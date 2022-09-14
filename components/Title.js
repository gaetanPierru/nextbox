import React from "react";
import styleTitle from "../styles/Title.module.css";

export default function Title(props) {
  return (
    <>
      <div>
        Bienvenu <span className={styleTitle.titleName}>{props.name}</span>
      </div>
      <p>Bonsoir je suis heureux</p>
    </>
  );
}
