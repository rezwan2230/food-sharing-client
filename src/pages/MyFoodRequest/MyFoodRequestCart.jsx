
import { Link } from 'react-router-dom';
import '../MyFoodRequest/MyFoodRequestCart.css'

const MyFoodRequestCart = ({ food }) => {

    const { _id, authorName, authorPhotoUrl, foodName, foodImg, quantity, pickupLocation, price, discount, resturantName, expiredate, additionalNotes, status } = food

    // const cardStyle = {
    //     backgroundImage: `url('${foodImg}')`, 
    // };

    return (
        <div>
            {/* <div className="card" style={{ backgroundImage: `url("${foodImg}")` }}>
                <p className="heading">Card Hover</p>
                <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                <div className="overlay"></div>
                <button className="card-btn">Click</button>
            </div> */}




            {/* 
            <section className="px-4 lg:py-16 mx-auto">

                <div className="grid grid-cols-1 ">
                    
                    <div className='card-btn'>
                        <img src={foodImg} className="object-cover w-full h-56 mb-5 bg-center rounded" alt="Kutty" loading="lazy" />
                        <div>
                            <button>Details</button>
                        </div>
                    </div>
                </div>

            </section> */}

            {/* <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src={foodImg}
                    alt="image"
                />
                <div className="absolute inset-0 flex justify-center items-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-0  hover:opacity-0">
                    <p className="text-4xl text-gray-100 text-left flex justify-start items-start">Details</p>
                </div>
            </div> */}











            <div className=" py-16 mx-auto ">
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <img className="object-cover w-full h-56 md:h-64 xl:h-80" src={foodImg} alt="Person"/>
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <div className="mb-1 text-lg text-gray-100">
                                <Link to={`/foods/${_id}`}><button className='px-4 py-2 text-black bg-white rounded-full btn-outline hover:bg-red-400'>Details</button></Link>
                              
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>





    );
};

export default MyFoodRequestCart;