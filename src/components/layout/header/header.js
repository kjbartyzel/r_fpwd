import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../navbar/navbar';
import Search from '../search/search';

const Head = styled('header')`
@media (min-width: 768px) {
    padding: 22px 15px;
    margin: 0 0 20px 0;
    box-shadow: 0 8px 5px -5px rgba(0,0,0,0.2); 
}
`;

const HeaderInnerWrapper = styled('div')`
display: flex;
justify-content: left;
align-items: center;
margin: 20px 15px;
@media (min-width: 768px) {
    max-width: 1200px;
    margin: 0 auto;
    > a {
        order: 1;
        margin-right: 50px;
        font-size: 1.7em;
    } 
}
`;

const Header = (props) => {
    const isOnProjectPage = props.location.pathname.split('/')[1] === 'project';

    return (
        <Head>
            <HeaderInnerWrapper>
                <Navbar/>
                <NavLink to='/'>The Fortnightly</NavLink>
                <Search isOnProjectPage={isOnProjectPage} />
            </HeaderInnerWrapper>
        </Head>
    )
};

export default withRouter(Header);