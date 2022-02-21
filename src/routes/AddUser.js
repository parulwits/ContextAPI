import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from '../context';
function AddUser() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [isSubmitted, setIsSubmitted] = useState()

  const { dispatchUserEvent } = useContext(AppContext);
  const handleAddUser = (data) => {
    const user = { id: Math.random(), name: data.name, age: data.age, bio: data.bio };
    dispatchUserEvent('ADD_USER', { newUser: user });
    setIsSubmitted(true)
  };
  return (
    <div className="app">
      <div className="form">
        {isSubmitted ?
          <div className="title">User added successfully!</div>
          :
          <form onSubmit={handleSubmit(handleAddUser)}>
            <div className="title">Add New User</div>
            <div className="input-container">
              <label>Name</label>
              <input type={'text'} name="name" {...register("name", { required: true, maxLength: 20 })} />
              <div className="error">{errors.name?.type === 'required' && "Name is required"}</div>
            </div>
            <div className="input-container">
              <label>Age</label>
              <input type={'number'} name="age" {...register("age", { required: true })} />
              <div className="error">{errors.age?.type === 'required' && "Age is required"}</div>
            </div>
            <div className="input-container">
              <label>Bio</label>
              <input type={'text'} name="bio" {...register("bio")} />
            </div>
            <div className="button-container">
              <input type="submit" value="Add User" />
            </div>
          </form>}
      </div>
    </div>
  );
}

export default AddUser;