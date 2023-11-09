import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const SingleFoodDetails = () => {

    const food = useLoaderData()

    const  {_id, authorName, authorPhotoUrl, foodName, foodImg, quantity, pickupLocation, price, discount, resturantName, expiredate, additionalNotes, status } = food
    
    const requestedFood = {authorName, authorPhotoUrl, foodName, foodImg, quantity, pickupLocation, price, discount, resturantName, expiredate, additionalNotes, status}

    const originalPrice = parseInt(price)
    const percentage = parseInt(discount)
    const discountPrice = (percentage * originalPrice) / 100;
    console.log(discountPrice);

    const handleRequest = ()=>{
        console.log(food);
        fetch('http://localhost:5000/requestedfood', {
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(requestedFood)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'request successfull',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })
    }


    return (
        <section className="py-24 mx-auto max-w-7xl">

            <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32  md:gap-x-24">
                <div className="order-none md:order-2">
                    <h2 className="mb-4 text-2xl font-extrabold text-black md:leading-tight sm:text-left md:text-4xl">{foodName}</h2>
                    <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
                        {additionalNotes}
                    </p>
                    <div className="flex divide-x-2 gap-10">
                       
                        <div className="text-xl  space-y-2">
                            <div className="flex items-center ">
                                <img className="h-[50px] w-[50px] rounded-full" src={authorPhotoUrl} alt="" />
                                <div className="ml-5 text-lg  text-slate-500">
                                    <p>{authorName}</p>
                                    <p>{resturantName}</p>
                                </div>
                            </div>
                            <div className="font-semibold space-y-2 pt-2">
                                <h4>Location : {pickupLocation}</h4>
                                <h4>Quantity : {quantity}</h4>
                                <h4>Expire Date : {expiredate}</h4>
                            </div>
                        </div>
                        <div className="mt-1 pl-10 text-xl space-y-2 font-semibold">
                            <p>Price : {price}</p>
                            <p>Discount : {discount}%</p>
                            <p>Total Price : {discountPrice}</p>

                            <div className='flex'>
                                <button onClick={handleRequest} className="mt-5 inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Request
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <img className="lg:w-[592px] lg:h-[394px]" src={foodImg} alt="" />
                </div>
            </div>
        </section>

    );
};

export default SingleFoodDetails;