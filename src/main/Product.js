import React from 'react';

function Product({product, onRemove}) {
  // 가격 포맷 함수
  const formatPrice = (priceStr) => {
    if(!priceStr) return '';
    const numberPrice = parseInt(priceStr.toString().replace(/,/g, ''), 10); //문자를 숫자(정수형)으로 인식, ',' 추가
    if(isNaN(numberPrice)) return priceStr;
    return numberPrice.toLocaleString();
  }

  return (
    <>
      <li>
        <img src={`${process.env.PUBLIC_URL}/images/${product.image}`} alt='' />
        <p>상품명 : {product.name}</p>
        <p className='price'>가격 : {formatPrice(product.price)}원</p>
        <p><input type='button' className='btn' value='삭제하기' onClick={() => onRemove(product.id)} /></p>
      </li>
    </>
  );
}

export default Product;