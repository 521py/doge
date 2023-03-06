import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { useFormState } from 'react-hook-form';
import { api } from '../Api/api';
// import { useState, useEffect } from 'react';


export const ProductsPage = () => {
  const [products, setProducts] = useState({ total: 0, products: [] })

  // const baseUrl = 'https://api.react-learning.ru/products';
  // useEffect(() => {
  //   axios(baseUrl)
  //     .then(
  //       (res) => {
  //         console.log(res)
  //       })
  // }, [])





  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token')
      const res = await api.getProducts(token);
      const responce = await res.json()
      setProducts(responce)
      console.log(responce);
    }
    fetchData()
  }, [])









  // axios
  // .get("https://api.react-learning.ru/products")
  // .then((responce) => {
  //   console.log("ProductPage response...", responce.data);
  // })
  // .catch((error) => {
  //   console.error(error);
  // });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const token = localStorage.getItem('token')

  //     const res = await fetch("https://api.react-learning.ru/products", {
  //       method: 'GET',
  //           headers: {
  //               'Accept': 'application/json',
  //               'Content-Type': 'application/json',
  //               'Authorization': 'Bearer ' + localStorage.getItem('token'),
  //       }
  //     })
  //     const responce = await res.json();
  //     console.log(responce);
  //   }
  //   fetchData();
  // }, [])






  // const { users, setUsers } = useState([]);
  // const { requestError, setRequestError } = useState();

  // const token = localStorage.getItem('token')
  // axios.interceptors.request.use(
  //   config => {
  //     config.headers.authorization = `Bearer ${token}`;
  //     return config;
  //     console.log(config, 'data2323233232');
  //   },
  //   error => {
  //     Promise.reject(error);
  //   }
  // );

  // const fetchData = useCallback(async () => {
  //   try {
  //     const result = await axios.get("https://api.react-learning.ru/products");
  //     setUsers(result.data);
  //     console.log(result)
  //   } catch (err) {
  //     setRequestError(err.message);
  //   }
  // });

  return (
    <div className='ProductsPage'>Products page...</div>

  )
}
