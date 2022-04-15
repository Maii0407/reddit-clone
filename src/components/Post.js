import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Post = ( props ) => {
  const navigate = useNavigate();

  const { doc, addVote, minusVote, commentsArray } = props;

  let commentArray = commentsArray.filter( comment => comment.postID === doc.id );

  return (
    <Container>
      <CountContainer>
        <VoteBtn onClick={ () => { addVote( doc ) } }>+</VoteBtn>
        <VoteCount>{ doc.voteCount }</VoteCount>
        <VoteBtn onClick={ () => { minusVote( doc ) } } >-</VoteBtn>
      </CountContainer>
      <ContentContainer>
        <MiscPara>{ `r/readthat Posted by u/${ doc.username } ${ doc.date }` }</MiscPara>
        <TitleHead>{ doc.title }</TitleHead>
        <PostContent>{ doc.content }</PostContent>
        <Comment onClick={ () => { navigate( `/comments/${ doc.id }` ) } }>{ `${ commentArray.length } Comments` }</Comment>
      </ContentContainer>
    </Container>
  )
};

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
  height: 100%;
  background-color: gray;
  color: white;
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

export { Post };