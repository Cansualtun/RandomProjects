import React, {useState, FC, ChangeEvent, useEffect} from 'react';
import "./app.scss";
import {ITask} from "./Interfaces";
import TodoTask from "./components/TodoTask";
import {FiEdit} from "@react-icons/all-files/fi/FiEdit";


const App: FC = () => {
    const [task, setTask] = useState<string>(""); //define state with type
    const [Id, setId] = useState<number>(0);
    const [deadline, setDeadline] = useState<number>(0);
    const [todoList, setTodoList] = useState<ITask[]>(getValues);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "task") {
            setTask(event.target.value)
        } else {
            setDeadline(Number(event.target.value)) //Change type wrapping with Number + parentheses
        }
    };
    //Adding Task
    const addTask = (): void => {
        const newTask = {Id: Id, taskName: task, deadline: deadline};
        setTodoList([...todoList, newTask]) //Adding newTask split into in todoList
        setId(0);
        setTask("");
        setDeadline(0);
    };

    //Adding value to browser
    function getValues() {
        const storedValues = localStorage.getItem('todoList');
        if (!storedValues) return {
            Id: '',
            task: '',
        };
        return JSON.parse(storedValues);
    }

    // Delete Task
    const deleteTask = (taskNameToDelete: string): void => {
        setTodoList(todoList.filter((task) => {
            return task.taskName !== taskNameToDelete;
        }))
    }
    //Local Storage Add and Remove Items
    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }, [todoList]);
    return (
        <div className="App">
            <div className="container">
                <h1 className="header">TodoList App <FiEdit/></h1>
                <input type="text" placeholder="Task" className="place" name="task" value={task}
                       onChange={handleChange}/>
                <div>
                    <input type="number" placeholder="Deadline" className="deadline" name="deadline" min="1"
                           value={deadline} onChange={handleChange}/>
                </div>
                <div>
                    <button type="submit" className="btn" onClick={addTask}>Add Task</button>
                </div>
            </div>
            <div className="todoList">
                {todoList.map((task: ITask, key: number) => {
                    return <TodoTask key={key} task={task} deleteTask={deleteTask}/>;
                })}
            </div>
        </div>
    );
}
export default App;
