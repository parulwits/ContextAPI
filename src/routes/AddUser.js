import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from '../context';
import { StyledContainer, Form, Title, InputContainer, Input, Error, ButtonContainer } from '../styles/adduser'
function AddUser() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [isSubmitted, setIsSubmitted] = useState()

  const { dispatchUserEvent } = useContext(AppContext);
  const handleAddUser = (data) => {
    const user = { id: Math.random(), name: data.name, age: data.age, bio: data.bio };
    dispatchUserEvent('ADD_USER', { newUser: user });
    // alert("User added successfully!")
    setIsSubmitted(true)
  };
  return (
    <StyledContainer>
      <Form>
        {/* {isSubmitted ?
          <Title>User added successfully!</Title>
          : */}
          <form onSubmit={handleSubmit(handleAddUser)}>
            <Title>Add New User</Title>
            <InputContainer>
              <label>Name</label>
              <Input type={'text'} name="name" {...register("name", { required: true, maxLength: 20 })} />
              <Error>{errors.name?.type === 'required' && "Name is required"}</Error>
            </InputContainer>
            <InputContainer>
              <label>Age</label>
              <Input type={'number'} name="age" {...register("age", { required: true })} />
              <Error>{errors.age?.type === 'required' && "Age is required"}</Error>
            </InputContainer>
            <InputContainer>
              <label>Bio</label>
              <Input type={'text'} name="bio" {...register("bio")} />
            </InputContainer>
            <ButtonContainer>
              <input type="submit" value="Add User" className="button_submit"/>
            </ButtonContainer>
          </form>
          {/* } */}
      </Form>
    </StyledContainer>
  );
}

export default AddUser;