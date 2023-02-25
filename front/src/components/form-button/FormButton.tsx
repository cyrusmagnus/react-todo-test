import React from 'react';
import styles from './FormButton.module.scss';

interface IProps{
  onClick:()=>void;
  text: string;
}

export const FormButton:React.FC<IProps> = ({onClick, text}) => 
  <button className={styles.button} onClick={onClick}>{text}</button>
