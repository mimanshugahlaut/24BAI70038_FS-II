function TaskCard({ task, dispatch, editTask, studentName }) {
    return (
        <div>

            <h3>{task.title}</h3>

            <p>{task.description}</p>

            <p>Priority: {task.priority}</p>

            <p>Deadline: {task.deadline}</p>

            <p>Status: {task.completed ? "Completed" : "Pending"}</p>

            <p>Hello, {studentName}</p>

            <button onClick={() => editTask(task)}>
                Edit
            </button>

            {" "}

            <button
                onClick={() =>
                    dispatch({
                        type: "TOGGLE_TASK",
                        payload: task.id,
                    })
                }
            >
                {task.completed ? "Mark Pending" : "Mark Complete"}
            </button>

            {" "}

            <button
                onClick={() =>
                    dispatch({
                        type: "DELETE_TASK",
                        payload: task.id,
                    })
                }
            >
                Delete
            </button>

            <hr />
        </div>
    );
}

export default TaskCard;