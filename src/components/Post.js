import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: #1b1b1b;
  color: silver;
  border: 1px solid silver;
  border-radius: 5px;
  margin-bottom: 20px;
  cursor: pointer;
  padding-bottom: 5px;
`;

const CountContainer = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
  width: 100%;
  text-align: center;
`;

const ContentContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MiscPara = styled.p`
  width: 100%;
  font-size: 10px;
`;

const TitleHead = styled.h1`
  width: 100%;
  font-size: 30px;
  margin: 0;
`;

const PostContent = styled.p`
  width: 90%;
  height: 100%;
  background-color: rgba( 1, 1, 1, 1 );
  padding: 20px;
  border-radius: 5px;
`;

const Comment = styled.div`
  width: 20%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: rgba( 0, 0, 0, 0.4 );
    outline: 1px solid silver;
  }
`;

const Post = ( props ) => {
  return (
    <Container>
      <CountContainer>
        <VoteBtn>+</VoteBtn>
        <VoteCount>{ props.doc.voteCount }</VoteCount>
        <VoteBtn>-</VoteBtn>
      </CountContainer>
      <ContentContainer>
        <MiscPara>{ `r/readthat Posted by u/${ props.doc.username } ${ props.doc.date }` }</MiscPara>
        <TitleHead>{ props.doc.title }</TitleHead>
        <PostContent>{ props.doc.content }</PostContent>
        <Comment>{ `${ props.doc.comments.length } Comments` }</Comment>
      </ContentContainer>
    </Container>
  )
};

export { Post };