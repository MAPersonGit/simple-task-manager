import React from 'react';

export function DeleteButton({clickHandler, id}:any) {
    
    const handleClick = (e:any):void => {
        clickHandler(e.target.dataset.id);
    }

    return (
        <button          
        data-id={id}
        onClick={handleClick}>удалить</button>
    )
}