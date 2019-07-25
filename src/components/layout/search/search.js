import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faShareAlt} from '@fortawesome/free-solid-svg-icons';

const SearchWrapper = styled('div')`
flex-grow: 1;
> svg {
    float: right;
}

@media (min-width: 768px) {
    order: 3;   
}
`;

const Search = ({isOnProjectPage}) => {
    const isShare = isOnProjectPage ?
        <FontAwesomeIcon icon={faShareAlt}/> :
        <FontAwesomeIcon icon={faSearch}/>;

    return (
        <SearchWrapper>
            {isShare}
        </SearchWrapper>
    )
}

export default Search;