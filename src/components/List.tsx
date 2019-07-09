import React from 'react';
import { Link } from "react-router-dom";
import {Header} from './header';
import { DeleteButton } from './DeleteButton';
import {Popup} from './popup';

interface Iprops {
    tasks: any,
    removeHandler: (id:number) => void,
}

export const List:React.FC<Iprops> = ({ tasks, removeHandler}) => {

    return (
        <div>
            <Header title='Список задач' element={<Popup/>} />
            <table>
                <tbody>
                    {tasks.map((task: any) => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.title}</td>
                            <td>
                                <DeleteButton clickHandler={removeHandler} id={task.id}/>
                                <Link to={`/${task.id}`}><button>редактировать</button></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}