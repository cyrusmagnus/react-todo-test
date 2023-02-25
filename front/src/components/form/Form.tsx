import React from 'react';
import { FormButton } from '../form-button/FormButton';
import { FormInput } from '../form-input/FormInput';
import styles from './Form.module.scss';

export const Form = () => {
  return (
    <>
      <form className={styles.form}>
        <h2 className={styles.title}>Вход</h2>
        <FormInput value='#' type='text'/>
        <FormInput value='#' type='password'/>
        <FormButton onClick={()=>{}} text='Войти'/>
        <button className={styles.button} onClick={()=>{}}>Зарегистрироваться</button>
      </form>
    </>
  )
}
