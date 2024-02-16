import React from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';


const About = () => {
  return (
    <div>
  {/* Header Start */}
  <div className="container-fluid page-header">
    <div className="container">
      <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: 400}}>
        <h3 className="display-4 text-white text-uppercase">About</h3>
        <div className="d-inline-flex text-white">
          <p className="m-0 text-uppercase"><a className="text-white" href>Home</a></p>
          <i className="fa fa-angle-double-right pt-1 px-3" />
          <p className="m-0 text-uppercase">About</p>
        </div>
      </div>
    </div>
  </div>
  {/* Header End */}
  {/* Booking Start */}
  <div className="container-fluid booking mt-5 pb-5">
    <div className="container pb-5">
      <div className="bg-light shadow" style={{padding: 30}}>
        <div className="row align-items-center" style={{minHeight: 60}}>
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-3">
                <div className="mb-3 mb-md-0">
                  <select className="custom-select px-4" style={{height: 47}}>
                    <option selected>Destination</option>
                    <option value={1}>Destination 1</option>
                    <option value={2}>Destination 1</option>
                    <option value={3}>Destination 1</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3 mb-md-0">
                  <div className="date" id="date1" data-target-input="nearest">
                    <input type="text" className="form-control p-4 datetimepicker-input" placeholder="Depart Date" data-target="#date1" data-toggle="datetimepicker" />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3 mb-md-0">
                  <div className="date" id="date2" data-target-input="nearest">
                    <input type="text" className="form-control p-4 datetimepicker-input" placeholder="Return Date" data-target="#date2" data-toggle="datetimepicker" />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3 mb-md-0">
                  <select className="custom-select px-4" style={{height: 47}}>
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
            <button className="btn btn-primary btn-block" type="submit" style={{height: 47, marginTop: '-2px'}}>Submit</button>
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
        <div className="col-lg-6" style={{minHeight: 500}}>
          <div className="position-relative h-100">
            <img className="position-absolute w-100 h-100"  src="img/rider.jpg" style={{objectFit: 'cover'}} />
          </div>
        </div>
        <div className="col-lg-6 pt-5 pb-lg-5">
          <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
            <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}>About Us</h6>
            <h1 className="mb-3">We Provide Best SuperBike Packages In Your Budget</h1>
            <p>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
            <div className="row mb-4">
              <div className="col-6">
                <img className="img-fluid" src="img/ktem.png" alt />
              </div>
              <div className="col-6">
                <img className="img-fluid" src="img/honda.jpg" alt />
              </div>
            </div>
            <Link href className="btn btn-primary mt-1">Book Now</Link>
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
            <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style={{height: 100, width: 100}}>
              <i className="fa fa-2x fa-money-check-alt text-white" />
            </div>
            <div className="d-flex flex-column">
              <h5 className>Competitive Pricing</h5>
              <p className="m-0">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex mb-4 mb-lg-0">
            <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style={{height: 100, width: 100}}>
              <i className="fa fa-2x fa-award text-white" />
            </div>
            <div className="d-flex flex-column">
              <h5 className>Best Services</h5>
              <p className="m-0">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex mb-4 mb-lg-0">
            <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style={{height: 100, width: 100}}>
              <i className="fa fa-2x fa-globe text-white" />
            </div>
            <div className="d-flex flex-column">
              <h5 className>Worldwide Coverage</h5>
              <p className="m-0">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Feature End */}
  {/* Registration Start */}
  <div className="container-fluid bg-registration py-5" style={{margin: '90px 0'}}>
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-7 mb-5 mb-lg-0">
          <div className="mb-4">
            <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}>Mega Offer</h6>
            <h1 className="text-white"><span className="text-primary">30% OFF</span> For SuperBike</h1>
          </div>
          <p className="text-white">Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
            ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
            dolor</p>
          <ul className="list-inline text-white m-0">
            <li className="py-2"><i className="fa fa-check text-primary mr-3" />Labore eos amet dolor amet diam</li>
            <li className="py-2"><i className="fa fa-check text-primary mr-3" />Etsea et sit dolor amet ipsum</li>
            <li className="py-2"><i className="fa fa-check text-primary mr-3" />Diam dolor diam elitripsum vero.</li>
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
                  <input type="text" className="form-control p-4" placeholder="Your name" required="required" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control p-4" placeholder="Your email" required="required" />
                </div>
                <div className="form-group">
                  <select className="custom-select px-4" style={{height: 47}}>
                    <option selected>Select a destination</option>
                    <option value={1}>destination 1</option>
                    <option value={2}>destination 1</option>
                    <option value={3}>destination 1</option>
                  </select>
                </div>
                <div>
                  <button className="btn btn-primary btn-block py-3" type="submit">Sign Up Now</button>
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
        <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}>Guides</h6>
        <h1>Our SuperBike Guides</h1>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
          <div className="team-item bg-white mb-4">
            <div className="team-img position-relative overflow-hidden">
              <img className="img-fluid w-100" src="img/team-1.jpg" alt />
              <div className="team-social">
                <a className="btn btn-outline-primary btn-square" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-outline-primary btn-square" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-outline-primary btn-square" href><i className="fab fa-instagram" /></a>
                <a className="btn btn-outline-primary btn-square" href><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>
            <div className="text-center py-4">
              <h5 className="text-truncate">Jully Anna</h5>
              <p className="m-0">Kawasaki</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
          <div className="team-item bg-white mb-4">
            <div className="team-img position-relative overflow-hidden">
              <img className="img-fluid w-100" src="img/team-2.jpg" alt />
              <div className="team-social">
                <a className="btn btn-outline-primary btn-square" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-outline-primary btn-square" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-outline-primary btn-square" href><i className="fab fa-instagram" /></a>
                <a className="btn btn-outline-primary btn-square" href><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>
            <div className="text-center py-4">
              <h5 className="text-truncate">MR. MARK</h5>
              <p className="m-0">Ghost Rider</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
          <div className="team-item bg-white mb-4">
            <div className="team-img position-relative overflow-hidden">
              <img className="img-fluid w-100" src="img/team-3.jpg" alt />
              <div className="team-social">
                <a className="btn btn-outline-primary btn-square" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-outline-primary btn-square" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-outline-primary btn-square" href><i className="fab fa-instagram" /></a>
                <a className="btn btn-outline-primary btn-square" href><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>
            <div className="text-center py-4">
              <h5 className="text-truncate">Danny Dee</h5>
              <p className="m-0">KTEM</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
          <div className="team-item bg-white mb-4">
            <div className="team-img position-relative overflow-hidden">
              <img className="img-fluid w-100" src="img/team-4.jpg" alt />
              <div className="team-social">
                <a className="btn btn-outline-primary btn-square" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-outline-primary btn-square" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-outline-primary btn-square" href><i className="fab fa-instagram" /></a>
                <a className="btn btn-outline-primary btn-square" href><i className="fab fa-linkedin-in" /></a>
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
  {/* Footer Start */}
  <div className="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5" style={{marginTop: 90}}>
    <div className="row pt-5">
      <div className="col-lg-3 col-md-6 mb-5">
        <a href className="navbar-brand">
          <h1 className="text-primary"><span className="text-white">SUPER</span>BIKE</h1>
        </a>
        <p>Sed ipsum clita tempor ipsum ipsum amet sit ipsum lorem amet labore rebum lorem ipsum dolor. No sed vero lorem dolor dolor</p>
        <h6 className="text-white text-uppercase mt-4 mb-3" style={{letterSpacing: 5}}>Follow Us</h6>
        <div className="d-flex justify-content-start">
          <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-twitter" /></a>
          <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-facebook-f" /></a>
          <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-linkedin-in" /></a>
          <a className="btn btn-outline-primary btn-square" href="#"><i className="fab fa-instagram" /></a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-5">
        <h5 className="text-white text-uppercase mb-4" style={{letterSpacing: 5}}>Our Services</h5>
        <div className="d-flex flex-column justify-content-start">
          <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2" />About</a>
          <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2" />Destination</a>
          <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2" />Services</a>
          <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2" />Packages</a>
          <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2" />Guides</a>
          <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2" />Testimonial</a>
          <a className="text-white-50" href="#"><i className="fa fa-angle-right mr-2" />Blog</a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-5">
        <h5 className="text-white text-uppercase mb-4" style={{letterSpacing: 5}}>Usefull Links</h5>
        <div className="d-flex flex-column justify-content-start">
          <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2" />About</a>
          <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2" />Destination</a>
          <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2" />Services</a>
          <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2" />Packages</a>
          <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2" />Guides</a>
          <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2" />Testimonial</a>
          <a className="text-white-50" href="#"><i className="fa fa-angle-right mr-2" />Blog</a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-5">
        <h5 className="text-white text-uppercase mb-4" style={{letterSpacing: 5}}>Contact Us</h5>
        <p><i className="fa fa-map-marker-alt mr-2" />123 Street, New York, USA</p>
        <p><i className="fa fa-phone-alt mr-2" />+012 345 67890</p>
        <p><i className="fa fa-envelope mr-2" />info@example.com</p>
        <h6 className="text-white text-uppercase mt-4 mb-3" style={{letterSpacing: 5}}>Newsletter</h6>
        <div className="w-100">
          <div className="input-group">
            <input type="text" className="form-control border-light" style={{padding: 25}} placeholder="Your Email" />
            <div className="input-group-append">
              <button className="btn btn-primary px-3">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{borderColor: 'rgba(256, 256, 256, .1) !important'}}>
    <div className="row">
      <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
        <p className="m-0 text-white-50">Copyright © <a href="#">Domain</a>. All Rights Reserved.
        </p>
      </div>
      <div className="col-lg-6 text-center text-md-right">
        <p className="m-0 text-white-50">Designed by <a href="https://htmlcodex.com">HTML Codex</a>
        </p>
      </div>
    </div>
  </div>
  {/* Footer End */}
</div>

    
  )
}

export default About