import React from 'react'
import { Link } from 'react-router-dom'
const BlogGrid = () => {
  return (
    <div>
        <div>
  {/* Header Start */}
  <div className="container-fluid page-header">
    <div className="container">
      <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: 400}}>
        <h3 className="display-4 text-white text-uppercase">Blog</h3>
        <div className="d-inline-flex text-white">
          <p className="m-0 text-uppercase"><a className="text-white" href>Home</a></p>
          <i className="fa fa-angle-double-right pt-1 px-3" />
          <p className="m-0 text-uppercase">Blog</p>
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
  {/* Blog Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8">
          <div className="row pb-3">
            <div className="col-md-6 mb-4 pb-2">
              <div className="blog-item">
                <div className="position-relative">
                  <img className="img-fluid w-100" src="img/blog-1.jpg" alt="" />
                  <div className="blog-date">
                    <h6 className="font-weight-bold mb-n1">01</h6>
                    <small className="text-white text-uppercase">Jan</small>
                  </div>
                </div>
                <div className="bg-white p-4">
                  <div className="d-flex mb-2">
                    <a className="text-primary text-uppercase text-decoration-none" href>Admin</a>
                    <span className="text-primary px-2">|</span>
                    <a className="text-primary text-uppercase text-decoration-none" href>Tours &amp; Travel</a>
                  </div>
                  <a className="h5 m-0 text-decoration-none" href>Dolor justo sea kasd lorem clita justo diam amet</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4 pb-2">
              <div className="blog-item">
                <div className="position-relative">
                  <img className="img-fluid w-100" src="img/blog-2.jpg" alt="" />
                  <div className="blog-date">
                    <h6 className="font-weight-bold mb-n1">01</h6>
                    <small className="text-white text-uppercase">Jan</small>
                  </div>
                </div>
                <div className="bg-white p-4">
                  <div className="d-flex mb-2">
                    <a className="text-primary text-uppercase text-decoration-none" href>Admin</a>
                    <span className="text-primary px-2">|</span>
                    <a className="text-primary text-uppercase text-decoration-none" href>Tours &amp; Travel</a>
                  </div>
                  <a className="h5 m-0 text-decoration-none" href>Dolor justo sea kasd lorem clita justo diam amet</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4 pb-2">
              <div className="blog-item">
                <div className="position-relative">
                  <img className="img-fluid w-100" src="img/blog-3.jpg" alt="" />
                  <div className="blog-date">
                    <h6 className="font-weight-bold mb-n1">01</h6>
                    <small className="text-white text-uppercase">Jan</small>
                  </div>
                </div>
                <div className="bg-white p-4">
                  <div className="d-flex mb-2">
                    <a className="text-primary text-uppercase text-decoration-none" href>Admin</a>
                    <span className="text-primary px-2">|</span>
                    <a className="text-primary text-uppercase text-decoration-none" href>Tours &amp; Travel</a>
                  </div>
                  <a className="h5 m-0 text-decoration-none" href>Dolor justo sea kasd lorem clita justo diam amet</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4 pb-2">
              <div className="blog-item">
                <div className="position-relative">
                  <img className="img-fluid w-100" src="img/blog-1.jpg" alt="" />
                  <div className="blog-date">
                    <h6 className="font-weight-bold mb-n1">01</h6>
                    <small className="text-white text-uppercase">Jan</small>
                  </div>
                </div>
                <div className="bg-white p-4">
                  <div className="d-flex mb-2">
                    <a className="text-primary text-uppercase text-decoration-none" href>Admin</a>
                    <span className="text-primary px-2">|</span>
                    <a className="text-primary text-uppercase text-decoration-none" href>Tours &amp; Travel</a>
                  </div>
                  <a className="h5 m-0 text-decoration-none" href>Dolor justo sea kasd lorem clita justo diam amet</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4 pb-2">
              <div className="blog-item">
                <div className="position-relative">
                  <img className="img-fluid w-100" src="img/blog-2.jpg" alt="" />
                  <div className="blog-date">
                    <h6 className="font-weight-bold mb-n1">01</h6>
                    <small className="text-white text-uppercase">Jan</small>
                  </div>
                </div>
                <div className="bg-white p-4">
                  <div className="d-flex mb-2">
                    <a className="text-primary text-uppercase text-decoration-none" href>Admin</a>
                    <span className="text-primary px-2">|</span>
                    <a className="text-primary text-uppercase text-decoration-none" href>Tours &amp; Travel</a>
                  </div>
                  <a className="h5 m-0 text-decoration-none" href>Dolor justo sea kasd lorem clita justo diam amet</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4 pb-2">
              <div className="blog-item">
                <div className="position-relative">
                  <img className="img-fluid w-100" src="img/blog-3.jpg" alt="" />
                  <div className="blog-date">
                    <h6 className="font-weight-bold mb-n1">01</h6>
                    <small className="text-white text-uppercase">Jan</small>
                  </div>
                </div>
                <div className="bg-white p-4">
                  <div className="d-flex mb-2">
                    <a className="text-primary text-uppercase text-decoration-none" href>Admin</a>
                    <span className="text-primary px-2">|</span>
                    <a className="text-primary text-uppercase text-decoration-none" href>Tours &amp; Travel</a>
                  </div>
                  <a className="h5 m-0 text-decoration-none" href>Dolor justo sea kasd lorem clita justo diam amet</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4 pb-2">
              <div className="blog-item">
                <div className="position-relative">
                  <img className="img-fluid w-100" src="img/blog-1.jpg" alt="" />
                  <div className="blog-date">
                    <h6 className="font-weight-bold mb-n1">01</h6>
                    <small className="text-white text-uppercase">Jan</small>
                  </div>
                </div>
                <div className="bg-white p-4">
                  <div className="d-flex mb-2">
                    <a className="text-primary text-uppercase text-decoration-none" href>Admin</a>
                    <span className="text-primary px-2">|</span>
                    <a className="text-primary text-uppercase text-decoration-none" href>Tours &amp; Travel</a>
                  </div>
                  <a className="h5 m-0 text-decoration-none" href>Dolor justo sea kasd lorem clita justo diam amet</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4 pb-2">
              <div className="blog-item">
                <div className="position-relative">
                  <img className="img-fluid w-100" src="img/blog-2.jpg" alt="" />
                  <div className="blog-date">
                    <h6 className="font-weight-bold mb-n1">01</h6>
                    <small className="text-white text-uppercase">Jan</small>
                  </div>
                </div>
                <div className="bg-white p-4">
                  <div className="d-flex mb-2">
                    <a className="text-primary text-uppercase text-decoration-none" href>Admin</a>
                    <span className="text-primary px-2">|</span>
                    <a className="text-primary text-uppercase text-decoration-none" href>Tours &amp; Travel</a>
                  </div>
                  <a className="h5 m-0 text-decoration-none" href>Dolor justo sea kasd lorem clita justo diam amet</a>
                </div>
              </div>
            </div>
            <div className="col-12">
              <nav aria-label="Page navigation">
                <ul className="pagination pagination-lg justify-content-center bg-white mb-0" style={{padding: 30}}>
                  <li className="page-item disabled">
                    <Link className="page-link" to="#" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                      <span className="sr-only">Previous</span>
                    </Link>
                  </li>
                  <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">»</span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mt-5 mt-lg-0">
          {/* Author Bio */}
          <div className="d-flex flex-column text-center bg-white mb-5 py-5 px-4">
            <img src="img/user.jpg" className="img-fluid mx-auto mb-3" style={{width: 100}} />
            <h3 className="text-primary mb-3">John Doe</h3>
            <p>Conset elitr erat vero dolor ipsum et diam, eos dolor lorem, ipsum sit no ut est  ipsum erat kasd amet elitr</p>
            <div className="d-flex justify-content-center">
              <a className="text-primary px-2" href>
                <i className="fab fa-facebook-f" />
              </a>
              <a className="text-primary px-2" href>
                <i className="fab fa-twitter" />
              </a>
              <a className="text-primary px-2" href>
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="text-primary px-2" href>
                <i className="fab fa-instagram" />
              </a>
              <a className="text-primary px-2" href>
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
          {/* Search Form */}
          <div className="mb-5">
            <div className="bg-white" style={{padding: 30}}>
              <div className="input-group">
                <input type="text" className="form-control p-4" placeholder="Keyword" />
                <div className="input-group-append">
                  <span className="input-group-text bg-primary border-primary text-white"><i className="fa fa-search" /></span>
                </div>
              </div>
            </div>
          </div>
          {/* Category List */}
          <div className="mb-5">
            <h4 className="text-uppercase mb-4" style={{letterSpacing: 5}}>Categories</h4>
            <div className="bg-white" style={{padding: 30}}>
              <ul className="list-inline m-0">
                <li className="mb-3 d-flex justify-content-between align-items-center">
                  <a className="text-dark" href="#"><i className="fa fa-angle-right text-primary mr-2" />Web
                    Design</a>
                  <span className="badge badge-primary badge-pill">150</span>
                </li>
                <li className="mb-3 d-flex justify-content-between align-items-center">
                  <a className="text-dark" href="#"><i className="fa fa-angle-right text-primary mr-2" />Web
                    Development</a>
                  <span className="badge badge-primary badge-pill">131</span>
                </li>
                <li className="mb-3 d-flex justify-content-between align-items-center">
                  <a className="text-dark" href="#"><i className="fa fa-angle-right text-primary mr-2" />Online Marketing</a>
                  <span className="badge badge-primary badge-pill">78</span>
                </li>
                <li className="mb-3 d-flex justify-content-between align-items-center">
                  <a className="text-dark" href="#"><i className="fa fa-angle-right text-primary mr-2" />Keyword Research</a>
                  <span className="badge badge-primary badge-pill">56</span>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                  <a className="text-dark" href="#"><i className="fa fa-angle-right text-primary mr-2" />Email Marketing</a>
                  <span className="badge badge-primary badge-pill">98</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Recent Post */}
          <div className="mb-5">
            <h4 className="text-uppercase mb-4" style={{letterSpacing: 5}}>Recent Post</h4>
            <a className="d-flex align-items-center text-decoration-none bg-white mb-3" href>
              <img className="img-fluid" src="img/blog-100x100.jpg" alt="" />
              <div className="pl-3">
                <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                <small>Jan 01, 2050</small>
              </div>
            </a>
            <a className="d-flex align-items-center text-decoration-none bg-white mb-3" href>
              <img className="img-fluid" src="img/blog-100x100.jpg" alt="" />
              <div className="pl-3">
                <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                <small>Jan 01, 2050</small>
              </div>
            </a>
            <a className="d-flex align-items-center text-decoration-none bg-white mb-3" href>
              <img className="img-fluid" src="img/blog-100x100.jpg" alt="" />
              <div className="pl-3">
                <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                <small>Jan 01, 2050</small>
              </div>
            </a>
          </div>
          {/* Tag Cloud */}
          <div className="mb-5">
            <h4 className="text-uppercase mb-4" style={{letterSpacing: 5}}>Tag Cloud</h4>
            <div className="d-flex flex-wrap m-n1">
              <a href className="btn btn-light m-1">Design</a>
              <a href className="btn btn-light m-1">Development</a>
              <a href className="btn btn-light m-1">Marketing</a>
              <a href className="btn btn-light m-1">SEO</a>
              <a href className="btn btn-light m-1">Writing</a>
              <a href className="btn btn-light m-1">Consulting</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Blog End */}
  {/* Footer Start */}
  <div className="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5" style={{marginTop: 90}}>
    <div className="row pt-5">
      <div className="col-lg-3 col-md-6 mb-5">
        <a href className="navbar-brand">
          <h1 className="text-primary"><span className="text-white">TRAVEL</span>ER</h1>
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

export default BlogGrid