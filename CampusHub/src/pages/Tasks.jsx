import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useReducer, useState } from "react";
import { taskReducer } from "../reducers/taskReducer";
import useLocalStorage from "../hooks/useLocalStorage";
import { useEffect } from "react";
import TaskSection from "../components/TaskSection";
import { validateTask } from "../utils/validation";

function Tasks() {

    const [storedTasks, setStoredTasks] = useLocalStorage("tasks", []);
    const [tasks, dispatch] = useReducer(taskReducer, storedTasks);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("Medium");
    const [deadline, setDeadline] = useState("");
    const [editId, setEditId] = useState(null);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");

    function addTask() {
        if (!validateTask(title)) {
            alert("Enter task title");
            return;
        }

            const task = {
            id: editId || Date.now(),
            title,
            description,
            priority,
            completed: editId ? tasks.find((t) => t.id === editId).completed : false,
            deadline,
        };

        if (editId) {
            dispatch({
                type: "UPDATE_TASK",
                payload: task,
            });
        }
        else {
            dispatch({
                type: "ADD_TASK",
                payload: task,
            });
        }

        setTitle("");
        setDescription("");
        setPriority("Medium");
        setDeadline("");

        setEditId(null);
    }

    function editTask(task) {
        setTitle(task.title);
        setDescription(task.description);
        setPriority(task.priority);
        setDeadline(task.deadline);

        setEditId(task.id);
    }

    const filteredTasks = tasks.filter((task) => {
            const matchesSearch = task.title
                .toLowerCase()
                .includes(search.toLowerCase());

            const matchesFilter =
                filter === "All" ||
                (filter === "Completed" && task.completed) ||
                (filter === "Pending" && !task.completed);

            return matchesSearch && matchesFilter;
        }).sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

    useEffect(()=>{
        setStoredTasks(tasks);
    }, [tasks]);


    return (
        <>
        <Navbar/>
        <div style={{display: "flex"}}>
            <Sidebar/>

            <div style={{padding: "20px"}}>
                <h1>Tasks</h1>

                <input type="text" placeholder="Search Tasks" value={search} onChange={(e)=>setSearch(e.target.value)}/>

                <br/><br/>

                <select value={filter} onChange={(e)=>setFilter(e.target.value)}>
                    <option>All</option>
                    <option>Completed</option>
                    <option>Pending</option>
                </select>

                <br/><br/>

                <input type="text" placeholder="Task Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>

                <br></br>

                <input type="text" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)}/>

                <br></br>

                <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>

                <br></br>

                <input type="date" value={deadline} onChange={(e)=>setDeadline(e.target.value)}/>

                <br></br>

                <button onClick={addTask}>{editId?"Update Task" : "Add Task"}</button>

                <hr/>

                <TaskSection
                tasks={filteredTasks}
                dispatch={dispatch}
                editTask={editTask}
                studentName="Mimanshu"
                />
            </div>
        </div>
        </>
    );
}

export default Tasks;