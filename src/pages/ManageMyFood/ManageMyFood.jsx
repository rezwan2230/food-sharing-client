import { useContext, useEffect, useState } from "react";
import DataTable from "./DataTable ";
import { AuthContext } from "../../provider/AuthProvider";

const ManageMyFood = () => {

    const { user } = useContext(AuthContext)

    const [myFood, setMyFood] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/foods?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyFood(data)
            })

    }, [])

    return (
        <div>

            <h2 className="text-center font-semibold text-3xl py-10">Mange My Food</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-lg text-black">
                            <th>Food Image</th>
                            <th>Food Name</th>
                            <th>Price</th>
                            <th>Discount</th>
                            <th>Status</th>
                            <th>Expire Date</th>
                            <th>Details</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* {
                            myFood?.map(food=><DataTable key={food._id} food={food} myFood={myFood} setMyFood={setMyFood}></DataTable>)
                        } */}

                        {
                            myFood.length > 0 ?
                                <>
                                    {
                                        myFood?.map(food => <DataTable key={food._id} food={food} myFood={myFood} setMyFood={setMyFood}></DataTable>)
                                    }
                                </>
                                :
                                <>
                                    <div>
                                        <p className="text-5xl flex justify-center items-center text-center h-[50vh]">You have not requested any food yet</p>
                                    </div>
                                </>
                        }




                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageMyFood;



