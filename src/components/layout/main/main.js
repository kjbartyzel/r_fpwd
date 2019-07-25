import React, {Component} from 'react';
import styled from 'styled-components';

import Tags from '../tags/tags';
import ProjectsList from '../../projects/projectsList'

const BodyWrapper = styled('div')`
    margin: 0 15px;
    @media (min-width: 768px) {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 15px;
    }
`;

class Main extends Component {
    render() {
        return (
            <BodyWrapper>
                <Tags tags={initialStateTags}/>
                <ProjectsList projects={initialStateProjects}/>
            </BodyWrapper>
        )
    }
}

export default Main;


const initialStateTags = [
    {id: '1', name: 'TechDesign'},
    {id: '2', name: 'Healthcare Revolution'},
    {id: '3', name: 'Future'},
    {id: '4', name: 'Project'},
    {id: '5', name: 'Chichago'},
    {id: '6', name: 'Lives'},
];

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