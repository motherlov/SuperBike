import { TextField, Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { addProduct } from "../../Redux/ProductSlice";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Loader from "../Loader/Loader";
const Testimonial = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [img, setImg] = useState();

  const { status } = useSelector((s) => s?.Product);
  console.log(status, "status");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("image", img);
    dispatch(addProduct(formData));
    navigate("/");

  };

  return (
    <>
    <main id="main">
      <section className="mt-5">
        <div className="container py-4 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100 mt-5">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                src="/img/ktem.png"
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
              <h1 style={{color:"green"}}> Add New Data</h1>

                <TextField
                  {...register("title", {
                    required: "title is required",
                    
                  })}
                  label="Enter Your title"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  error={errors.title}
                  helperText={errors.title && errors.title.message}
                />


                  <TextField
                  {...register("description", {
                    required: "description is required",
                    
                  })}
                  label="Enter Your description"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  error={errors.description}
                  helperText={errors.description && errors.description.message}
                />

            
                 <TextField input 
                  type="file"
                  {...register("image", {
                    required: "image is required",
                    
                  })}
                  label=""
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  onChange={(e) => setImg(e.target.files[0])} 
                  error={errors.image}
                  helperText={errors.image && errors.image.message}
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
                  Insert Data
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
                    Insert Data
                  </Button>
                )}
              </form>
    
            </div>
          </div>
        </div>
      </section>
    </main>
  </>
  )
};

export default Testimonial;
