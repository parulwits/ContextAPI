import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

export default function App() {

  return (
    <div>
      <h1>Home Page</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/AddUser">Add User</Link> |{" "}
        <Link to="/UserList">User List</Link>
      </nav>
    </div>
  );
}