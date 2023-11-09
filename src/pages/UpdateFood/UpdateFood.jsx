
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const UpdateFood = () => {
    const navigate = useNavigate()
    const { _id, foodName, foodImg, quantity, pickupLocation, price, discount, resturantName, expiredate, additionalNotes } = useLoaderData()


    const handleAddFood = (e) => {
        e.preventDefault()
        const form = e.target
        const foodName = form.foodName.value
        const foodImg = form.foodImage.value
        const quantity = form.quantity.value
        const pickupLocation = form.location.value
        const price = form.price.value
        const discount = form.discount.value
        const resturantName = form.resturantname.value
        const expiredate = form.date.value
        const status = form.status.value
        const additionalNotes = form.notes.value
        const updateFood = { foodName, foodImg, quantity, pickupLocation, price, discount, resturantName, expiredate, additionalNotes, status };


        fetch(`http://localhost:5000/updatefoods/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset()
                    navigate('/managemyfood')
                }
            })
    }
    return (
        <div className="w-full  font-sans bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/1Myc997/pexels-kamshotthat-7465827.jpg)', backgroundSize: 'fit', backgroundPosition: 'center', objectFit: "top left" }}>

            <Helmet>
                <title>Food Share | Update Food</title>
            </Helmet>
            <section className="container p-6 mx-auto glass rounded-md shadow-md   mt-10" >
                <h2 className="text-4xl font-semibold  capitalize text-white text-center mb-10">Update Food</h2>

                <form onSubmit={handleAddFood}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 px-10 ">
                        <div>
                            <label className="text-white">Food Name</label>
                            <input type="text" name="foodName" placeholder="Food name" defaultValue={foodName} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required></input>
                        </div>

                        <div>
                            <label className="text-white">Food Image</label>
                            <input id="password" type="text" name="foodImage" placeholder="Food imgage" defaultValue={foodImg} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required></input>
                        </div>

                        <div>
                            <label className="text-white">Quantity</label>
                            <input id="passwordConfirmation" type="number" name="quantity" placeholder="quantity" defaultValue={quantity} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required></input>
                        </div>

                        <div>
                            <label className="text-white">Pickup Location</label>
                            <input id="passwordConfirmation" type="text" name="location" placeholder="location" defaultValue={pickupLocation} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required></input>
                        </div>

                        <div>
                            <label className="text-white">Price</label>
                            <input id="passwordConfirmation" type="text" name="price" placeholder="Price" defaultValue={price} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required></input>
                        </div>

                        <div>
                            <label className="text-white">Discount</label>
                            <input id="passwordConfirmation" type="number" name="discount" placeholder="%" defaultValue={discount} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required></input>
                        </div>

                        <div>
                            <label className="text-white">Your Resturant name </label>
                            <input id="passwordConfirmation" type="text" name="resturantname" defaultValue={resturantName} placeholder="resturant name" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required></input>
                        </div>

                        <div>
                            <label className="text-white">Expire Date</label>
                            <input id="passwordConfirmation" type="date" name="date" placeholder="Expire date" defaultValue={expiredate} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required></input>
                        </div>

                        <div>
                            <label className="text-white" defaultValue={status}>Status</label>
                            <br></br>
                            <select name="status" id="" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required>
                                <option value="available">available</option>
                                <option value="Not available">not available</option>

                            </select>
                        </div>

                    </div>
                    <div className="relative mb-4 mt-5 px-10 ">
                        <label className="leading-7 text-white">Additional Notes</label>
                        <textarea id="message" name="notes" defaultValue={additionalNotes} className="mt-2 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
                    </div>
                    <div className="flex justify-end mt-8 mb-10 mr-9">
                        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Update Food</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default UpdateFood;