import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import {
  decreaseQuantity,
  increaseQuantity,
  removeCart,
} from './redux/cartSlice';

const Cart = () => {
  const getData = useSelector((state) => state.clickedData.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let result = 0;
  let grandTotal = getData.map((item) => (result += item.qty * item.price));

  return (
    <div>
      <div>
        <h2>Shopping cart</h2>
      </div>
      {getData.length > 0 ? (
        <div className='container'>
          <div className='cart-container'>
            {getData.map((item, idx) => (
              <div className='cart-content'>
                <div className='medium-width'>
                  <img
                    src={item.image}
                    alt='product-box'
                    width={100}
                    height={75}
                  />
                </div>
                <div className='medium-width'>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <p>Price : {item.price}/- rs.</p>
                </div>
                <div className='medium-width'>
                  <div className='qty-btns'>
                    <button onClick={() => dispatch(increaseQuantity(idx))}>
                      +
                    </button>
                    <span>{item?.qty}</span>
                    <button onClick={() => dispatch(decreaseQuantity(idx))}>
                      -
                    </button>
                  </div>
                </div>
                <div className='right-items medium-width'>
                  <button onClick={() => dispatch(removeCart(idx))}>
                    <AiFillCloseCircle />
                  </button>
                  <h5>{item.price * item.qty}rs</h5>
                </div>
              </div>
            ))}
          </div>
          <div className='bottom'>Grand toal : {grandTotal.slice(-1)} rs.</div>
        </div>
      ) : (
        <>
          <div className='alignment-center'>
            <img src='/cart1.png' alt='cart1' width={500} />
          </div>
          <div className='alignment-center'>
            <button
              className='cart-bottom-btn'
              onClick={() => navigate('/product')}
            >
              Shop now
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
