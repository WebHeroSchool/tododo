import React from 'react';
import style from './Profile.module.css';



const Profile = ({ avatar, name, login }) => {
    return (
        <div className={style.wrap}>
            <img src={avatar} alt='' className={style.avatar} />
            <div>
                <h3>
                    Имя: <span className={style.text}>{name}</span>
                </h3>
                <h3>
                    Логин: <span className={style.text}>{login}</span>
                </h3>
            </div>
        </div>
    );
}

export default Profile;