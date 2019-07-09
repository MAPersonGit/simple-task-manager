import React,  { useState } from 'react';
import ReactDOM from 'react-dom';

const styles = {
    position: "absolute",
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: 'yellow'
} as React.CSSProperties;

export function Popup() {
    const [closed, setClosed] = useState(true);
    const node = document.getElementById('root');

    const fragment = (
        <div style={styles}>
        <button onClick={() => setClosed(!closed)}>close</button>
         <form>
                <label htmlFor="taskInput">Краткое описание</label>
                <input id="taskInput" type="text"/>
                <button type="submit">создать</button>
            </form>
    </div>
    )

    return closed ? <button onClick={() => setClosed(!closed)}>add</button> : ReactDOM.createPortal(fragment, node as HTMLElement)
}