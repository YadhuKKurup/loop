import "../../../Stylesheets/CustomerDashboard.css";
import backgroundImage from "../../../Images/ASS_cover.jpg";
import Counter from "../../../CommonComponents/Counter";
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';


const CustomerDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow bg-gray-900">
        <div
          className="mx-auto w-4/5 h-full mt-20 p-2"
          style={{
            borderRadius: "2rem",
            height: "100vh",
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            position: "relative",
          }}
        >
          {/* <div 
            className="absolute inset-0" 
            style={{
              background: 'linear-gradient(to bottom, transparent,bg-gray-900))'
            }}
          ></div> */}

          <div className="container bg-black h-12 d-flex">
            <div className="container bg-black h-12 topBotomBordersOut d-flex">
              <div className="Loop mx-4 fs-5">LooP</div>
              <div className="vl"></div>
              <div className="mx-3">
                <a>Playstation</a>
                <a>Xbox</a>
                <a>PC Gaming</a>

                <CSSTransition
                in={true}
                appear={true}
                timeout={10300}
                classNames="fade"
              >
            <Link to="/gameList">Games</Link>         
            </CSSTransition>
       
                <a>Accessories</a>
                <a>Comming Soon</a>
                <a>Deals</a>
              </div>
            </div>

            <div className="d-flex mt-1" style={{ alignItems: "center" }}>
              <div className="search-container">
                <input
                  type="text"
                  name="search"
                  placeholder="Search..."
                  className="search-input"
                />
                <a href="#" className="search-btn ">
                  <i className="fas fa-search"></i>
                </a>
              </div>

              <div>
                <li className="font-sans block  lg:inline-block lg:mt-0 align-middle text-white hover:text-gray-700">
                  <a href="#" role="button" className="relative flex">
                    <svg
                      className="flex-1 w-6 h-7 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                    </svg>
                    <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                      5
                    </span>
                  </a>
                </li>{" "}
              </div>
            </div>

            <div className="avatar online m-3">
              <div className="w-10 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>

            <div className="counter">
            <Counter />
           </div>

        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
