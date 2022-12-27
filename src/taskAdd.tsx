import React from "react";

export function TaskAdd(){
    return(
        <>
            <p>Title Task</p>
            <input type="text" placeholder="Title task" className="titleTask"/>
            <p>Content</p>
            <textarea id="contentTask" placeholder="Content Task"></textarea>
            <button>
                +
            </button>
        </>
    )
}