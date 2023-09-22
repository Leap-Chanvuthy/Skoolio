import { Link } from "react-router-dom";

const Home = () => {
  return (
    
    <div
      className="hero min-h-[42rem]"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
      }}
    >
    <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold underline">Welcome to Skoolio</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn border-2 border-info"><Link to="/student">Get Started</Link></button>
        </div>
      </div>
    </div>
    
  );
};

export default Home;
