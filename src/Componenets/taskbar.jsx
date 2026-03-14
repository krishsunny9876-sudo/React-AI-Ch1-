import './CSS/style.css'
import './CSS/container.css'
import { useState } from 'react'

export default function My_Page() {

    const [taskname, setTaskname] = useState(null);

    const set_TaskName = (e) => {
        console.log(e.value);
    }

    return (
        <>
            <div className="area open-sans">
                <h2>Task Manager</h2>
                <div className="block">
                    <input type="text" placeholder='Task Name' id='taskname_input' onChange={set_TaskName} />
                    <button className='add_btn'>Add</button>
                    <div className="tasks">
                        <hr />
                        <h5>Tasks List</h5>
                        <div className="task_list">
                            <div className="task_div">
                                <input type="checkbox" id='checks' /><h3>My Task Here</h3><button>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}