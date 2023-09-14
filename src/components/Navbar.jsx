import { useSelector } from "react-redux";
function Navbar() {
    const { amount } = useSelector((state) => state.basket)
  return (
    <div className='flex justify-between pt-5'>
        <a href="" className='font-bold text-3xl'>Home</a>
        <p className='font-medium text-2xl'>
            Basket
            <span className='bg-green-500 text-xl text-white py-2 px-1 top-3 right-0 ml-4'>{amount}</span>
        </p>
    </div>
  )
}

export default Navbar