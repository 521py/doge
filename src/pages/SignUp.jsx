import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

export const SignUp = () => {
  const [body, setBody] = useState();

  const { isLoading, isError } = useQuery({
    queryKey: ["signup-key"],
    queryFn: async () => {
      const res = await fetch("https://api.react-learning.ru/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const responce = await res.json();

      return responce;
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const group = e.target[2].value;
    const password = e.target[3].value;
    const obj = { name, email, group, password };
    // setBody(obj);
  };


  return (
    <div className='SignUp'>
      <form>
        <input
          type="email"
          placeholder="email"
        />
        <input
          type="password"
          placeholder="example@example.com"
        />
        <input
          type="text"
          placeholder="9-gr"
        />
        <button onClick={handleSubmit}>SignUp!
        </button>
      </form>
      <p>SignUp page...</p>
      <p>Already have an account? <Link to="/signin">SignIn</Link></p>
    </div>

  )
}

