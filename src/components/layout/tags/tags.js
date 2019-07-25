import React from 'react';
import styled from 'styled-components';

const TagWrapper = styled('div')`
overflow-x: auto;
`;

const TagList = styled('ul')`
display: flex;
flex-wrap: nowrap;
width: max-content;
margin: 15px 0;
`;

const TagItem = styled('li')`
border-left: 1px solid #e6e6e6;
padding: 0 15px;
line-height: 0.9em;
&:first-child {
    border: none;
    padding-left: 0;
}
`;

const Tags = ({tags}) => {

    const tagList = tags && tags.map(item => {
        return (
            <TagItem key={item.id}>#{item.name}</TagItem>
        )
    });

    return (
        <TagWrapper>
            <TagList>
                {tagList}
            </TagList>
        </TagWrapper>
    )
};

export default Tags;