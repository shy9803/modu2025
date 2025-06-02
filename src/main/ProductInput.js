import React, {useState} from 'react';

function ProductInput({image, name, price, onDataChange, onCreate}) {
  // 유효성 검사
  const [errors, setErrors] = useState({});
  const validate = () => {
    const newErrors = {};
    
    // 1. 이미지 파일 확장자 유효성 검사
    if(!image.trim()) {
      newErrors.image = '이미지 파일명을 입력하세요.';
    } else if (!/\.(jpg|jpeg|png|gif)$/i.test(image)) {
      newErrors.image = '유효한 이미지 확장자(jpg, jpeg, png, gif)를 입력하세요.'
    }

    // 2. 상품명 유효성 검사
    if(!name.trim()) {
      newErrors.name = '상품명을 입력하세요.';
    }

    // 3. 가격 정보 유효성 검사
    if(!price.trim()) {
      newErrors.price = '가격정보를 입력하세요';
    } else if(!/^\d+$/.test(price)) { // 숫자인지 아닌지 판단 정규식 표현
      newErrors.price = '가격정보는 숫자만 입력 가능합니다.'
    }

    setErrors(newErrors);
    
    // 위 항목 모두 이상없이 입력을 하였다면 리턴하여 입력할 수 있도록 한다.
    return Object.keys(newErrors).length === 0;
  }

  // 내용 입력 버튼 클릭시 실행되는 함수
  const handleClick = () => {
    if(validate()) { // 유효성 검사를 실시한 뒤에
      onCreate(); // 내용입력을 하도록 한다.
    }
  }

  // 가격정보를 입력시 실행되는 함수
  const handlePriceChange = (e) => {
    const onlyNumbers = e.target.value.replace(/[^\d]/g, ''); // 숫자만 추출 (정규식 표현)
    onDataChange({target: {name:'price', value:onlyNumbers}}); // 부모에게 숫자만 전달함.
  }

  // 숫자에 천 단위 구분기호(,)가 자동으로 삽입되게 하기 위한 함수
  const formatPrice = (numStr) => {
    if(!numStr) return '';
    return parseInt(numStr, 10).toLocaleString(); //숫자에 쉼표 기호가 들어가게 해줌.
  }

  // 서식
  const errorStyle = {
    color: '#f00',
    fontSize: '12px'
    }

  return (
    <div className='create'>
      {/* <h3>상품 입력화면</h3> */}

      <p>
        <label htmlFor='img_filename'>이미지 파일명 : </label>
        <input type='text' name='image' id='img_filenmae' placeholder='이미지 파일명을 입력하세요. 예) 파일명.확장자' onChange={onDataChange} value={image} />

        {errors.image && <div style={errorStyle}>{errors.image}</div>}
      </p>

      <p>
        <label htmlFor='product_name'>상품명 : </label>
        <input type='text' name='name' id='product_name' placeholder='상품명을 입력하세요. 예) 괌 4박 5일 PIC골드' onChange={onDataChange} value={name} />

        {errors.name && <div style={errorStyle}>{errors.name}</div>}
      </p>

      <p>
        <label htmlFor='price_info'>가격정보 : </label>
        <input type='text' name='price' id='price_info' placeholder='가격정보를 입력하세요. 예) 999999' onChange={handlePriceChange} value={formatPrice(price)} />

        {errors.price && <div style={errorStyle}>{errors.price}</div>}
      </p>

      <p>
        <input type='button' value='내용입력' onClick={handleClick} className='submit_btn' />
      </p>

    </div>
  );
}

export default ProductInput;