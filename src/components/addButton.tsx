import React from 'react';

export function addButton({clickHandler}:any) {
    
    const handleClick = (e:any):void => {
        clickHandler(true);
    }

    return (
        <button          
        onClick={handleClick}>добавить</button>
    )
}