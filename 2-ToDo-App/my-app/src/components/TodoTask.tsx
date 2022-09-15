import React from "react" ;
import {ITask} from "../Interfaces";
import {BsTrash2Fill  } from "react-icons/bs";
import Table from 'react-bootstrap/Table';


interface Props {
   task:ITask;
   deleteTask(taskNameToDelete:string) : void ;
}
const TodoTask = ({task , deleteTask }:Props) => {
    return (
        <div className="task">
            <Table>
                <thead>
                <tr>
                    <th>Task</th>
                    <th>Days</th>
                    <th>Completed</th>
                </tr>
                </thead>
                <tbody>
            <tr className="content">
                <td>{task.taskName}</td>
                <td>{task.deadline}</td>
                <td><button className="delete" onClick={()=>{deleteTask(task.taskName)}}><BsTrash2Fill/></button></td>
            </tr>
        </tbody>
            </Table>
        </div>)
}
export default TodoTask;