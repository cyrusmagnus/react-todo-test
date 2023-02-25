import React from 'react';
import styles from './FormInput.module.scss';

interface IProps{
  value:string;
  type:string;
}

export const FormInput: React.FC<IProps> = ({value, type}) => 
  <input className={styles.input} type={type} 
         placeholder={type==='text' ? 'Логин' : 'Пароль'}/>
