import React, { useState, useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {List} from './List';
import {EditTask} from './EditTask'

import {task} from '../types';

const getDataUrl = 'https://test.megapolis-it.ru/api/list';

export function TasksList() {
    const [tasks, setTasks] = useState( [{}] );
    const [task, setTask] = useState('');
    const [loading, setLoading] = useState(true);
    const [isOpen, setModalState] = useState(false);

    async function loadTasks() {
        return await fetch(getDataUrl).then(response => response.json()).then(json => {
            setTasks(json.data);
            setLoading(false);
        });
    }


    function submitForm(event:any) {
        event.preventDefault();
        
        fetch('https://test.megapolis-it.ru/api/list', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({title: task})
            
        }).then(response => response.json()).then(data => data.success === true ? addTask(data.id) : console.log(data.error));
    }

    function addTask(id:number) {
       setTasks( tasks.concat({id: id, title: task}) )
    }

    function inputHandler(e:any){
        setTask(e.target.value);
    }

    function changeTask(id:string, actionType:string) {
        fetch(`https://test.megapolis-it.ru/api/list/${id}`, {
            method: actionType,
        }).then(response => response.json()).then(data => data.success === true ? loadTasks() : console.log(data.error));
    }

    useEffect( () => {
        loadTasks();
    }, [])

    return loading ? <span>please wait</span> : (
        <Router>
        <div>
            <h1>Список задач</h1>
            
            <form onSubmit={submitForm}>
            <label htmlFor="taskInput">Краткое описание</label>
            <input id="taskInput" type="text" onChange={inputHandler}/>
            <button type="submit">создать</button>
            </form>
            <Route path="/" exact render={(props) => <List {...props} tasks={tasks} onClick={changeTask}/> } />
            <Route path="/:taskID" render={(props) => <EditTask {...props} tasks={tasks} onClick={changeTask}/> } />
        </div>
        </Router>
    )
}

