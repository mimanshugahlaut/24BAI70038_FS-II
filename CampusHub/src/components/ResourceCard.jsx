function ResourceCard({resource, deleteResource}){
    return(
        <div>
            <h3>{resource.title}</h3>
            <p>Category: {resource.category}</p>

            <a href={resource.url}
            target="_blank"
            rel="noreferre">
                {resource.url}
            </a>

            <br/><br/>

            <button onClick={() => deleteResource(resource.id)}>Delete</button>

            <hr/>
        </div>
    );
}

export default ResourceCard;