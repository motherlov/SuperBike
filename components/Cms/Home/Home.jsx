
import { Skeleton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProducts } from "../../../Redux/ProductSlice";
import { removeProduct } from "../../../Redux/ProductSlice";
import { image } from "../../../Redux/Helper";
import {image3}  from "../../Image/img1.jpeg";
// import { updateProducts } from '../../../Redux/ProductSlice';
import SweetAlertComponent from "../../../sweetalert/sweetalert";
import { Pagination } from "@mui/material";
import { logout } from "../../../Redux/AuthSlice";
import { useNavigate } from "react-router-dom"; 
import { toast } from "react-toastify";

const Home = () => {
  const { ProductList, totalPages ,status} = useSelector((state) => state.Product);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const [totalRecords, setPage] = useState();

  const [productId, setProductId] = useState();
  const [openModel, setOpenModel] = useState(false);

  const handleChange = (e, pageno) => {
    setPage(pageno);
    dispatch(
      getProducts({
        page: pageno,
        perpage: 10,
      })
    );
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleDelete = () => {
    if (productId) {
      dispatch(removeProduct({ id: productId })).then(() => {
        dispatch(getProducts());
      });
      setOpenModel(false);
      setProductId("");
    }
  };

  // console.log("product =", ProductList);


  const submitLogout = () => {
    dispatch(logout());
    navigate("/login");
    toast.success("logout successfully");
  };


  return (
    
      <div>
        <div className="container-fluid p-0">
          <div
            id="header-carousel"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                {/* <img className="w-100" src="img/carousel-1.jpg" alt="imagees" /> */}
                <img className="w-100" src="./img/sports.jpg" alt="imagees" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: 900 }}>
                    <h4 className="text-white text-uppercase mb-md-3">
                       {/* Super &amp; Bike */}
                    </h4>
                    <h1 className="display-3 text-white mb-md-4">
                      Let's Discover The SuperBike Together
                    </h1>
                    {/* <Link
                      to={"/login"}
                      className="btn btn-primary py-md-3 px-md-5 mt-2"
                    >
                      Login
                    </Link> */}

                    {token ? (
                    <button
                      className="btn btn-primary py-md-3 px-md-5 mt-2"
                      onClick={() => { submitLogout(); }}  >
                      logout
                    </button>
                  ) : (
                    <>
                      <Link to={"/login"} className="btn btn-primary py-md-3 px-md-5 mt-2">
                        Login
                      </Link>
                      </>)}

                  


                  </div>
                </div>
              </div>
              <div className="carousel-item">
                {/* <img className="w-100" src="img/carousel-2.jpg" alt="" /> */}
                <img className="w-100" src="./img/honda.jpg" alt="" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: 800 }}>
                    <h4 className="text-white text-uppercase mb-md-3">
                      {/* Super &amp; Bike */}
                    </h4>
                    <h1 className="display-3 text-white mb-md-4">
                      Discover Amazing Bike With Us
                    </h1>
                    <a href className="btn btn-primary py-md-3 px-md-5 mt-2">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>



           



            </div>
            <a
              className="carousel-control-prev"
              href="#header-carousel"
              data-slide="prev"
            >
              <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
                <span className="carousel-control-prev-icon mb-n2" />
              </div>
            </a>
            <a
              className="carousel-control-next"
              href="#header-carousel"
              data-slide="next"
            >
              <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
                <span className="carousel-control-next-icon mb-n2" />
              </div>
            </a>
          </div>
        </div>
        {/* Carousel End */}
        {/* Booking Start */}
        <div className="container-fluid booking mt-5 pb-5">
          <div className="container pb-5">
            <div className="bg-light shadow" style={{ padding: 30 }}>
              <div className="row align-items-center" style={{ minHeight: 60 }}>
                <div className="col-md-10">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="mb-3 mb-md-0">
                        <select
                          className="custom-select px-4"
                          style={{ height: 47 }}
                        >
                          <option selected>Destination</option>
                          <option value={1}>Destination 1</option>
                          <option value={2}>Destination 1</option>
                          <option value={3}>Destination 1</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="mb-3 mb-md-0">
                        <div
                          className="date"
                          id="date1"
                          data-target-input="nearest"
                        >
                          <input
                            type="text"
                            className="form-control p-4 datetimepicker-input"
                            placeholder="Depart Date"
                            data-target="#date1"
                            data-toggle="datetimepicker"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="mb-3 mb-md-0">
                        <div
                          className="date"
                          id="date2"
                          data-target-input="nearest"
                        >
                          <input
                            type="text"
                            className="form-control p-4 datetimepicker-input"
                            placeholder="Return Date"
                            data-target="#date2"
                            data-toggle="datetimepicker"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="mb-3 mb-md-0">
                        <select
                          className="custom-select px-4"
                          style={{ height: 47 }}
                        >
                          <option selected>Duration</option>
                          <option value={1}>Duration 1</option>
                          <option value={2}>Duration 1</option>
                          <option value={3}>Duration 1</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <button
                    className="btn btn-primary btn-block"
                    type="submit"
                    style={{ height: 47, marginTop: "-2px" }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Booking End */}
        {/* About Start */}
        <div className="container-fluid py-5">
          <div className="container pt-5">
            <div className="row">
              <div className="col-lg-6" style={{ minHeight: 500 }}>
                <div className="position-relative h-100">
                  <img
                    className="position-absolute w-100 h-100"
                    src="img/rider.jpg"
                    style={{ objectFit: "cover" }}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 pt-5 pb-lg-5">
                <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
                  <h6
                    className="text-primary text-uppercase"
                    style={{ letterSpacing: 5 }}
                  >
                    About Us
                  </h6>
                  <h1 className="mb-3">
                    We Provide Best Bike Packages In Your Budget
                  </h1>
                  <p>
                    Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam
                    dolore sed et. Sit rebum labore sit sit ut vero no sit. Et
                    elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo
                    eos et erat sed diam duo
                  </p>
                  <div className="row mb-4">
                    <div className="col-6">
                      <img className="img-fluid" src="img/ktem.png" alt="" />
                    </div>
                    <div className="col-6">
                      <img className="img-fluid" src="img/honda.jpg" alt="" />
                    </div>
                  </div>
                  <a href className="btn btn-primary mt-1">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* Feature Start */}
        <div className="container-fluid pb-5">
          <div className="container pb-5">
            <div className="row">
              <div className="col-md-4">
                <div className="d-flex mb-4 mb-lg-0">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3"
                    style={{ height: 100, width: 100 }}
                  >
                    <i className="fa fa-2x fa-money-check-alt text-white" />
                  </div>
                  <div className="d-flex flex-column">
                    <h5 className>Competitive Pricing</h5>
                    <p className="m-0">
                      Magna sit magna dolor duo dolor labore rebum amet elitr
                      est diam sea
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex mb-4 mb-lg-0">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3"
                    style={{ height: 100, width: 100 }}
                  >
                    <i className="fa fa-2x fa-award text-white" />
                  </div>
                  <div className="d-flex flex-column">
                    <h5 className>Best Services</h5>
                    <p className="m-0">
                      Magna sit magna dolor duo dolor labore rebum amet elitr
                      est diam sea
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex mb-4 mb-lg-0">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3"
                    style={{ height: 100, width: 100 }}
                  >
                    <i className="fa fa-2x fa-globe text-white" />
                  </div>
                  <div className="d-flex flex-column">
                    <h5 className>Worldwide Coverage</h5>
                    <p className="m-0">
                      Magna sit magna dolor duo dolor labore rebum amet elitr
                      est diam sea
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Feature End */}
        {/* Destination Start */}
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
              <h6
                className="text-primary text-uppercase"
                style={{ letterSpacing: 5 }}
              >
                Destination
              </h6>
              <h1>Explore Top Destination</h1>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                  <img
                    className="img-fluid"
                    src="img/ktem.png"
                    alt=""
                  />
                  <a
                    className="destination-overlay text-white text-decoration-none"
                    href
                  >
                    <h5 className="text-white">KTEM BIKE</h5>
                    <span>100 Bikes</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                  <img
                    className="img-fluid"
                    src="img/honda.jpg"
                    alt=""
                  />
                  <a
                    className="destination-overlay text-white text-decoration-none"
                    href
                  >
                    <h5 className="text-white">HONDA BIKE</h5>
                    <span>100 Bike</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                  <img
                    className="img-fluid"
                    src="img/kawasaki.jpg"
                    alt=""
                  />
                  <a
                    className="destination-overlay text-white text-decoration-none"
                    href
                  >
                    <h5 className="text-white">kawasaki</h5>
                    <span>100 Bike</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                  <img
                    className="img-fluid"
                    src="img/bike.jpeg"
                    alt=""
                  />
                  <a
                    className="destination-overlay text-white text-decoration-none"
                    href
                  >
                    <h5 className="text-white">NINJA</h5>
                    <span>100 Bike</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                  <img
                    className="img-fluid"
                    src="img/k.jpeg"
                    alt=""
                  />
                  <a
                    className="destination-overlay text-white text-decoration-none"
                    href
                  >
                    <h5 className="text-white">SPORTS BIKE</h5>
                    <span>100 Bike</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                  <img
                    className="img-fluid"
                    src="img/rider.jpg"
                    alt=""
                  />
                  <a
                    className="destination-overlay text-white text-decoration-none"
                    href
                  >
                    <h5 className="text-white">GHOST RIDER</h5>
                    <span>100 Bike</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Destination Start */}
        {/* Service Start */}
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
              <h6
                className="text-primary text-uppercase"
                style={{ letterSpacing: 5 }}
              >
                Services
              </h6>
              <h1>Super &amp; Bike Services</h1>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-item bg-white text-center mb-2 py-5 px-4">
                  <i className="fa fa-2x fa-route mx-auto mb-4" />
                  <h5 className="mb-2">bike Guide</h5>
                  <p className="m-0">
                    Justo sit justo eos amet tempor amet clita amet ipsum eos
                    elitr. Amet lorem est amet labore
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-item bg-white text-center mb-2 py-5 px-4">
                  <i className="fa fa-2x fa-ticket-alt mx-auto mb-4" />
                  <h5 className="mb-2">Ticket Booking</h5>
                  <p className="m-0">
                    Justo sit justo eos amet tempor amet clita amet ipsum eos
                    elitr. Amet lorem est amet labore
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-item bg-white text-center mb-2 py-5 px-4">
                  <i className="fa fa-2x fa-hotel mx-auto mb-4" />
                  <h5 className="mb-2">Bike Booking</h5>
                  <p className="m-0">
                    Justo sit justo eos amet tempor amet clita amet ipsum eos
                    elitr. Amet lorem est amet labore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Service End */}
        {/* Packages Start */}
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
              <h6
                className="text-primary text-uppercase"
                style={{ letterSpacing: 5 }}
              >
                Packages
              </h6>
              <h1>Pefect SuperBike Packages</h1>
            </div>
            <div className="row">



            {status==="success"? (ProductList && ProductList.map((product)=>( 

                  <div className="col-lg-4 col-md-6 mb-4" key={product._id}>
                    <div className="package-item bg-white mb-2">
                      <img
                        className="img-fluid"
                        src={product?.image ? image(product?.image) : "error"}
                        alt=""
                      />
                      <a className="h5 text-decoration-none" href>
                        {product.title}
                      </a>
                      {/* src="img/package-1.jpg " */}
                      <div className="p-4">
                        <div className="d-flex justify-content-between mb-3">
                          <small className="m-0">
                            <i className="fa fa-map-marker-alt text-primary mr-2" />
                            Thailand
                          </small>
                          <small className="m-0">
                            <i className="fa fa-calendar-alt text-primary mr-2" />
                            3 days
                          </small>
                          <small className="m-0">
                            <i className="fa fa-user text-primary mr-2" />2
                            Person
                          </small>
                        </div>
                        <a className="h5 text-decoration-none" href>
                          {product.description}
                        </a>
                        <div className="border-top mt-4 pt-4">
                          <div className="d-flex justify-content-between">
                            <h6 className="m-0">
                              <i className="fa fa-star text-primary mr-2" />
                              4.5 <small>(250)</small>
                            </h6>
                            <h5 className="m-0">$35000</h5>

                            <button
                              type="submit"
                              variant='contained' style={{color:"red"}} 
                              onClick={() => {
                                setProductId(product._id);
                                setOpenModel(true);
                              }}
                            >
                              <b>Delete</b>
                            </button>

                            <Link to={`/update/${product._id}`}>
                              <button type="submit" style={{color:"Teal"}}  >
                             <b>Update</b>
                              </button>
                            </Link>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))):(
                  <>
            {[...Array(10)].map((_, index) => (
              <div key={index} className="col-md-6 mb-4 pb-2">
                <Skeleton
                  variant="rectangular"
                  width={300}
                  height={350} />
              </div>
              ))}
            </>
                
                )}
          </div>
         

        </div>


         









{/* ///////////////////////////////////  pagination   ///////////////// */}


        {ProductList && ProductList.length !== 0 ? (
          <div style={{display:'flex',justifyContent:'center'}}>
          <Pagination
            count={totalPages}
            onChange={handleChange}
            totalRecords={totalRecords}
            shape="rounded"
            variant="outlined"
          />
          </div>
        ) : (
          <></>
        )}
        {/* Packages End */}
        {/* Registration Start */}
        <div
          className="container-fluid bg-registration py-5"
          style={{ margin: "90px 0" }}
        >
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-lg-7 mb-5 mb-lg-0">
                <div className="mb-4">
                  <h6
                    className="text-primary text-uppercase"
                    style={{ letterSpacing: 5 }}
                  >
                    Mega Offer
                  </h6>
                  <h1 className="text-white">
                    <span className="text-primary">30% OFF</span> For SuperBike
                  </h1>
                </div>
                <p className="text-white">
                  Invidunt lorem justo sanctus clita. Erat lorem labore ea,
                  justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea
                  justo. Erat justo sed sed diam. Ea et erat ut sed diam sea
                  ipsum est dolor
                </p>
                <ul className="list-inline text-white m-0">
                  <li className="py-2">
                    <i className="fa fa-check text-primary mr-3" />
                    Labore eos amet dolor amet diam
                  </li>
                  <li className="py-2">
                    <i className="fa fa-check text-primary mr-3" />
                    Etsea et sit dolor amet ipsum
                  </li>
                  <li className="py-2">
                    <i className="fa fa-check text-primary mr-3" />
                    Diam dolor diam elitripsum vero.
                  </li>
                </ul>
              </div>
              <div className="col-lg-5">
                <div className="card border-0">
                  <div className="card-header bg-primary text-center p-4">
                    <h1 className="text-white m-0">Sign Up Now</h1>
                  </div>
                  <div className="card-body rounded-bottom bg-white p-5">
                    <form>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control p-4"
                          placeholder="Your name"
                          required="required"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control p-4"
                          placeholder="Your email"
                          required="required"
                        />
                      </div>
                      <div className="form-group">
                        <select
                          className="custom-select px-4"
                          style={{ height: 47 }}
                        >
                          <option selected>Select a destination</option>
                          <option value={1}>destination 1</option>
                          <option value={2}>destination 1</option>
                          <option value={3}>destination 1</option>
                        </select>
                      </div>
                      <div>
                        <button
                          className="btn btn-primary btn-block py-3"
                          type="submit"
                        >
                          Sign Up Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Registration End */}
        {/* Team Start */}
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
              <h6
                className="text-primary text-uppercase"
                style={{ letterSpacing: 5 }}
              >
                Guides
              </h6>
              <h1>Our SuperBike Guides</h1>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                <div className="team-item bg-white mb-4">
                  <div className="team-img position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src="img/team-1.jpg"
                      alt=""
                    />
                    <div className="team-social">
                      <a className="btn btn-outline-primary btn-square" href>
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href>
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href>
                        <i className="fab fa-instagram" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href>
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <h5 className="text-truncate"> Jully Anna</h5>
                    <p className="m-0">Kawasaki</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                <div className="team-item bg-white mb-4">
                  <div className="team-img position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src="img/team-2.jpg"
                      alt=""
                    />
                    <div className="team-social">
                      <a className="btn btn-outline-primary btn-square" href>
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href>
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href>
                        <i className="fab fa-instagram" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href>
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <h5 className="text-truncate">MR. MARK</h5>
                    <p className="m-0">Ghost Rider</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                <div className="team-item bg-white mb-4">
                  <div className="team-img position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src="img/team-3.jpg"
                      alt=""
                    />
                    <div className="team-social">
                      <a className="btn btn-outline-primary btn-square" href>
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href>
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href>
                        <i className="fab fa-instagram" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href>
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <h5 className="text-truncate"> Danny Dee</h5>
                    <p className="m-0">KTEM</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                <div className="team-item bg-white mb-4">
                  <div className="team-img position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src="img/team-4.jpg"
                      alt=""
                    />
                    <div className="team-social">
                      <a className="btn btn-outline-primary btn-square" href>
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href>
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href>
                        <i className="fab fa-instagram" />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href>
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <h5 className="text-truncate">Jemes Camran</h5>
                    <p className="m-0">Honda</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team End */}
        {/* Testimonial Start */}
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="text-center mb-3 pb-3">
              <h6
                className="text-primary text-uppercase"
                style={{ letterSpacing: 5 }}
              >
                Testimonial
              </h6>
              <h1>What Say Our Clients</h1>
            </div>
            <div className="owl-carousel testimonial-carousel">
              <div className="text-center pb-4">
                <img
                  className="img-fluid mx-auto"
                  src="img/testimonial-1.jpg"
                  style={{ width: 100, height: 100 }}
                  alt=""
                />
                <div className="testimonial-text bg-white p-4 mt-n5">
                  <p className="mt-5">
                    Dolor et eos labore, stet justo sed est sed. Diam sed sed
                    dolor stet amet eirmod eos labore diam
                  </p>
                  <h5 className="text-truncate">Client Name</h5>
                  <span>Profession</span>
                </div>
              </div>
              <div className="text-center">
                <img
                  className="img-fluid mx-auto"
                  src="img/testimonial-2.jpg"
                  style={{ width: 100, height: 100 }}
                  alt=""
                />
                <div className="testimonial-text bg-white p-4 mt-n5">
                  <p className="mt-5">
                    Dolor et eos labore, stet justo sed est sed. Diam sed sed
                    dolor stet amet eirmod eos labore diam
                  </p>
                  <h5 className="text-truncate">Client Name</h5>
                  <span>Profession</span>
                </div>
              </div>
              <div className="text-center">
                <img
                  className="img-fluid mx-auto"
                  src="img/testimonial-3.jpg"
                  style={{ width: 100, height: 100 }}
                  alt=""
                />
                <div className="testimonial-text bg-white p-4 mt-n5">
                  <p className="mt-5">
                    Dolor et eos labore, stet justo sed est sed. Diam sed sed
                    dolor stet amet eirmod eos labore diam
                  </p>
                  <h5 className="text-truncate">Client Name</h5>
                  <span>Profession</span>
                </div>
              </div>
              <div className="text-center">
                <img
                  className="img-fluid mx-auto"
                  src="img/testimonial-4.jpg"
                  style={{ width: 100, height: 100 }}
                  alt=""
                />
                <div className="testimonial-text bg-white p-4 mt-n5">
                  <p className="mt-5">
                    Dolor et eos labore, stet justo sed est sed. Diam sed sed
                    dolor stet amet eirmod eos labore diam
                  </p>
                  <h5 className="text-truncate">Client Name</h5>
                  <span>Profession</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial End */}
        {/* Blog Start */}
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
              <h6
                className="text-primary text-uppercase"
                style={{ letterSpacing: 5 }}
              >
                Our Blog
              </h6>
              <h1>Latest From Our Blog</h1>
            </div>
            <div className="row pb-3">
              <div className="col-lg-4 col-md-6 mb-4 pb-2">
                <div className="blog-item">
                  <div className="position-relative">
                    <img
                      className="img-fluid w-100"
                      src="img/k.jpeg"
                      alt=""
                    />
                    <div className="blog-date">
                      <h6 className="font-weight-bold mb-n1">01</h6>
                      <small className="text-white text-uppercase">Jan</small>
                    </div>
                  </div>
                  <div className="bg-white p-4">
                    <div className="d-flex mb-2">
                      <a
                        className="text-primary text-uppercase text-decoration-none"
                        href
                      >
                        Admin
                      </a>
                      <span className="text-primary px-2">|</span>
                      <a
                        className="text-primary text-uppercase text-decoration-none"
                        href
                      >
                        Super &amp; Bike
                      </a>
                    </div>
                    <a className="h5 m-0 text-decoration-none" href>
                      Dolor justo sea kasd lorem clita justo diam amet
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 pb-2">
                <div className="blog-item">
                  <div className="position-relative">
                    <img
                      className="img-fluid w-100"
                      src="img/honda.jpg"
                      alt=""
                    />
                    <div className="blog-date">
                      <h6 className="font-weight-bold mb-n1">01</h6>
                      <small className="text-white text-uppercase">Jan</small>
                    </div>
                  </div>
                  <div className="bg-white p-4">
                    <div className="d-flex mb-2">
                      <a
                        className="text-primary text-uppercase text-decoration-none"
                        href
                      >
                        Admin
                      </a>
                      <span className="text-primary px-2">|</span>
                      <a
                        className="text-primary text-uppercase text-decoration-none"
                        href
                      >
                        Super &amp; Bike
                      </a>
                    </div>
                    <a className="h5 m-0 text-decoration-none" href>
                      Dolor justo sea kasd lorem clita justo diam amet
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 pb-2">
                <div className="blog-item">
                  <div className="position-relative">
                    <img
                      className="img-fluid w-100"
                      src="img/ktem.png"
                      alt=""
                    />
                    <div className="blog-date">
                      <h6 className="font-weight-bold mb-n1">01</h6>
                      <small className="text-white text-uppercase">Jan</small>
                    </div>
                  </div>
                  <div className="bg-white p-4">
                    <div className="d-flex mb-2">
                      <a
                        className="text-primary text-uppercase text-decoration-none"
                        href
                      >
                        Admin
                      </a>
                      <span className="text-primary px-2">|</span>
                      <a
                        className="text-primary text-uppercase text-decoration-none"
                        href
                      >
                        Super &amp; Bike
                      </a>
                    </div>
                    <a className="h5 m-0 text-decoration-none" href>
                      Dolor justo sea kasd lorem clita justo diam amet
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Blog End */}
        {/* Footer Start */}
        <div
          className="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5"
          style={{ marginTop: 90 }}
        >
          <div className="row pt-5">
            <div className="col-lg-3 col-md-6 mb-5">
              <a href className="navbar-brand">
                <h1 className="text-primary">
                  <span className="text-white">SUPER</span>BIKE
                </h1>
              </a>
              <p>
                Sed ipsum clita tempor ipsum ipsum amet sit ipsum lorem amet
                labore rebum lorem ipsum dolor. No sed vero lorem dolor dolor
              </p>
              <h6
                className="text-white text-uppercase mt-4 mb-3"
                style={{ letterSpacing: 5 }}
              >
                Follow Us
              </h6>
              <div className="d-flex justify-content-start">
                <Link
                  className="btn btn-outline-primary btn-square mr-2"
                  to="#"
                >
                  <i className="fab fa-twitter" />
                </Link>
                <Link
                  className="btn btn-outline-primary btn-square mr-2"
                  to="#"
                >
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link
                  className="btn btn-outline-primary btn-square mr-2"
                  to="#"
                >
                  <i className="fab fa-linkedin-in" />
                </Link>
                <Link className="btn btn-outline-primary btn-square" to="#">
                  <i className="fab fa-instagram" />
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <h5
                className="text-white text-uppercase mb-4"
                style={{ letterSpacing: 5 }}
              >
                Our Services
              </h5>
              <div className="d-flex flex-column justify-content-start">
                <Link className="text-white-50 mb-2" to="#">
                  <i className="fa fa-angle-right mr-2" />
                  About
                </Link>
                <Link className="text-white-50 mb-2" to="#">
                  <i className="fa fa-angle-right mr-2" />
                  Destination
                </Link>
                <Link className="text-white-50 mb-2" to="#">
                  <i className="fa fa-angle-right mr-2" />
                  Services
                </Link>
                <Link className="text-white-50 mb-2" to="#">
                  <i className="fa fa-angle-right mr-2" />
                  Packages
                </Link>
                <Link className="text-white-50 mb-2" to="#">
                  <i className="fa fa-angle-right mr-2" />
                  Guides
                </Link>
                <Link className="text-white-50 mb-2" to="#">
                  <i className="fa fa-angle-right mr-2" />
                  Testimonial
                </Link>
                <Link className="text-white-50" to="#">
                  <i className="fa fa-angle-right mr-2" />
                  Blog
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <h5
                className="text-white text-uppercase mb-4"
                style={{ letterSpacing: 5 }}
              >
                Usefull Links
              </h5>
              <div className="d-flex flex-column justify-content-start">
                <Link className="text-white-50 mb-2" to="#">
                  <i className="fa fa-angle-right mr-2" />
                  About
                </Link>
                <Link className="text-white-50 mb-2" to="#">
                  <i className="fa fa-angle-right mr-2" />
                  Destination
                </Link>
                <Link className="text-white-50 mb-2" to="#">
                  <i className="fa fa-angle-right mr-2" />
                  Services
                </Link>
                <Link className="text-white-50 mb-2" to="#">
                  <i className="fa fa-angle-right mr-2" />
                  Packages
                </Link>
                <Link className="text-white-50 mb-2" to="#">
                  <i className="fa fa-angle-right mr-2" />
                  Guides
                </Link>
                <Link className="text-white-50 mb-2" to="#">
                  <i className="fa fa-angle-right mr-2" />
                  Testimonial
                </Link>
                <Link className="text-white-50" to="#">
                  <i className="fa fa-angle-right mr-2" />
                  Blog
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <h5
                className="text-white text-uppercase mb-4"
                style={{ letterSpacing: 5 }}
              >
                Contact Us
              </h5>
              <p>
                <i className="fa fa-map-marker-alt mr-2" />
                123 Street, New York, USA
              </p>
              <p>
                <i className="fa fa-phone-alt mr-2" />
                +012 345 67890
              </p>
              <p>
                <i className="fa fa-envelope mr-2" />
                info@example.com
              </p>
              <h6
                className="text-white text-uppercase mt-4 mb-3"
                style={{ letterSpacing: 5 }}
              >
                Newsletter
              </h6>
              <div className="w-100">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control border-light"
                    style={{ padding: 25 }}
                    placeholder="Your Email"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary px-3">Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5"
          style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}
        >
          <div className="row">
            <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
              <p className="m-0 text-white-50">
                Copyright © <Link to="#">Domain</Link>. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-6 text-center text-md-right">
              <p className="m-0 text-white-50">
                Designed by <a href="https://htmlcodex.com">HTML Codex</a>
              </p>
            </div>
          </div>
        </div>
        {/* Footer End */}
      </div>

      {/* ////////////////    SweetAlertComponent   ///////////// */}

      {openModel && (
        <SweetAlertComponent
          confirm={handleDelete}
          cancle={() => setOpenModel(false)}
          title={"Are you sure data delete?"}
          subtitle={"You will not be able to recover!"}
        />
      )}
    </div>
  );
};

export default Home;
