import React, { useState } from 'react';
import styled from 'styled-components';

import { Comment } from './Comment';

const FullPost = ( props ) => {
  const { doc, user, addVote, minusVote, addComment, commentsArray, getComments } = props;

  const [ commentInput, setCommentInput ] = useState('');

  let commentArray = commentsArray.filter( comment => comment.postID === doc.id );

  const handleChange = (e) => {
    setCommentInput( e.target.value );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addComment( commentInput, doc );
    setCommentInput('');
    getComments();
  };

  return (
    <MainContainer>
      <PostContainer>
        <CountContainer>
          <VoteBtn onClick={ () => { addVote( doc ) } }>+</VoteBtn>
          <VoteCount>{ doc.voteCount }</VoteCount>
          <VoteBtn onClick={ () => { minusVote( doc ) } } >-</VoteBtn>
        </CountContainer>
        <ContentContainer>
          <MiscPara>{ `r/readthat Posted by u/${ doc.username } ${ doc.date }` }</MiscPara>
          <TitleHead>{ doc.title }</TitleHead>
          <PostContent>{ doc.content }</PostContent>
          <CommentCount>{ `${ commentArray.length } Comments` }</CommentCount>
        </ContentContainer>
      </PostContainer>
      <CommentForm onSubmit={ handleSubmit } >
        <CommentPara>{ `Comment as ${ user.displayName }` }</CommentPara>
        <AddComment type='text' placeholder='What are your thoughts?' value={ commentInput } onChange={ handleChange } />
        <CommentBtn>Comment</CommentBtn>
      </CommentForm>
      <CommentContainer>
        { commentArray.map((data) => {
          return <Comment key={ data.id } data={ data } />
        }) }
      </CommentContainer>
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

const CommentCount = styled.button`
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

const CommentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export { FullPost };