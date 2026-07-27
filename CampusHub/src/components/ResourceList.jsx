import ResourceCard from "./ResourceCard";
function ResourceList({resources, deleteResource}) {
    return (
        <>
        {resources.map((resource) => (
            <ResourceCard
            key={resource.id}
            resource={resource}
            deleteResource={deleteResource}
            />
        ))}
        </>
    );
}

export default ResourceList;