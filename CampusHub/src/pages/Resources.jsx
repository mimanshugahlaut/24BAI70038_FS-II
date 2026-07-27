import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import ResourceList from "../components/ResourceList";
import { validateResource } from "../utils/validation";

function Resources() {

    const [resources, setResources] = useLocalStorage("resources", []);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("Programming");
    const [url, setUrl] = useState("");
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");

    function addResource() {
        if (!validateResource(title, url)) {
            alert("Fill all fields");
            return;
        }

        const newResource = {
            id: Date.now(),
            title,
            category,
            url
        };
        setResources([...resources, newResource]);

        setTitle("");
        setCategory("Programming");
        setUrl("");
    }

    function deleteResource(id) {
        setResources(resources.filter(resource => resource.id !== id));
    }

    const filteredResources = resources.filter((resource) => {

        const matchesSearch =
            resource.title.toLowerCase().includes(search.toLowerCase());

        const matchesCategory =
            filter === "All" ||
            resource.category === filter;

        return matchesSearch && matchesCategory;
    });


    return (
        <>
        <Navbar/>
        <div style={{display: "flex"}}>
            <Sidebar/>

            <div style={{padding: "20px"}}>
                <h1>Resources</h1>

                <input type="text" placeholder="Search Resources" value={search} onChange={(e)=>setSearch(e.target.value)}/>

                <br/><br/>

                <select value={filter} onChange={(e)=>setFilter(e.target.value)}>
                    <option>All</option>
                    <option>Programming</option>
                    <option>DBMS</option>
                    <option>React</option>
                </select>

                <br/><br/>

                <input type="text" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>

                <br/><br/>
                <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                    <option>Programming</option>
                    <option>DBMS</option>
                    <option>React</option>
                </select>

                <br/><br/>
                <input type="text" placeholder="Resource URL" value={url} onChange={(e)=>setUrl(e.target.value)}/>

                <br/><br/>

                <button onClick={addResource}>Add Resource</button>

                <hr/>

                <ResourceList
                resources={filteredResources}
                deleteResource={deleteResource}
                />
            </div>
        </div>
        </>
    );
}

export default Resources;