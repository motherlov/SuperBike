import { TextField, Button, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../../Redux/AuthSlice";
import { useForm } from "react-hook-form";
// import { image } from "../../../Redux/Helper";

const Register = () => {
  const {redirect} = useSelector((state)=>state.Auth)
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  const [password, setPassword] = useState(false);
  const { status } = useSelector((s) => s?.Auth);
  console.log(status, "status");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [img, setImg] = useState();
  // { profile_pic: ""}
 
  const onSubmit = (data) => {

    // const formData = new FormData();
    // const UpData = {
    //   first_name:data.first_name,
    //   last_name:data.last_name,
    //   email: data.email,
    //   password: data.password,
    //   formData.append("profile_pic", img)

    const formData = new FormData();
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("profile_pic", img);
    dispatch(signup(formData));


     
      // const  formData = new FormData()
      // // profile_pic:data.img,
      // formData.append(" profile_pic", img)
    // };

    // dispatch(signup(UpData));
  };
  const passwordShowing = () => {
    setPassword(!password);
  };
  const [loading, setLoading] = useState(false);
  
  const RedirectUser = () => {
    let name = localStorage.getItem("name");
    let isInLoginPage = window.location.pathname.toLowerCase() === "/register";

    if (name !== null && name !== undefined && name !== "") {
        // window.location.pathname = getPathname;
        isInLoginPage && navigate("/login");
    }
};
useEffect(()=>{
  RedirectUser()
},[redirect])

  return (
    <>
    <main id="main">
      <section className="mt-5">
        <div className="container py-4 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100 mt-5">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
<h1 style={{color:"green"}}>Registration Form</h1>
              <TextField
                  {...register("first_name", {
                    required: "first_name is required",
                    
                  })}
                  label="Enter Your First Name"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  error={errors.first_name}
                  helperText={errors.first_name && errors.first_name.message}
                />

                <TextField
                  {...register("last_name", {
                    required: "last_name is required",
                    
                  })}
                  label="Enter Your Last Name"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  error={errors.last_name}
                  helperText={errors.last_name && errors.last_name.message}
                />


                <TextField
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      message: "Invalid email format",
                    },
                  })}
                  label="Your Email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  error={errors.email}
                  helperText={errors.email && errors.email.message}
                />

                <TextField
                  {...register("password", { required: true })}
                  label="password"
                  type={password ? "text" : "password"}
                  error={!!errors.password}
                  helperText={errors.password && "Password is required"}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />

                {/* {password? }  */}
                <Link onClick={passwordShowing}>Show Password</Link>

                 <TextField input 
                  type="file"
                  {...register("profile_pic", {
                    required: "image is required",
                    
                  })}
                  label=""
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  onChange={(e) => setImg(e.target.files[0])} 
                  error={errors.profile_pic}
                  helperText={errors.profile_pic && errors.profile_pic.message}
                />    


                  {img !== "" && img !== undefined && img !== null ? (
                 <img src={URL.createObjectURL(img)}  style={{height: "100px"}}  alt="" className="upload-img"/>
                
                  ) : (
                    <>
                    {img === "" && <p>Drag or drop content here</p>}
                    </>
                  )}  

                  

                {status === "loading" ? (
                  // Display the loader while loading is in progress
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                    sx={{ marginTop: 2 }}
                  >
                  {/* <Loader /> */}
                  </Button>
                ) : (
                  // Render the link when not loading
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                    sx={{ marginTop: 2 }}
                  >
                    sign up
                  </Button>
                )}
              </form>
              <Link to="/login">Go For Login</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  </>
  );
};
export default Register;
