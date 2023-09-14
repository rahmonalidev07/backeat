import Navbar from "./components/Navbar";
import BasketProducts from "./components/BasketProducts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateTotal } from "./redux/features/basketSlice";

function App() {
  const dispatch = useDispatch()
  const basket = useSelector((store) => store.basket)
  useEffect(() => {
    dispatch(updateTotal())
  }, [updateTotal, dispatch, basket])

  return (
    <div className="max-w-screen-lg mx-auto px-5">
      <Navbar/>
      <h1 className="text-center mt-5 py-3 text-5xl">Redux Store</h1>
      <BasketProducts/>
    </div>
  );
}
export default App;
