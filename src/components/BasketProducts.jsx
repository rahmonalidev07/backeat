import Product from "./Product";
import { useSelector } from "react-redux";
function BasketProducts() {
  const { products, total } = useSelector((store) => store.basket);

  if (products.length ===0) {
    return <h1 className='text-5xl text-center italic mt-20'>You don't have any item your basket <span className="not-italic">😒</span></h1>
  }
  return (
    <div>
      {products.map((item) => {
        const { name, price, image, amount } = item;
        return (
          <Product
            key={new Date().getTime() + Math.random()}
            name={name}
            price={price}
            image={image}
            amount={amount}
          />
        );
      })}
      <hr />
      <div className="mt-10 flex justify-between items-center text-4xl font-medium">
      <h1>Total: </h1>
      <h1>{total.toFixed(2)} $</h1>

      </div>
    </div>
  );
}

export default BasketProducts;
