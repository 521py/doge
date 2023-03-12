import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { api } from '../Api/api';
import * as Yup from 'yup';
import { message } from 'antd';
import { useEffect } from 'react';


const signUpSchema = Yup.object({
  email: Yup.string().email().required('Required'),
  password:
    Yup.string()
      .required('Required')
      .min(4, 'короткий пароль')
      .max(20, 'очень длинный пароль'),
  group: Yup.string().required('Required')
    .min(4, 'надо больше')
    .max(5, 'надо меньше'),

});

export const SignUp = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const { mutateAsync: requestOnReg, isLoading } = useMutation({
    mutationFn: async (values) => {
      const res = await api.reg(values);
      const responce = await res.json()
      // console.log(responce)

      if (!res.ok) {
        return { status: res.status, responce }
      }

      return responce;
    },
  });

  if (isLoading) {
    messageApi.open({
      type: 'loading',
      content: 'данные загружаются с сервера',
      duration: 1
    })
  }

  const onFinish = async (values) => {
    // console.log(values);
    const res = await requestOnReg(values)
    if (res.status) {
      return messageApi.open({
        type: 'error',
        content: res.responce.message,
      })
    }

    console.log(res)

    messageApi.open({
      type: 'success',
      content: 'Аккаунт успешно зарегистрирован',
      // console.log(res);
    })
    navigate('/signin')
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        group: '9-gr',
      }}
      validationSchema={signUpSchema}
      onSubmit={onFinish}
    >
      <Form>
        {contextHolder}
        <Field name="email" placeholder="email" type="email" />
        <ErrorMessage name="email" />
        <Field name="password" placeholder="password" type="password" />
        <ErrorMessage name="password" />
        <Field
          name="group"
          placeholder="номер группы"
        />
        <ErrorMessage name="group" />
        <button type="submit">Submit</button>
        <div className='SignUp'>
          <p>SignUp page...</p>
          <p>Already have an account? <Link to="/signin">SignIn</Link></p>
        </div>
      </Form>
    </Formik>
  )
}