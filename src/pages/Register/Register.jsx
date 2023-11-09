import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {

    const navigate = useNavigate()

    const {createUser, updateUser, signInWithGoogle} = useContext(AuthContext)

    const handleRegister = (e)=>{
        e.preventDefault()   
        const name = e.target.name.value
        const email = e.target.email.value
        const photoUrl = e.target.photo.value
        const password = e.target.password.value

        console.log(name, email, photoUrl, password);
        if(password.length<6){
            toast.error('Password must be atleast 6 characters', {
                position: "bottom-right",
                autoClose: 2000,
                });
        }
        else if(!/[A-Z]/.test(password)){
            toast.error('Password should have atleast one upper case letter', {
                position: "bottom-right",
                autoClose: 2000,
                });
        }
        else if(!/[!@#$%^&*()_+{}[\]:;<>,.?~\\]/.test(password)){
            toast.error('Password should have atleast one special character', {
                position: "bottom-right",
                autoClose: 2000,
                });
        }
        else{
            createUser(email, password)
            .then(result=>{
                // navigate('/')
                updateUser(name, photoUrl)
                .then(CurrentResult=>{
                    navigate('/')
                    console.log(CurrentResult.user);
                })
                .then(error=>{console.log(error.message);})
                toast.success('Account created', {
                    position: "bottom-right",
                    autoClose: 2000,
                    });
                console.log(result.user);
            })
            .then(error=>{console.log(error.message);})
        }
    }

    const handleGoogleSignIn = ()=>{
        signInWithGoogle()
        navigate('/')
    }
    


    return (
        <div className="w-full md:h-screen font-sans bg-cover h-[900px]  bg-current" style={{ backgroundImage: 'url()', backgroundSize: 'cover', backgroundPosition: 'right' }}>
            <div className="container flex items-center justify-center flex-1 h-full mx-auto mb-52">

                <div className="w-full max-w-lg md:-mt-16 mt-36">
                    <div className="leading-loose">
                        <form onSubmit={handleRegister} className="p-10 m-auto rounded shadow-2xl bg-white/20 -mt-40 md:mt-12 ">
                            <p className="mb-8 text-3xl font-semibold  text-center text-white">
                                Register
                            </p>
                            <div className="mb-2">
                                <div className=" relative ">
                                    <input type="text" id="login-with-bg-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="name" name="name" />
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className=" relative ">
                                    <input type="email" id="login-with-bg-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="email" name="email" required />
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className=" relative ">
                                    <input type="text" id="login-with-bg-photo" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="photo url" name="photo" />
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className=" relative ">
                                    <input type="password" id="login-with-bg-password" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="password" name="password" required/>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-6">
                                <button type="submit" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Register
                                </button>
                            </div>
                            <div className="text-center text-white">
                                <div className="mt-5">
                                    <div className="flex justify-center items-center"><span className="border-1 border-black w-[100px] mr-3"><hr /></span>Register with social accounts <span className="border-1 w-[100px] ml-3"><hr /></span></div>
                                </div>

                                <div className="mt-4 ">  
                                    <div className="mb-4 px-10 flex justify-center items-center w-full ">
                                        <button onClick={handleGoogleSignIn} className="btn btn-outline rounded-3xl flex normal-case w-[300px] text-white">
                                            <FcGoogle className="text-2xl"></FcGoogle>
                                            Continue with Google    
                                        </button>
                                    </div>  
                                </div>  
                            </div>

                            <div className="flex justify-center mt-4 text-white">
                                <p>Already have an account?<span className="font-semibold"><Link className="text-[#00719B] underline ml-2" to='/login'>sign in</Link></span></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;