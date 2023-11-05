import '../FeaturedSection/FeaturedSection.css'
import badge from '../../../assets/medal.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';

const FeaturedSection = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="relative w-[440px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg w-full h-72 z-1" src="https://i.ibb.co/64rztwh/pizza-pizza-filled-with-tomatoes-salami-olives.jpg" alt="" />
            <div>
                <img className='h-12 w-12 absolute top-5 right-2 z-8' src={badge} alt="" />
                <p className='absolute text-black  rounded-xl top-6 right-[15px] z-10  font-bold text-center text-sm'><span className='text-lg text-red-700'>15</span>%<br /></p>
            </div>

            <div className="p-5 pt-2">
                <p className="-mt-16 absolute max-w-fit px-3 py-1 text-lg font-semibold tracki bg-white bg-opacity-75 rounded ">Pizza</p>
                <div className='flex items-center justify-between '>
                    <div className="flex items-center mt-2">
                        <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                        <div className="mx-4 font-semibold">
                            <h1 className="text-lg text-gray-700 dark:text-gray-200">Amelia. Anderson</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Owner of FoodPanda</p>
                        </div>
                    </div>

                    <div className='mt-2 text-lg font-semibold'>
                        <p>Quantity : 5</p>
                    </div>
                </div>

                <p className="mt-3 font-normal text-gray-700 dark:text-gray-400">Be sure to warm it up in the oven before eating. Delivery is given within 30 min.</p>

                <div className='flex justify-between my-2 text-lg font-semibold'>
                    <div >
                        <p>Location : Gaibandha</p>
                    </div>
                    <div>
                        <p>Expire Date : 25-5-1900</p>
                    </div>
                </div>
                <div className='flex justify-center gap-5 py-2'>
                    <div className='flex'>
                        <Link className="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Request
                        </Link>
                    </div>
                    <div className='flex'>
                        <Link href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>
                    </div>

                </div>


            </div>
        </div>

        // </div>
    );
};

export default FeaturedSection;