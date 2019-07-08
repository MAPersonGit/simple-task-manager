import React, { useState } from 'react';

const styles = {
    position: "absolute",
    backgroundColor: 'red'
} as React.CSSProperties;

export function Popup() {
    const [closed, setClosed] = useState(true);
    const node = document.body;

    return closed ? <button onClick={() => setClosed(!closed)}>add</button> : (
        <div style={styles}>
            <button onClick={() => setClosed(!closed)}>close</button>
             <form>
                    <label htmlFor="taskInput">Краткое описание</label>
                    <input id="taskInput" type="text"/>
                    <button type="submit">создать</button>
                </form>
        </div>
    )
}