import React from "react";
import styles from "./Profile.module.css";
import Icons from "../Icons/Icons";

const Profile = ({ avatar, name }) => {
  return (
    <section className={styles.wrap}>
      <img src={avatar} alt="" className={styles.avatar} />
      <div className={styles.description}>
        <h3 className={styles.text}>{name}</h3>
        <p className={styles.exp}>Frontend developer</p>
        <div className={styles.contact}>
          <a className={styles.email} href="mailto:otosigen@gmail.com">
            otosigen@gmail.com
          </a>
          <a className={styles.phone} href="tg://resolve?domain=otosigen">
            +7 962 384 80 50
          </a>
        </div>
      </div>
      <span className={styles.icons__logo}>
        <Icons />
      </span>
    </section>
  );
};

export default Profile;
