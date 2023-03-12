import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { api } from '../Api/api';
import axios from 'axios';
import { ProductsPage } from './ProductsPage';
import { message } from 'antd';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { setUser } from '../reduxtoolkit/slices/userSlice';


const signInSchema = Yup.object({
    email: Yup.string().email().required('Required'),
    password:
        Yup.string()
            .required('Required')
            .min(4, 'короткий пароль')
            .max(20, 'очень длинный пароль')
});

export const SignIn = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();
    const dispatch = useDispatch()


    const onFinish = async (values) => {
        // console.log({ values });
        const res = await api.auth(values)
        const response = await res.json()

        if (res.ok) {
            localStorage.setItem('token', response.token);
            dispatch(setUser({
                ...response.data,
                token: response.token
            }))
            return navigate("/products");
        }

        console.log({ response });
        if (res.status === 401) {
            return messageApi.open({
                type: 'error',
                content: 'This is an error message',
            })
        }
        return messageApi.open({
            type: 'error',
            content: 'Smth goes wrong 😂',
        })
    }


    const onFinishError = (errorInfo) => {
        console.log("error", errorInfo);
    };

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={signInSchema}
            onSubmit={onFinish}
        >
            <Form>
                {contextHolder}
                <Field name="email" placeholder="email" type="email" />
                <ErrorMessage name="email" />
                <Field name="password" placeholder="password" type="password" />
                <ErrorMessage name="password" />
                <button type="submit">Submit</button>
                <div className='SignIn'>SignIn page...</div>
            </Form>
        </Formik>
    )
}
