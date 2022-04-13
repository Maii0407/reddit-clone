import React from 'react';
import styled from 'styled-components';

const FullPost = ( props ) => {
  const { doc, user } = props;
  return (
    <MainContainer>
      <PostContainer>
        <CountContainer>
          <VoteBtn>+</VoteBtn>
          <VoteCount>{ doc.voteCount }</VoteCount>
          <VoteBtn>-</VoteBtn>
        </CountContainer>
        <ContentContainer>
          <MiscPara>{ `r/readthat Posted by u/${ doc.username } ${ doc.date }` }</MiscPara>
          <TitleHead>{ doc.title }</TitleHead>
          <PostContent>{ doc.content }</PostContent>
          <Comment>{ `${ doc.comments.length } Comments` }</Comment>
        </ContentContainer>
      </PostContainer>
      <CommentForm>
        <CommentPara>{ `Comment as ${ user.displayName }` }</CommentPara>
        <AddComment type='text' placeholder='What are your thoughts?' />
        <CommentBtn>Comment</CommentBtn>
      </CommentForm>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #1b1b1b;
  color: silver;
  border-radius: 5px;
`;

const PostContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
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
  padding: 20px;
  border-radius: 5px;
`;

const Comment = styled.button`
  width: 20%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: silver;
  border: none;
  border-radius: 5px;
`;

const CommentForm = styled.form`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const CommentPara = styled.p`
  text-indent: 10px;
  font-weight: bold;
  font-size: 15px;
  margin: 0;
`;

const AddComment = styled.textarea`
  width: 95%;
  height: 140px;
  align-self: center;
  padding: 20px;
  background-color: transparent;
  color: silver;
  border: 1px solid silver;
  border-radius: 5px;
  resize: vertical;
`;

const CommentBtn = styled.button`
  width: 30%;
  height: 35px;
  border: 1px solid silver;
  border-radius: 5px;
  background-color: silver;
  color: #1b1b1b;
  font-weight: bold;
  align-self: flex-end;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`;

export { FullPost };