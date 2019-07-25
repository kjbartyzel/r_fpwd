import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'

const ProjectItem = styled('article')`
display: flex;
flex-direction: ${props => props.firstChild ? 'column' : 'row'};
justify-content: ${props => props.firstChild ? 'unset' : 'space-between'};
align-items: ${props => props.firstChild ? 'unset' : 'center'};
padding: 12px 0;

@media (min-width: 768px) {
        flex-direction: column;
        justify-content: unset;
        align-items: unset;
    }
`;

const ProjectDescribe = styled('div')`
order: ${props => props.firstChild ? '2' : '1'} 
display: flex;
flex-direction: column;

@media (min-width: 768px) {
     order: 2;   
    }
`;

const ProjectTitle = styled('h1')`
order: 2;
font-size: ${props => props.firstChild ? '1.5em' : '1.1em'}
font-weight: ${props => props.firstChild ? '700' : '600'}
padding-right: 20px;

@media (min-width: 768px) {
     font-size: 1.5em;
     padding-right: 0;
    }
`;

const ProjectHeading = styled('p')`
order: 1;
text-transform: uppercase;
font-weight: bold;
`;

const ProjectImg = styled('img')`
order: ${props => props.firstChild ? '1' : '2'} ;
margin-bottom: ${props => props.firstChild ? '15px' : 'unset'} ;
max-width: ${props => props.firstChild ? '100%' : '80px'} ;
max-height: ${props => props.firstChild ? 'none' : '80px'} ;
height: ${props => props.firstChild ? 'auto' : '100%'} ;

@media (min-width: 768px) {
     order: 1;
     max-height: initial;
     max-width: 100%; 
     margin-bottom: 15px;
     height: auto;  
    }
`;

const Project = ({project, firstChild}) => {
    return(
        <NavLink to={`/project/${project.id}`}>
            <ProjectItem firstChild={firstChild}>
                <ProjectDescribe firstChild={firstChild}>
                    <ProjectTitle firstChild={firstChild}>{project.title}</ProjectTitle>
                    <ProjectHeading>{project.heading}</ProjectHeading>
                </ProjectDescribe>
                <ProjectImg firstChild={firstChild} src={project.img} alt='' title={project.title}/>
            </ProjectItem>
        </NavLink>
    )
};

export default Project;