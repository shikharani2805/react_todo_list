import React from 'react';
import './App.css';


function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>{
        return <div className="list" key="item.key">
            <h3>{item.text}</h3>
        </div>
    })
    return(
        <div> {listItems}</div>
    )
}

export default ListItems;