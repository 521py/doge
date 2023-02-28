import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Link, Navigate } from 'react-router-dom';
import { api } from '../Api/api';
import axios from 'axios';

export const SignIn = () => {
    const onFinish = async (values) => {
        console.log("values is...", values);
        const responce = await axios.post("https://api.react-learning.ru/signin", values);
        localStorage.setItem('token', responce.data.accessToken);
        console.log("resp is", responce)
        
    };


    const onFinishError = (errorInfo) => {
        console.log("error", errorInfo);
    };

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
        onSubmit={onFinish}
        >
            <Form>
                <Field name="email" placeholder="email" type="email" />
                <Field name="password" placeholder="password" type="password" />
                <button type="submit">Submit</button>
                <div className='SignIn'>SignIn page...</div>
            </Form>
        </Formik>
    )
}
