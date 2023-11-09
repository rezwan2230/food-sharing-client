import { Link } from "react-router-dom";

const Bannner = () => {
    return (
        <div className="hero h-[60vh] bg-black bg-opacity-90" style={{ backgroundImage: 'url(https://i.ibb.co/BN5Lj60/authentic-italian-pasta.jpg)' }}>
            <div className="hero-overlay bg-black bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to Food Share</h1>
                    <p className="mb-5">If you want to order some food or sell your surplus food, then you have come to the right place.</p>
                    <Link to='/login'><button className="btn normal-case btn-sm py-2">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Bannner;