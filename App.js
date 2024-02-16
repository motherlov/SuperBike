import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { lazy,Suspense } from "react";



const Navbar =lazy(()=>import("./components/shareModule/Navbar/Navbar"));
const  Home =lazy(()=>import("./components/Cms/Home/Home"));
const  About =lazy(()=>import("./components/Cms/About/About"));
const  Services =lazy(()=>import("./components/Cms/Service/Services"));
const  Contact  =lazy(()=>import("./components/Cms/Contact/Contact"));
const  TourPackage =lazy(()=>import("./components/Cms/Package/TourPackage"));
const  BolgGrid  =lazy(()=>import("./components/Pages/BlogGrid.jsx"));
const  BlogDetail  =lazy(()=>import("./components/Pages/BlogDetail"));
const  Destination =lazy(()=>import("./components/Pages/Destination"));
const  TravelGuides  =lazy(()=>import("./components/Pages/TravelGuides"));
const  Testimonial  =lazy(()=>import("./components/Pages/Testimonial"));
const  Register  =lazy(()=>import("./components/Auth/Registration/Register"));
const  Login  =lazy(()=>import("./components/Auth/Login/Login"));

const  ProductUpdate  =lazy(()=>import("./components/Cms/ProductUpdate/ProductUpdate"));



 //import Navbar from "./components/shareModule/Navbar/Navbar";
// import Home from "./components/Cms/Home/Home";
// import About from "./components/Cms/About/About";
// import Services from "./components/Cms/Service/Services";
// import Contact from "./components/Cms/Contact/Contact";
// import TourPackage from "./components/Cms/Package/TourPackage";
// import BolgGrid from "./components/Pages/BlogGrid.jsx";
// import BlogDetail from "./components/Pages/BlogDetail";
// import Destination from "./components/Pages/Destination";
// import TravelGuides from "./components/Pages/TravelGuides";
// import Testimonial from "./components/Pages/Testimonial";
// import Login from "./components/Auth/Login/Login";
// import Register from "./components/Auth/Registration/Register";
// import ProductUpdate from "./components/Cms/ProductUpdate/ProductUpdate";

function App() {
  const PublicRouteNames = [
    {
      path: "/register",
      Component: <Register />,
    },
    {
      path: "/login",
      Component: <Login />,
    },
    {
      path: "/",
      Component: <Home />,
    },
  ];


  const PrivateRouteNames = [
    {
      path: "/bolgGrid",
      Component: <BolgGrid />,
    },
    {
      path:"/tourPackages",
      Component:<TourPackage />
    },
    {
      path:"/destination",
       Component:<Destination />
    },
    {
      path:"/blogDetail",
       Component:<BlogDetail />,
    },
    {
      path: "/travelGuides",
      Component: <TravelGuides />,
    },
    {
      path:"/testimonial", 
      Component:<Testimonial /> 
    },
    {
      path: "/about",
      Component: <About />,
    },
    {
      path:"/services",
      Component:  <Services/>,
    },
    {
      path:"/contact",
      Component:  <Contact/>,
    },
    {
      path:'/update/:id',
      Component: <ProductUpdate/>,
    },
  ];

  function PrivateRoute({ children }) {
    console.log(children, "children");
    const token =localStorage.getItem("token") || sessionStorage.getItem("token")
    return token !== null && token !== undefined ? (
      children
    ) : (
      <>
        <Navigate to="/" />
        {alert("Please go for login either you can't access product list")}
      </>
    );
  }
  return (
    <div className="App">
    <Suspense fallback={<>Loading ....</>}>
      <BrowserRouter>
        <Navbar />
        <Routes>
{/* <Route path='/update/:id' element={<ProductUpdate/>} /> */}

          {PublicRouteNames?.map((route, index) => {
            return (
              <Route key={index} exact path={route.path}  element={route.Component} />
            );
          })}

          {PrivateRouteNames?.map((route, index) => {
           return (
            <Route key={index} exact path={route.path} element={<PrivateRoute>{route.Component}</PrivateRoute>} />
            );
          })}
        </Routes>
      </BrowserRouter>
</Suspense> 
    </div>
  );
}

export default App;
