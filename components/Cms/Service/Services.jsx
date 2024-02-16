import React from 'react'

const Services = () => {
  return (
    <div>
  {/* Topbar Start */}
  <div className="container-fluid bg-light pt-3 d-none d-lg-block">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
          <div className="d-inline-flex align-items-center">
            <p><i className="fa fa-envelope mr-2" />info@example.com</p>
            <p className="text-body px-3">|</p>
            <p><i className="fa fa-phone-alt mr-2" />+012 345 6789</p>
          </div>
        </div>
        <div className="col-lg-6 text-center text-lg-right">
          <div className="d-inline-flex align-items-center">
            <a className="text-primary px-3" href>
              <i className="fab fa-facebook-f" />
            </a>
            <a className="text-primary px-3" href>
              <i className="fab fa-twitter" />
            </a>
            <a className="text-primary px-3" href>
              <i className="fab fa-linkedin-in" />
            </a>
            <a className="text-primary px-3" href>
              <i className="fab fa-instagram" />
            </a>
            <a className="text-primary pl-3" href>
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}


  {/* Navbar Start */}

  
  {/* <div className="container-fluid position-relative nav-bar p-0">
    <div className="container-lg position-relative p-0 px-lg-3" style={{zIndex: 9}}>
      <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
        <a href className="navbar-brand">
          <h1 className="m-0 text-primary"><span className="text-dark">TRAVEL</span>ER</h1>
        </a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
          <div className="navbar-nav ml-auto py-0">
            <a href="index.html" className="nav-item nav-link">Home</a>
            <a href="about.html" className="nav-item nav-link">About</a>
            <a href="service.html" className="nav-item nav-link active">Services</a>
            <a href="package.html" className="nav-item nav-link">Tour Packages</a>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
              <div className="dropdown-menu border-0 rounded-0 m-0">
                <a href="blog.html" className="dropdown-item">Blog Grid</a>
                <a href="single.html" className="dropdown-item">Blog Detail</a>
                <a href="destination.html" className="dropdown-item">Destination</a>
                <a href="guide.html" className="dropdown-item">Travel Guides</a>
                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">Contact</a>
          </div>
        </div>
      </nav>
    </div>
  </div> */}


  {/* Navbar End */}



  {/* Header Start */}
  <div className="container-fluid page-header">
    <div className="container">
      <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: 400}}>
        <h3 className="display-4 text-white text-uppercase">Services</h3>
        <div className="d-inline-flex text-white">
          <p className="m-0 text-uppercase"><a className="text-white" href>Home</a></p>
          <i className="fa fa-angle-double-right pt-1 px-3" />
          <p className="m-0 text-uppercase">Services</p>
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




  {/* Service Start */}
  <div className="container-fluid py-5">
    <div className="container pt-5 pb-3">
      <div className="text-center mb-3 pb-3">
        <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}>Services</h6>
        <h1>supper &amp; Bike Services</h1>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="service-item bg-white text-center mb-2 py-5 px-4">
            <i className="fa fa-2x fa-route mx-auto mb-4" />
            <h5 className="mb-2">Bike Guide</h5>
            <p className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="service-item bg-white text-center mb-2 py-5 px-4">
            <i className="fa fa-2x fa-ticket-alt mx-auto mb-4" />
            <h5 className="mb-2">Ticket Booking</h5>
            <p className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="service-item bg-white text-center mb-2 py-5 px-4">
            <i className="fa fa-2x fa-hotel mx-auto mb-4" />
            <h5 className="mb-2">Bike Booking</h5>
            <p className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="service-item bg-white text-center mb-2 py-5 px-4">
            <i className="fa fa-2x fa-route mx-auto mb-4" />
            <h5 className="mb-2">Bike Guide</h5>
            <p className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="service-item bg-white text-center mb-2 py-5 px-4">
            <i className="fa fa-2x fa-ticket-alt mx-auto mb-4" />
            <h5 className="mb-2">Ticket Booking</h5>
            <p className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="service-item bg-white text-center mb-2 py-5 px-4">
            <i className="fa fa-2x fa-hotel mx-auto mb-4" />
            <h5 className="mb-2">Bike Booking</h5>
            <p className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Service End */}
  {/* Testimonial Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <div className="text-center mb-3 pb-3">
        <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}>Testimonial</h6>
        <h1>What Say Our Clients</h1>
      </div>
      <div className="owl-carousel testimonial-carousel">
        <div className="text-center pb-4">
          <img className="img-fluid mx-auto" src="img/testimonial-1.jpg" style={{width: 100, height: 100}} />
          <div className="testimonial-text bg-white p-4 mt-n5">
            <p className="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
            </p>
            <h5 className="text-truncate">Client Name</h5>
            <span>Profession</span>
          </div>
        </div>
        <div className="text-center">
          <img className="img-fluid mx-auto" src="img/testimonial-2.jpg" style={{width: 100, height: 100}} />
          <div className="testimonial-text bg-white p-4 mt-n5">
            <p className="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
            </p>
            <h5 className="text-truncate">Client Name</h5>
            <span>Profession</span>
          </div>
        </div>
        <div className="text-center">
          <img className="img-fluid mx-auto" src="img/testimonial-3.jpg" style={{width: 100, height: 100}} />
          <div className="testimonial-text bg-white p-4 mt-n5">
            <p className="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
            </p>
            <h5 className="text-truncate">Client Name</h5>
            <span>Profession</span>
          </div>
        </div>
        <div className="text-center">
          <img className="img-fluid mx-auto" src="img/testimonial-4.jpg" style={{width: 100, height: 100}} />
          <div className="testimonial-text bg-white p-4 mt-n5">
            <p className="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
            </p>
            <h5 className="text-truncate">Client Name</h5>
            <span>Profession</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
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

export default Services