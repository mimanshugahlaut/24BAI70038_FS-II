import TaskCard from "./TaskCard";

function TaskList({ tasks, dispatch, editTask, studentName }) {
    return (
        <>
            {tasks.map((task) => (
                <TaskCard
                    key={task.id}
                    task={task}
                    dispatch={dispatch}
                    editTask={editTask}
                    studentName={studentName}
                />
            ))}
        </>
    );
}

export default TaskList;