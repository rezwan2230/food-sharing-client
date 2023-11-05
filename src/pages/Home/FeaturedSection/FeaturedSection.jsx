import '../FeaturedSection/FeaturedSection.css'

const FeaturedSection = () => {
    return (
        // <div>
        //     <div className="card">
        //         <div className="card-details">
        //             <p className="text-title">Card Title</p>
        //             <p className="text-body">Card Details</p>
        //         </div>
        //         <a className="card-button" href="#link">More info</a>
        //     </div>



        <div className="w-[450px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <img className="rounded-t-lg w-full h-80" src="https://i.ibb.co/1Myc997/pexels-kamshotthat-7465827.jpg" alt="" />

            <div className="p-5 pt-2">
                {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pizza</h5> */}
                <p className="-mt-16 absolute max-w-fit px-3 py-1 text-lg font-semibold tracki bg-white  bg-opacity-75 rounded ">Pizza</p>

                <div className='flex items-center justify-between divide-x-2 divide-neutral-950'>
                    <div className="flex items-center mt-6 flex-1">
                        <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                        <div className="mx-4">
                            <h1 className="text-sm text-gray-700 dark:text-gray-200">Amelia. Anderson</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                        </div>
                    </div>

                    

                    <div className='mt-7 mr-10 pl-16'>
                        <p>Quantity : 5</p>
                    </div>
                </div>




                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                <div>
                    <div>
                        <p>Location : Gaibandha</p>
                    </div>
                    <div>
                        <p>Expire Date : 25-5-1900</p>
                    </div>
                </div>


                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>

        // </div>
    );
};

export default FeaturedSection;