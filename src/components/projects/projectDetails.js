import React from 'react';
import styled from 'styled-components';

import Signature from './signature';

const ProjectWrapper = styled('div')`
@media (min-width: 768px) {
     max-width: 1200px; 
     margin: 0 auto;
     padding: 0 15px;
     display: flex;
     flex-direction: row;
    }
`;
const Image = styled('img')`
width: 100%;
max-height: 500px;
@media (min-width: 768px) {
     width: 50%;
    }
`;
const BodyWrapper = styled('div')`
margin: 0 15px;
display:flex;
flex-direction: column;
@media (min-width: 768px) {
     width: 50%;
    }

`;
const Title = styled('h1')`
order: 2;
font-weight: 700;
font-size: 2em;
line-height: 1.2em;
`;
const Breadcrumbs = styled('p')`
order: 1;
margin: 15px 0 5px;
font-size: 1.2em;
font-weight: 700;
`;
const BodyText = styled('p')`
order: 3;
color: #b3b3b3;
margin: 15px 0 30px;
font-size: 1.1em;
line-height: 1.5em;
@media (min-width: 768px) {
     flex-grow: 1;
    }
`;

const ProjectDetails = (props) => {
    const projectId = props.match.params.id;

    const project = initialStateProjects.filter(item => item.id === projectId)[0];
    const author = {
        name: project ? project.author : '',
        avatar: project ? project.avatar : ''
    };

    if (project) {
        return (
            <ProjectWrapper>
                <Image src={project.img} alt='' title={project.title}/>
                <BodyWrapper>
                    <Title>{project.title}</Title>
                    <Breadcrumbs>{project.heading}</Breadcrumbs>
                    <BodyText>{project.body}</BodyText>
                    <Signature author={author}/>
                </BodyWrapper>
            </ProjectWrapper>
        )
    } else {
        return (
            <div>
                <p>Something went wrong...</p>
            </div>
        )
    }


};

export default ProjectDetails;

const initialStateProjects = [
    {
        id: '1',
        heading: 'US',
        title: 'Poverty To Empowerment In Chicago',
        img: 'https://picsum.photos/id/1/600/400',
        body: 'How one woman is transforming the lives of underprivileged children in the inner city',
        author: 'Betty Eghan',
        avatar: 'https://i.pravatar.cc/100?img=1'
    },
    {
        id: '2',
        heading: 'Politics',
        title: 'Divided American Lives During War',
        img: 'https://picsum.photos/id/4/600/400',
        body: 'Curabitur a magna lectus. Integer eget felis in eros blandit',
        author: 'John Stone',
        avatar: 'https://i.pravatar.cc/100?img=2'
    },
    {
        id: '3',
        heading: 'Tech',
        title: 'The Future of Gasoline',
        img: 'https://picsum.photos/id/668/600/400',
        body: 'Donec tincidunt risus sodales metus tincidunt vulputate. Fusce dignissim ipsum a massa faucibus, sed scelerisque ',
        author: 'Mia Wong',
        avatar: 'https://i.pravatar.cc/100?img=3'
    },
    {
        id: '4',
        heading: 'Lives',
        title: 'Test Test',
        img: 'https://picsum.photos/id/911/600/400',
        body: ' Nam vitae iaculis eros. Donec volutpat leo velit, eu iaculis sapien volutpat nec. Cras faucibus, ',
        author: 'Hayman Andrews',
        avatar: 'https://i.pravatar.cc/100?img=4'
    }
];