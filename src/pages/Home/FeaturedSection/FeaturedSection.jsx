import { Link, useLoaderData } from "react-router-dom";
import FoodCart from "../../../shared/FoodCart";

const FeaturedSection = () => {

    const featuredFood = useLoaderData()
    return (
        <div>
            <h2 className="text-center font-semibold text-4xl py-10 mt-5">Featured Food</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    featuredFood.map(food => <FoodCart key={food._id} food={food}></FoodCart>)
                }
            </div>

            <div className="mx-auto text-center mt-10">
                <Link to='/availablefood'><button className="text-white btn btn-wide bg-blue-600 hover:bg-blue-700">Show All</button></Link>
            </div>


        </div>
    );
};

export default FeaturedSection;