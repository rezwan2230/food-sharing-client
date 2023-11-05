import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const AddFood = () => {

    const {user} = useContext(AuthContext)
    const authorName = user?.displayName
    const authorPhotoUrl = user?.photoURL


    const handleAddFood =(e)=>{
        e.preventDefault()
        const form = e.target
        const foodName = form.foodName.value
        const foodImg = form.foodImage.value
        const quantity = form.quantity.value
        const pickupLocation = form.location.value
        const price = form.price.value
        const expiredate = form.date.value
        const additionalNotes = form.notes.value
        console.log(authorName, authorPhotoUrl, foodName, foodImg, quantity, pickupLocation, price, expiredate, additionalNotes);

        

        


    }
    return (
        <div className="w-full  font-sans bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/1Myc997/pexels-kamshotthat-7465827.jpg)', backgroundSize: 'fit', backgroundPosition: 'center', objectFit: "top left" }}>

            <section className="container p-6 mx-auto glass rounded-md shadow-md   mt-10" >
                <h2 className="text-4xl font-semibold  capitalize text-white text-center mb-10">Add Product</h2>

                <form onSubmit={handleAddFood}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 px-10 ">
                        <div>
                            <label className="text-white">Food Name</label>
                            <input type="text" name="foodName" placeholder="Food name" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required></input>
                        </div>

                        <div>
                            <label className="text-white">Food Image</label>
                            <input id="password" type="text" name="foodImage" placeholder="Food imgage" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required></input>
                        </div>

                        <div>
                            <label className="text-white">Quantity</label>
                            <input id="passwordConfirmation" type="number" name="quantity" placeholder="quantity" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required></input>
                        </div>

                        <div>
                            <label className="text-white">Pickup Location</label>
                            <input id="passwordConfirmation" type="text" name="location" placeholder="location" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required></input>
                        </div>

                        <div>
                            <label className="text-white">Price</label>
                            <input id="passwordConfirmation" type="text" name="price" placeholder="Price" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required></input>
                        </div>

                        <div>
                            <label className="text-white">Expire Date</label>
                            <input id="passwordConfirmation" type="date" name="date" placeholder="Expire date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required></input>
                        </div>

                    </div>
                    <div className="relative mb-4 mt-5 px-10 ">
                        <label className="leading-7 text-white">Additional Notes</label>
                        <textarea id="message" name="notes" className="mt-2 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
                    </div>
                    <div className="flex justify-end mt-8 mb-10 mr-9">
                        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add Food</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddFood;