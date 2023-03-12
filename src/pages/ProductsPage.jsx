import React, { useEffect, useState } from 'react';
import { api } from '../Api/api';
// import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { addToCart } from '../reduxtoolkit/slices/cartSlice';
import { Avatar, Card } from 'antd';

const { Meta } = Card;


export const ProductsPage = () => {
  const { token } = useAuth();
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [data, setData] = useState({ total: 0, products: undefined })


  const { data: productsData, isLoading } = useQuery({
    queryKey: ["allProducts"],
    queryFn: async () => {
      const token = localStorage.getItem('token')
      const res = await api.getProducts(token);
      const responce = await res.json()

      return responce
    }
  })

  useEffect(() => {
    const fetchData = async () => {
      console.log(token);
      const res = await api.getProducts(token);
      const responce = await res.json()
      setData(responce)
      console.log(responce);
    }
    fetchData()
  }, [token])

  if (!data?.products) {
    return <div className='ProductsPage'>Products page...</div>
  }

  const handleAddToCart = (id) => {
    dispatch(addToCart(id))
  }

  return (
    <div className='ProductsPage'>
      {productsData.products.map(product => {
        return <Card style={{ width: 300 }}
          cover={<img src={product.pictures} />}>
          <Meta
            title={product.name}
            description={product.description}
          />

          <div key={product._id}>
            <p></p>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <button type='button' onClick={() => handleAddToCart(product._id)}>В корзину</button>
          </div>
        </Card>
      })}
    </div>


  )
}
