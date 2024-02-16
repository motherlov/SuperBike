import React from "react";
import { useEffect, useState } from "react";
import { logout } from "../../../Redux/AuthSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userDetails } from "../../../Redux/ProductSlice";
import image1 from "../../Image/img1.jpeg";
import { profile_pic } from "../../../Redux/Helper";
const Navbar = () => {
  const { user } = useSelector((state) => state.Product);

  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(userDetails());
  }, []);

  // const userPic = localStorage.getItem("userPic")
  // console.log(userPic);

  const location = useLocation();
  const fullURL = `${location.pathname}`;
  console.log(fullURL, "fullURL");

  const submitLogout = () => {
    dispatch(logout());
    navigate("/login");
    toast.success("logout successfully");
  };

  return (
    <>
      {fullURL === "/" ||
      fullURL === "/about" ||
      fullURL === "/services" ||
      fullURL === "/contact" ||
      fullURL === "/blogGrid" ||
      fullURL === "/blogDetail" ||
      fullURL === "/destination" ||
      fullURL === "/tourPackages" ||
      fullURL === "/testimonial" ||
      fullURL === "/travelGuides" ? (
        <>
          <div>
            <div>
              <div className="container-fluid bg-light pt-3 d-none d-lg-block">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                      <div className="d-inline-flex align-items-center">
                        <p>
                          <i className="fa fa-envelope mr-2" />

                     {/* { token ?.(user.email) ? (
                            <>{user.email}</>
                          ) : (
                            <>info@example.com</>
                          )} */}

                      <>info@example.com</>
                        </p>
                        <p className="text-body px-3">|</p>
                        <p>
                          <i className="fa fa-phone-alt mr-2" />
                          +012 345 6789
                        </p>
                        <p className="text-body px-3">|</p>

                        {/* <p>
                  <img className="img-fluid"  src={user?.profile_pic? profile_pic(user?.profile_pic)
                  :"http://cnd.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png"} 
                  style={{height:'30px',width:'30px',borderRadius:'50%'}} />
                    </p> */}

                        {/* 
                    <img className="img-fluid" src={token? profile_pic(imgToken) : image1}
                    style={{height:'30px',width:'30px',borderRadius:'50%'}} /> */}

                        {/* {token ? (
                  <img src={userPic? profile_pic(userPic):image1} 
                  style={{height:'30px',width:'30px',borderRadius:'50%'}} className="img-fluid" alt="user"/>): null} */}

                        {token ? (
                          <img
                            src={
                              user?.profile_pic
                                ? profile_pic(user?.profile_pic)
                                : image1
                            }
                            style={{
                              height: "30px",
                              width: "30px",
                              borderRadius: "50%",
                            }}
                            className="img-fluid"
                            alt="user"
                          />
                        ) : null}
                      </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                      <div className="d-inline-flex align-items-center">
                        <Link className="text-primary px-3" href>
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link className="text-primary px-3" href>
                          <i className="fab fa-twitter" />
                        </Link>
                        <Link className="text-primary px-3" href>
                          <i className="fab fa-linkedin-in" />
                        </Link>
                        <Link className="text-primary px-3" href>
                          <i className="fab fa-instagram" />
                        </Link>
                        <Link className="text-primary pl-3" href>
                          <i className="fab fa-youtube" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Topbar End */}
              {/* Navbar Start */}
              <div className="container-fluid position-relative nav-bar p-0">
                <div
                  className="container-lg position-relative p-0 px-lg-3"
                  style={{ zIndex: 9 }}
                >
                  <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
                    <Link href className="navbar-brand">
                      <h1 className="m-0 text-primary">
                        <span className="text-dark">SUPER</span>BIKE
                      </h1>
                    </Link>
                    <button
                      type="button"
                      className="navbar-toggler"
                      data-toggle="collapse"
                      data-target="#navbarCollapse"
                    >
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div
                      className="collapse navbar-collapse justify-content-between px-3"
                      id="navbarCollapse"
                    >
                      <div className="navbar-nav ml-auto py-0">
                        <Link to={"/"} className="nav-item nav-link active">
                          Home
                        </Link>
                        <Link to={"/about"} className="nav-item nav-link">
                          About
                        </Link>
                        <Link to={"/services"} className="nav-item nav-link">
                          Services
                        </Link>
                        {/* <Link
                          to={"/tourPackages"}
                          className="nav-item nav-link"
                        >
                          Tour Packages
                        </Link> */}
                        <div className="nav-item dropdown">
                          <Link
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            Pages
                          </Link>
                          <div className="dropdown-menu border-0 rounded-0 m-0">
                            {/* <Link to={"/blogGrid"} className="dropdown-item">
                              Blog Grid
                            </Link> */}
                            <Link to={"/blogDetail"} className="dropdown-item">
                              Blog Detail
                            </Link>
                            {/* <Link to={"/destination"} className="dropdown-item">
                              Destination
                            </Link>
                            <Link
                              to={"/travelGuides"}
                              className="dropdown-item"
                            >
                              Travel Guides
                            </Link> */}

                            <Link to={"/testimonial"} className="dropdown-item">
                              Testimonial
                            </Link>
                          </div>
                        </div>
                        <Link to={"/contact"} className="nav-item nav-link">
                          Contact
                        </Link>
                        {token ? (
                          <button
                            className="nav-item nav-link"
                            onClick={() => {
                              submitLogout();
                            }}
                            style={{ border: "none", background: "none" }}
                          >
                            {" "}
                            Logout{" "}
                          </button>
                        ) : null}
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
              {/* Navbar End */}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
