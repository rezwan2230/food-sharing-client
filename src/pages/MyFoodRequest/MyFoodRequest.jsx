import { useLoaderData } from "react-router-dom";
import MyFoodRequestCart from "./MyFoodRequestCart";

const MyFoodRequest = () => {
    const requestedFood = useLoaderData()
    return (
        <div>
            <h2></h2>
            <h2 className="text-center font-semibold text-3xl py-10">My Food Request : {requestedFood.length}</h2>

            <div className="grid md:gap-10 md:grid-cols-2 lg:grid-cols-4">
                {
                    requestedFood.map(food => <MyFoodRequestCart key={food._id} food={food}></MyFoodRequestCart>)
                }   
            </div>

        </div>
    );
};

export default MyFoodRequest;