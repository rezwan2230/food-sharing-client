import { useLoaderData } from "react-router-dom";
import FoodCart from "../../shared/FoodCart";

const AvailableFood = () => {

    const foods = useLoaderData()

    return (
        <div>
            <h2 className="text-center font-semibold text-3xl py-10">Available Food : {foods.length}</h2>

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