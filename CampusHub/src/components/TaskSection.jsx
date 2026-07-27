import TaskList from "./TaskList";

function TaskSection({ tasks, dispatch, editTask, studentName }) {
    return (
        <div>
            <h2>Task Section</h2>

            <TaskList
                tasks={tasks}
                dispatch={dispatch}
                editTask={editTask}
                studentName={studentName}
            />
        </div>
    );
}

export default TaskSection;