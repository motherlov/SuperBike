import React from 'react'
import { useEffect } from 'react';
import { redirect } from 'react-router-dom'
import { profile_pic } from '../../Redux/Helper'
import { useDispatch, useSelector } from "react-redux";
import { userDetails } from '../../Redux/ProductSlice';
const BlogDetail = () => {

   const { user } = useSelector((state) => state.Product);
   const dispatch = useDispatch();
   useEffect(() => {
    dispatch(userDetails());
  }, []);
 
  console.log( user);
  return (
    <div>
      <div>
  {/* Header Start */}
  <div className="container-fluid page-header">
    <div className="container">
      <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: 400}}>
        <h3 className="display-4 text-white text-uppercase">Blog Detail</h3>
        <div className="d-inline-flex text-white">
          <p className="m-0 text-uppercase"><a className="text-white" href>Home</a></p>
          <i className="fa fa-angle-double-right pt-1 px-3" />
          <p className="m-0 text-uppercase">Blog Detail</p>
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
          {/* Blog Detail Start */}
          <div className="pb-3">
            <div className="blog-item">
              <div className="position-relative">
                <img className="img-fluid w-100" src="img/ktem.png" alt />
                <div className="blog-date">
                  <h6 className="font-weight-bold mb-n1">01</h6>
                  <small className="text-white text-uppercase">Jan</small>
                </div>
              </div>
            </div>
            <div className="bg-white mb-3" style={{padding: 30}}>
              <div className="d-flex mb-3">
                <a className="text-primary text-uppercase text-decoration-none" href>Admin</a>
                <span className="text-primary px-2">|</span>
                <a className="text-primary text-uppercase text-decoration-none" href>Super &amp; Bike</a>
              </div>
              <h2 className="mb-3">Dolor justo sea kasd lorem clita justo diam amet</h2>
              <p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut
                magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet
                amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at
                sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et
                aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren
                sit stet no diam kasd vero.</p>
              <p>Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores
                vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit
                nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore
                ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et,
                clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat
                justo dolore sit invidunt.</p>
              <h4 className="mb-3">Est dolor lorem et ea</h4>
              <img className="img-fluid w-50 float-left mr-4 mb-2" src="img/bike.jpeg" />
              <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
                invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam
                lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
                rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor
                sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at
                lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at
                sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam
                dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna
                sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et
                duo tempor sea kasd clita ipsum et.</p>
              <h5 className="mb-3">Est dolor lorem et ea</h5>
              <img className="img-fluid w-50 float-right ml-4 mb-2" src="img/kawasaki.jpg" />
              <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
                invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam
                lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
                rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor
                sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at
                lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at
                sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam
                dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna
                sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et
                duo tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat
                aliquyam et ut.</p>
            </div>
          </div>
          {/* Blog Detail End */}
          {/* Comment List Start */}
          <div className="bg-white" style={{padding: 30, marginBottom: 30}}>
            <h4 className="text-uppercase mb-4" style={{letterSpacing: 5}}>3 Comments</h4>
            <div className="media mb-4">
<img  src={user?.profile_pic? profile_pic(user?.profile_pic):"https://http://cnd.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png"} alt="Image" className="img-fluid mr-3 mt-1" style={{width: 45}} />              <div className="media-body">
                <h6><a href>{user.first_name}  {user.last_name}</a> <small><i>01 Jan 2023</i></small></h6>
                <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                  accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.
                  Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor
                  consetetur at sit.</p>
                <button className="btn btn-sm btn-outline-primary">Reply</button>
              </div>
            </div>
            <div className="media">
        <img  src={user?.profile_pic? profile_pic(user?.profile_pic):"https://http://cnd.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png"} alt="Image" className="img-fluid mr-3 mt-1" style={{width: 45}} />
              <div className="media-body">
                <h6><a href>{user.first_name}  {user.last_name}</a> <small><i>01 Jan 2023</i></small></h6>
                <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                  accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.
                  Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor
                  consetetur at sit.</p>
                <button className="btn btn-sm btn-outline-primary">Reply</button>
                <div className="media mt-4">
                  <img  src={user?.profile_pic? profile_pic(user?.profile_pic):"https://http://cnd.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png"} alt="Image" className="img-fluid mr-3 mt-1" style={{width: 45}} />
                  <div className="media-body">
                    <h6><a href>{user.first_name}  {user.last_name}</a> <small><i>01 Jan 2023</i></small></h6>
                    <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor
                      labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed
                      eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet
                      ipsum diam tempor consetetur at sit.</p>
                    <button className="btn btn-sm btn-outline-primary">Reply</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Comment List End */}
          {/* Comment Form Start */}
          <div className="bg-white mb-3" style={{padding: 30}}>
            <h4 className="text-uppercase mb-4" style={{letterSpacing: 5}}>Leave a comment</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="website">Website</label>
                <input type="url" className="form-control" id="website" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" cols={30} rows={5} className="form-control" defaultValue={""} />
              </div>
              <div className="form-group mb-0">
                <input type="submit" defaultValue="Leave a comment" className="btn btn-primary font-weight-semi-bold py-2 px-3" />
              </div>
            </form>
          </div>
          {/* Comment Form End */}
        </div>
        <div className="col-lg-4 mt-5 mt-lg-0">
          {/* Author Bio */}









         

          <div className="d-flex flex-column text-center bg-white mb-5 py-5 px-4">
            <img  src={user?.profile_pic? profile_pic(user?.profile_pic):"https://http://cnd.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png"} className="img-fluid mx-auto mb-3" style={{width: 100, borderRadius: "50%"}} />
            {/*  src={user?.profile_pic? profile_pic(user?.profile_pic):"https://http://cnd.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png"}  */}
            <h3 className="text-primary mb-3">{user.first_name} {user.last_name}</h3>
         
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
                  <a className="text-dark" href="#"><i className="fa fa-angle-right text-primary mr-2" />Bike
                    Design</a>
                  <span className="badge badge-primary badge-pill">150</span>
                </li>
                <li className="mb-3 d-flex justify-content-between align-items-center">
                  <a className="text-dark" href="#"><i className="fa fa-angle-right text-primary mr-2" />Bike
                    Development</a>
                  <span className="badge badge-primary badge-pill">131</span>
                </li>
                <li className="mb-3 d-flex justify-content-between align-items-center">
                  <a className="text-dark" href="#"><i className="fa fa-angle-right text-primary mr-2" />Online Marketing Bike</a>
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
              <img className="img-fluid" src="img/kawasaki.jpg" alt />
              <div className="pl-3">
                <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                <small>Jan 01, 2050</small>
              </div>
            </a>
            <a className="d-flex align-items-center text-decoration-none bg-white mb-3" href>
              <img className="img-fluid" src="img/ktem.png" alt />
              <div className="pl-3">
                <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                <small>Jan 01, 2050</small>
              </div>
            </a>
            <a className="d-flex align-items-center text-decoration-none bg-white mb-3" href>
              <img className="img-fluid" src="img/bike.jpeg" alt />
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
          <h1 className="text-primary"><span className="text-white">Super</span>Bike</h1>
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

export default BlogDetail