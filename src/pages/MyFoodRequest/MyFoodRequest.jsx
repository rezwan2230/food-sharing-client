import { useLoaderData } from "react-router-dom";
import MyFoodRequestCart from "./MyFoodRequestCart";
import { useState } from "react";
import { Helmet } from "react-helmet";

const MyFoodRequest = () => {
    const requestedFood = useLoaderData()
    const [requested, setRequested] = useState(requestedFood)
    return (
        <div>
            <Helmet>
                <title>Food Share | My Food Request</title>
            </Helmet>
            <h2 className="text-center font-semibold text-3xl py-10 mt-2">My Food Request</h2>

            {
                (requested.length > 0) ?
                    <>
                        <div className="grid mx-4 gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-4 py-5 mt-5 mb-20">
                            {
                                requested?.map(food => <MyFoodRequestCart key={food._id} food={food} requested={requested} setRequested={setRequested} ></MyFoodRequestCart>)
                            }
                        </div>
                    </>

                    : <>
                        <div>
                            <p className="text-5xl flex justify-center items-center text-center h-[50vh]">You have not requested any food yet</p>
                        </div>
                    </>
            }

        </div>
    );
};

export default MyFoodRequest;