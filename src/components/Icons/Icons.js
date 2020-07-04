import React from "react";
import Vk from "./Vk";
import Facebook from "./Facebook";
import Linkedin from "./Linkedin";
import Github from "./Githhub";
import styles from "./Icons.module.css";

const Icons = () => {
  return (
    <div className={styles.icons_wrap}>
      <Vk />
      <Facebook />
      <Github />
      <Linkedin />
    </div>
  );
};

export default Icons;
