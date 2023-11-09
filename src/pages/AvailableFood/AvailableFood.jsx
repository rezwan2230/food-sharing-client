import { useLoaderData } from "react-router-dom";
import FoodCart from "../../shared/FoodCart";
import { useEffect, useState } from "react";

const AvailableFood = () => {

    const allFoods = useLoaderData()
    const [foods, setFoods] = useState(allFoods)

    const [currentFood, setCurrentFood] = useState('')
    const [sort, setSort] = useState('1')

    const sortInt = parseInt(sort)

        var url = `http://localhost:5000/foods?foodName=${currentFood}`

        if(sort!=='1'){
             url = `http://localhost:5000/foods?sortField=expiredate&sortOrder=${sortInt}`
        }
        useEffect(() => {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setFoods(data)
                })
        }, [url])


    console.log(allFoods, sortInt);


    return (
        <div>
            <h2 className="text-center font-semibold text-3xl py-10">Available Food</h2>

            <div className="grid grid-cols-1  gap-6 px-10 pb-10">

                <div className="flex justify-center gap-8 items-center mx-auto">

                    <div>
                        <label className=" ">Food Name</label>
                        <input type="text"  onChange={() => setCurrentFood(event.target.value)} name="foodName" placeholder="Food name" className="block w-96 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required></input>
                    </div>

                    <div>
                        <select name="status" id="" onChange={() => setSort(event.target.value)} className="block w-full px-4 py-2 mt-8 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required>
                            <option value="1">Sort by Exp date AESC </option>
                            <option value="-1">Sort by Exp date DESC</option>

                        </select>
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    foods.map((food, index) => <FoodCart
                        key={index}
                        food={food}>
                    </FoodCart>)
                }
            </div>
        </div>
    );
};

export default AvailableFood;