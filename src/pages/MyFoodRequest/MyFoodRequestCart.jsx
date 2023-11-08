
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import '../MyFoodRequest/MyFoodRequestCart.css'
import Swal from 'sweetalert2';

const MyFoodRequestCart = ({ food, requested, setRequested }) => {

    const { _id, authorName, authorPhotoUrl, foodName, foodImg, quantity, pickupLocation, price, discount, resturantName, expiredate, additionalNotes, status } = food


    const originalPrice = parseInt(price)
    const percentage = parseInt(discount)
    const discountPrice = (percentage * originalPrice) / 100;
    console.log(discountPrice);

    const currentPrice = Math.round(originalPrice - discountPrice)
    console.log(currentPrice);


    const handleDelete = (_id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/requestedfood/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = requested?.filter(food => food._id !== _id)
                            setRequested(remaining)
                        }
                    })
            }
        });

    }


    return (
        <div>
            <div className="mx-auto">
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <div>
                            <img className="object-cover w-full h-56 md:h-64 xl:h-80 z-1" src={foodImg} alt="Person" />

                            <div className='absolute z-20 text-red-500'>
                                <MdDelete className='text-3xl'></MdDelete>
                            </div>
                        </div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <div className="mb-1 text-lg text-gray-100 font-semibold">
                                {/* <Link to={`/foods/${_id}`}><button className='px-4 py-2 text-black bg-white rounded-full btn-outline hover:bg-red-400'>Details</button></Link> */}
                                <p>Food Name : {foodName}</p>
                                <p>Quantity : {quantity}</p>
                                <p>Price : {price}</p>
                                <p>Exp. date : {expiredate}</p>
                            </div>
                            <div className="mb-1 text-lg text-gray-100">
                                <button onClick={() => handleDelete(_id)} className='p-2 text-black bg-white rounded-full btn-outline hover:bg-red-400'><MdDelete className='text-3xl'></MdDelete></button>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>

    );
};

export default MyFoodRequestCart;