import React from "react";
import styles from "./Icons.module.css";

const Facebook = () => {
  return (
    <a href="https://www.facebook.com/max.akinshin">
      <svg
        className={styles.icon__link}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={styles.icon__link_hover}
          d="M12 0C5.38323 0 0 5.38323 0 12C0 18.6163 5.38323 24 12 24C18.6163 24 24 18.6163 24 12C24 5.38323 18.6173 0 12 0ZM14.9843 12.4225H13.032C13.032 15.5416 13.032 19.381 13.032 19.381H10.139C10.139 19.381 10.139 15.5788 10.139 12.4225H8.76388V9.9631H10.139V8.37235C10.139 7.23306 10.6804 5.45283 13.0586 5.45283L15.2023 5.46105V7.84838C15.2023 7.84838 13.8996 7.84838 13.6463 7.84838C13.3931 7.84838 13.0329 7.97503 13.0329 8.51833V9.96359H15.2371L14.9843 12.4225Z"
          fill="#999999"
        />
      </svg>
    </a>
  );
};
export default Facebook;
