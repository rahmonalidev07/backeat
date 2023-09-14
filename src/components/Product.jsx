
import {incrementBasket, decrementBasket, removeItem} from '../redux/features/basketSlice'

import { useDispatch } from 'react-redux';
function Product({ name, amount, price, image }) {
  const dispatch = useDispatch()
  return (
    <div className="flex justify-between mb-5 shadow-md bg-gray-444">
      <div className="flex gap-14 ">
        <img src={image} alt={name + " glasses"} className="w-40 object-cover" />
        <div className="flex flex-col gap-1 ">
          <p className="font-medium">{name}</p>
          <p className="font-medium bg-green-500 rounded">${price}</p>
          <button onClick={() => dispatch(removeItem(name))} className="text-red-500 tracking-wider">Remove</button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button onClick={() => {
          if (amount == 1){
            dispatch(removeItem(name))
            return
          }else {
            dispatch(decrementBasket(name))
          }
        }}>-</button>
        <p>{amount}</p>
        <button onClick={() => dispatch(incrementBasket(name))}>+</button>
      </div>
    </div>
  );
}

export default Product;
