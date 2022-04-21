import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid silver;
  align-self: center;
`;

const InfoPara = styled.p`
  font-size: 10px;
`;

const ContentPara = styled.p`
  margin: 0;
`;

const VoteContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const VoteBtn = styled.button`
width: 35px;
height: 35px;
background-color: transparent;
color: silver;
border: 1px solid transparent;
border-radius: 5px;
font-size: 20px;
font-weight: bold;
align-self: center;
margin-top: 10px;
margin-bottom: 10px;
cursor: pointer;
&:hover {
  background-color: rgba( 0, 0, 0, 0.4 );
  border: 1px solid silver;
}
`;

const VoteCount = styled.div`
  text-align: center;
`;


const Comment = ( props ) => {
  const { data, commentUpvote, commentDownvote } = props;

  return (
    <Container>
      <InfoPara>{ `${data.username} ${ data.date }` }</InfoPara>
      <ContentPara>{ data.content }</ContentPara>
      <VoteContainer>
        <VoteBtn onClick={ () => { commentUpvote( data ) } }>+</VoteBtn>
        <VoteCount>{ data.voteCount }</VoteCount>
        <VoteBtn onClick={ () => { commentDownvote( data ) } }>-</VoteBtn>
      </VoteContainer>
    </Container>
  );
};

export { Comment };