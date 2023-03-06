import React from 'react';
import Title from '../../components/title/Title';
import svgIcons from './../../img/icons.svg';
import styles from './MainPage.module.scss';

const MainPage = () => {
    return (
        <div className={styles.main}>
            <div className={styles.title}><Title/></div>
            <div className={styles.wrapper}>
                <svg width={44} height={24}>
                    <use xlinkHref={`${svgIcons}#arrow`}/>
                </svg>
                <p className={styles.text}>
                    Войдите или зарегистрируйтесь
                </p>
            </div>

        </div>
    );
};

export default MainPage;
