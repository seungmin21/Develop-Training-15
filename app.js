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
};

// 왜 (매개변수)가 아니라 ({매개변수})로 작성했을까?
// 객체 분해 - 객체의 속성을 추출
const Carousel = ({ fetchProducts }) => {
  // useState([])는 무엇을 가리키고 있을까?
  // useState([]) : useState함수를 불러서 배열을 반환한다.
  const [products, setProducts] = useState([]);

  // 
  useEffect(() => {
    // loadProducts 변수명은 async의 비동기 함수를 대입
    const loadProducts = async () => {
      // data는 fetchProducts가 실행될 때까지 기다림
      const data = await fetchProducts();
      setProducts(data);
    };
    loadProducts();
  }, [fetchProducts]);

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};


const Example = () => {
  return <Carousel fetchProducts={fetchProducts} />;
};
