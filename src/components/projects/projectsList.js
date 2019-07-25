import React from 'react';
import styled from 'styled-components';
import Project from './project';

const ListOfProjects = styled('ul')`
display: flex;
flex-direction: column;
@media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
const ProjectItem = styled('li')`
border-bottom: 1px dotted #e6e6e6;
&:last-child {
    border-bottom: none;
}
@media (min-width: 768px) {
        width: 31%;
        box-sizing: border-box;
        border-bottom: none;
        
    }
`;

const ProjectsList = ({projects}) => {
    const projectsList = projects && projects.map(item => {

        const project = item.id === projects[0].id ?
            <Project firstChild project={item}/> :
            <Project project={item}/> ;

        return (
            <ProjectItem key={item.id}>
                {project}
            </ProjectItem>
        )
    });

    return (
        <ListOfProjects>
            {projectsList}
        </ListOfProjects>
    )
};

export default ProjectsList;
