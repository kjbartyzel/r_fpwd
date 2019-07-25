import React from 'react';
import styled from 'styled-components';

const SignatureWrapper = styled('div')`
order: 4;
display:flex;
flex-direction: row;
align-items: center;
@media (min-width: 768px) {
     margin-bottom: 15px;
    }
`;

const AuthorImage = styled('img')`
border-radius: 50%;
max-width: 50px;
`;
const Desc = styled('p')`
margin-left: 15px;
color: #777777;
position: relative;
font-weight: 700;
font-size: 1.5em;
`;

const Name = styled('span')`
color: #000000;
position: relative;
::after {
    content: '';
    display: block;
    height: 3px;
    width: 100%;
    background-color: #777777;
    position: absolute;
    bottom: -5px;
    right: 0;
}
`;

const Signature = ({author}) => {
    return(
        <SignatureWrapper>
            <AuthorImage src={author.avatar} alt='' title={author.name} />
            <Desc>by <Name>{author.name}</Name></Desc>
        </SignatureWrapper>
    )
};

export default Signature;