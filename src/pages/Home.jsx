import React from 'react';
import projects from '../seeds';
import ProjectCard from '../components/ProjectCard';

function Home() {
    return (
        <>

            <div className='triplice-fischio'>
                {projects.map((project) => (
                    <ProjectCard
                        id={project.id}
                        title={project.title}
                        stack={project.stack}
                        description={project.description}
                        url={project.url}
                        image={project.images[0]}
                    />
                ))}
            </div>


        </>

    )
}

export default Home;
