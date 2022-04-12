import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CreatePost = ( props ) => {
  const { addPost } = props;

  const [ title, setTitle ] = useState('');
  const [ content, setContent ] = useState('');

  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle( e.target.value );
  }

  const handleContentChange = (e) => {
    setContent( e.target.value );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if( title === '' && content === '' ) {
      navigate( '/' );
    }

    addPost( title, content );

    setTitle('');
    setContent('');
    navigate( '/' );
  };

  return (
    <MainContainer>
      <Header>Create a post</Header>
      <FormContainer onSubmit={ handleSubmit }>
        <TitleInput type='text' placeholder='Title' value={ title } onChange={ handleTitleChange }/>
        <TextInput type='text' placeholder='Text ( optional )' value={ content } onChange={ handleContentChange } />
        <PostButton>POST</PostButton>
      </FormContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Header = styled.p`
  width: 100%;
  border-bottom: 1px solid silver;
  color: silver;
  font-weight: bold;
  padding-bottom: 5px;
`;

const FormContainer = styled.form`
  width: 100%;
  height: 100%;
  background-color: #1b1b1b;
  border: 1px solid silver;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const TitleInput = styled.input`
  width: 90%;
  height: 35px;
  border: 1px solid silver;
  border-radius: 5px;
  background-color: transparent;
  color: silver;
  text-indent: 15px;
  align-self: center;
  margin-bottom: 20px;
`;

const TextInput = styled.textarea`
  height: 140px;
  width: 90%;
  border: 1px solid silver;
  border-radius: 5px;
  background-color: #1b1b1b;
  color: silver;
  text-indent: 15px;
  align-self: center;
  margin-bottom: 20px;
`;

const PostButton = styled.button`
  width: 50%;
  height: 35px;
  border: 1px solid silver;
  border-radius: 5px;
  background-color: silver;
  color: #1b1b1b;
  font-weight: bold;
  align-self: center;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`;

export { CreatePost };