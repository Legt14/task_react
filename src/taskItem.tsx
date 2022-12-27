import React from "react";
import {MouseEvent} from "react";


export interface Task {
  id: number
  title: string;
  content?: string;
  isCompleted: boolean;
  OnComplete: (value:MouseEvent) => void;
  OnDelete: (value:MouseEvent) => void;
}

export function TaskItem({ id, title, content, isCompleted, OnComplete, OnDelete }: Task) {

  return (
    <>
      <div className="card__container">
        <div className="card__title">
          <span>{title}</span>
          <span onClick={OnDelete}>
            <i className="fa-solid fa-xmark"></i>
          </span>
        </div>
        <div className="card__content">
          <span>{content}</span>
        </div>
        <div className="card__state">
          <span className="complete" onClick={OnComplete}>
            <i
              className={`fa-solid fa-minus ${
                isCompleted === true && "fa-solid fa-check"
              }`}
            ></i>
          </span>
        </div>
      </div>
    </>
  );
}
