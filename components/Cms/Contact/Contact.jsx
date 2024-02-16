import React from 'react'

const Contact = () => {
  return (
    <div>
        <div>
  {/* Header Start */}
  <div className="container-fluid page-header">
    <div className="container">
      <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: 400}}>
        <h3 className="display-4 text-white text-uppercase">Contact</h3>
        <div className="d-inline-flex text-white">
          <p className="m-0 text-uppercase"><a className="text-white" href>Home</a></p>
          <i className="fa fa-angle-double-right pt-1 px-3" />
          <p className="m-0 text-uppercase">Contact</p>
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
  {/* Contact Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <div className="text-center mb-3 pb-3">
        <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}>Contact</h6>
        <h1>Contact For Any Query</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="contact-form bg-white" style={{padding: 30}}>
            <div id="success" />
            <form name="sentMessage" id="contactForm" noValidate="novalidate">
              <div className="form-row">
                <div className="control-group col-sm-6">
                  <input type="text" className="form-control p-4" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group col-sm-6">
                  <input type="email" className="form-control p-4" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                  <p className="help-block text-danger" />
                </div>
              </div>
              <div className="control-group">
                <input type="text" className="form-control p-4" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                <p className="help-block text-danger" />
              </div>
              <div className="control-group">
                <textarea className="form-control py-3 px-4" rows={5} id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message" defaultValue={""} />
                <p className="help-block text-danger" />
              </div>
              <div className="text-center">
                <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
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



    </div>
  )
}

export default Contact