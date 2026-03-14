import './CSS/style.css'
import './CSS/container.css'
import { useState } from 'react'

export default function My_Page({ count }) {
    let SetName_input = document.querySelector('#taskname_input');
    let task_list = document.querySelector('.task_list');

    const [taskname, setTaskname] = useState(null);

    const set_TaskName = (e) => {
        setTaskname(e.target.value);
    }

    const add_NewTask = () => {
        if (taskname) {
            let task_div = document.createElement('div');
            task_div.setAttribute('class', 'task_div');

            let input_box = document.createElement('input');
            input_box.type = "checkbox";
            input_box.setAttribute('id', 'checks');
            task_div.appendChild(input_box);

            let head3 = document.createElement('h3');
            head3.innerHTML = taskname;
            task_div.appendChild(head3);

            let buttun = document.createElement('button');
            buttun.setAttribute('id', 'delete_task');
            buttun.addEventListener("click", delete_btn);
            buttun.innerHTML = "Delete";
            task_div.appendChild(buttun);

            task_list.appendChild(task_div);

            count();
            setTaskname(null);
            SetName_input.value = '';
        }
    }

    const delete_btn = (e) => {
        (e.target.parentElement).remove();
    }

    return (
        <>
            <div className="area open-sans">
                <h2>Task Manager</h2>
                <div className="block">
                    <input type="text" placeholder='Task Name' id='taskname_input' onChange={set_TaskName} />
                    <button className='add_btn' onClick={add_NewTask}>Add</button>
                    <div className="tasks">
                        <hr />
                        <h5>Tasks List</h5>
                        <div className="task_list">
                            <div className="task_div">
                                <input type="checkbox" id='checks' /><h3>My Task Here</h3><button id='delete_task' onClick={delete_btn}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}