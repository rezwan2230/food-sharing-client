import { Link } from 'react-router-dom';
import '../ManageMyFood/DataTable.css'
import Swal from 'sweetalert2';


const DataTable = ({ food, myFood, setMyFood }) => {
    const { _id, authorName, authorPhotoUrl, foodName, foodImg, quantity, pickupLocation, price, discount, resturantName, expiredate, additionalNotes, status } = food

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

                fetch(`http://localhost:5000/foods/${_id}`, {
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
                            const remaining = myFood?.filter(food =>food._id !== _id)
                            setMyFood(remaining)
                        }
                    })
            }
        });







    }



    return (

        <tr className="text-base font-semibold">
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded-lg  w-32 h-20">
                            <img src={foodImg} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{authorName}</div>
                        <div className="text-sm opacity-50">{resturantName}</div>
                    </div>
                </div>
            </td>
            <td>{foodName}</td>
            <td>{discount}%</td>
            <td>{price}</td>
            <td className={status == "available" ? "blue" : 'red'}>{status}</td>
            <td>{expiredate}</td>
            <th>
                <Link to={`/foods/${_id}`}><button className="bg-lime-300 px-2 py-1 rounded-lg hover:px-[7px] hover:py-[2px] ">details</button></Link>
            </th>
            <th>
                <Link to={`/updatefoods/${_id}`}><button className="bg-lime-300 px-2 py-1 rounded-lg hover:px-[7px] hover:py-[2px]">Edit</button></Link>
            </th>
            <th>
                <button onClick={() => handleDelete(_id)} className="bg-lime-300 px-2 py-1 rounded-lg hover:px-[7px] hover:py-[2px]">Delete</button>
            </th>

        </tr>


    );
};

export default DataTable;