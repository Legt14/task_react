import React from "react";
import "./App.css";
import { TaskCounter } from "./taskCounter";
import { TaskSearch } from "./taskSearch";
import { TaskList } from "./taskList";
import { TaskItem } from "./taskItem";

class Task {
  id: number;
  title: string;
  content?: string;
  isCompleted: boolean = false;

  constructor(
    id: number,
    title: string,
    content?: string,
    isCompleted: boolean = false
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.isCompleted = isCompleted;
  }
}

let nTask: Task = new Task(0, "coffe", "remember buy coffe");
let secondTask: Task = new Task(1, "Milk", "remember buy milk");
let sugar: Task = new Task(
  4,
  "Sugar",
  "remember buy sugaaaaaaaaaaaaaaaaaaaaaaaar",
  true
);
let anotherTask: Task = new Task(2, "asdasd", "edqweqw buy qweqweqwe");
let aTask: Task = new Task(3, "asdasd", "edqweqw buy qweqweqwe", true);

const tasks: Task[] = [];

tasks.push(nTask);
tasks.push(secondTask);
tasks.push(sugar);
tasks.push(anotherTask);
tasks.push(aTask);

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [task, setTask] = React.useState(tasks);

  const completedTask = task.filter((record) => !!record.isCompleted);

  const Completedcounter: number = completedTask.length;

  let searchedTask = [];

  searchedTask.length >= 1
    ? (searchedTask = task)
    : (searchedTask = task.filter((record) => {
        const tasksText = record.title.toLowerCase();
        const searchText = searchValue.toLowerCase();

        return tasksText.includes(searchText);
      }));

  const completeTask = (taskId: number) => {
    const taskIndex = tasks.findIndex((record) => record.id === taskId);
    const newTasks = [...tasks];

    !!newTasks[taskIndex].isCompleted
      ? (newTasks[taskIndex].isCompleted = false)
      : (newTasks[taskIndex].isCompleted = true);
    setTask(newTasks);
  };

  const deleteTask = (taskId: number) => {
    const taskIndex = tasks.findIndex((record) => record.id === taskId);
    const delTasks = [...tasks];
    delTasks.splice(taskIndex, 1);
    setTask(delTasks);
  };

  return (
    <React.Fragment>
      <TaskCounter
        completedCount={Completedcounter}
        incompleteCount={task.length}
      />
      <TaskSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TaskList>
        {searchedTask.map((record) => (
          <TaskItem
            key={record.id}
            id={record.id}
            title={record.title}
            content={record.content}
            isCompleted={record.isCompleted}
            OnComplete={() => completeTask(record.id)}
            OnDelete={() => deleteTask(record.id)}
          />
        ))}
      </TaskList>
    </React.Fragment>
  );
}

export default App;
