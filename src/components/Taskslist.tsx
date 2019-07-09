import React, { useState, useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { List } from './List';
import { EditTask } from './EditTask'
import { task } from '../types';

const getDataUrl = 'https://test.megapolis-it.ru/api/list';



export function TasksList() {

    const [tasks, setTasks] = useState([{title: 'sample', id: 0}]);
    const [task, setTask] = useState('');
    const [loading, setLoading] = useState(true);
    const [isOpened, setIsOpened] = useState(false);

    async function loadTasks() {
        return await fetch(getDataUrl).then(response => response.json()).then(json => {
            setTasks(json.data);
            setLoading(false);
        });
    }

    function submitForm(event: any) {
        event.preventDefault();

        fetch('https://test.megapolis-it.ru/api/list', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: task })

        }).then(response => response.json()).then(data => data.success === true ? loadTasks() : console.log(data.error));
    }

    function changeTask(newTitle: string, id:number) {
        fetch(`https://test.megapolis-it.ru/api/list/${id}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: newTitle})
        }).then(response => response.json()).then(data => data.success ? loadTasks() : console.log(data.error));
    }

    function removeTask(id: number) {
        fetch(`https://test.megapolis-it.ru/api/list/${id}`, {
            method: "DELETE"
        }).then(response => response.json()).then(data => data.success ? loadTasks() : console.log(data.error));
    }


    useEffect(() => {
        loadTasks();
    }, [])

    return loading ? <span>please wait</span> : (
        <Router>
            <div>
                <Route path="/" exact render={() => <List tasks={tasks} removeHandler={removeTask} />} />
                <Route path="/:taskID" render={({match}) => <EditTask match={match} tasks={tasks} onClick={changeTask} removeHandler={removeTask} />} />
            </div>
        </Router>
    )
}

