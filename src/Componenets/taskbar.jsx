import './CSS/style.css'
import './CSS/container.css'

export default function My_Page() {


    return (
        <>
            <div className="area open-sans">
                <h2>Task Manager</h2>
                <div className="block">
                    <input type="text" placeholder='Task Name' />
                    <button className='add_btn'>Add</button>
                    <div className="tasks">
                        <hr />
                        <h5>Task List</h5>
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