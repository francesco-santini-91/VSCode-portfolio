import React from 'react';
import './Content.css';

export default function Content(props) {
    return(
        <div className="Content" style={{marginLeft: props.margin__left}}>
            {props.content()}
        </div>
    );
}