import React from 'react';
import Title from '../../components/title/Title';
import styles from './TasksPage.module.scss';
import Button from "../../components/button/Button";

const TasksPage = () => {
    return (
        <>
            <div><Title/></div>
            <input type="text" placeholder={'Название задачи'}/>
            <div>
                <div><Button color={'#d75959'} text={'Отчистить'} onClick={()=>{}}/></div>
                <div><Button color={'#051021'} text={'Добавить'} onClick={()=>{}}/></div>
            </div>
        </>
    );
};

export default TasksPage;
