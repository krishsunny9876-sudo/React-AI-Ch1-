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
                </div>
            </div>
        </>
    )
}