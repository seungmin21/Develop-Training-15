import React, { useEffect, useState } from 'react';

const fetchProducts = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, title: '김치', price: '5000원' },
        { id: 2, title: '라면', price: '3000원' },
        { id: 3, title: '삼겹살', price: '15000원' },
      ]);
    }, 500);
  });
}

const [products, setProducts] = useState([]);

const useEffect = (() => {
  const loadProducts = async () => {
    const data = await fetchProducts();
    setProducts(data);
  };
  loadProducts();
});

console.log(useEffect())