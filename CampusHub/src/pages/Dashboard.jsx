import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import useLocalStorage from "../hooks/useLocalStorage";
import DashboardComponent from "../components/Dashboard";
import useFetch from "../hooks/useFetch";
import { POSTS_API } from "../services/api";

function Dashboard() { 
    const [user] = useLocalStorage("user", null);
    const [tasks] = useLocalStorage("tasks", []);
    const posts = useFetch(POSTS_API);

    const totalTasks=tasks.length;
    const completedTasks = tasks.filter(
        (task) => task.completed
    ).length;

    const pendingTasks = totalTasks - completedTasks;

    return (
        <>
        <Navbar/>

        <div style={{display: "flex"}}>
            <Sidebar/>
            <div style={{padding: "20px"}}>
                <h1>Dashboard</h1>
                <h2>Welcome, {user?.name} </h2>
                <p>Total tasks: {totalTasks}</p>
                <p>Completed tasks: {completedTasks}</p>
                <p>Pending tasks: {pendingTasks}</p>

                <DashboardComponent
                studentName={user?.name}
                tasks={tasks}
                dispatch={() => {}}
                editTask={() => {}}
                />

                <h2>Latest Posts</h2>

                {posts.slice(0, 10).map((post) => (
                    <div key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                        <hr/>
                        </div>
                ))}
            </div>
        </div>
        </>
    );
}

export default Dashboard;