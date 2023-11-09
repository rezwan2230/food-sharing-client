
const Bannner = () => {
    return (
        <div className="hero h-[60vh] bg-black bg-opacity-90" style={{ backgroundImage: 'url(https://i.ibb.co/BN5Lj60/authentic-italian-pasta.jpg)' }}>
            <div className="hero-overlay bg-black bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to Food Share</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Bannner;