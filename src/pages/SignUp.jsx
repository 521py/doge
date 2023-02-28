import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { applyMiddleware } from '@reduxjs/toolkit';
import { api } from '../Api/api';

export const SignUp = () => {
  const navigate = useNavigate();

  const { mutateAsync: requestOnReg, isLoading } = useMutation({
    mutationFn: async (values) => {
      const res = await api.reg(values);

      const responce = await res.json()
      console.log(responce)

      return responce;
    },
  });

  const handleSubmit = async (values) => {
    console.log(values);
    const res = await requestOnReg(values)
    console.log(res);
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        group: '9-gr',
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field name="email" placeholder="email" type="email" />
        <Field name="password" placeholder="password" type="password" />
        <Field
          name="group"
          placeholder="номер группы"
        />
        <button type="submit">Submit</button>
        <div className='SignUp'>
          <p>SignUp page...</p>
          <p>Already have an account? <Link to="/signin">SignIn</Link></p>
        </div>
      </Form>
    </Formik>
  )
}