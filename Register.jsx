import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validation = () => {
    let error = {};
    console.log(error, "error");
    if (!user.first_name) {
      error.first_name = "Please enter a valid first name";
    }
    if (!user.last_name) {
      error.last_name = "Please enter a valid last name";
    }

    if (!user.email) {
      error.email = "Please enter a valid email";
    }

    if (!user.password) {
      error.password = "Please enter a valid password";
    }

    return error;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("first_name", user.first_name);
    formData.append("last_name", user.last_name);
    formData.append("email", user.email);
    formData.append("password", user.password);

    setError(validation());

    setUser({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    });
  };

  let name, value;
  const PostUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    if (name === "first_name") {
      if (value.length === 0) {
        setError({ ...error, first_name: "FirstName Is Empty" });
        setUser({ ...user, first_name: "" });
      } else {
        setError({ ...error, first_name: "" });
        setUser({ ...user, first_name: value });
      }
    }

    if (name === "last_name") {
      if (value.length === 0) {
        setError({ ...error, last_name: "LastName Is Empty" });
        setUser({ ...user, last_name: "" });
      } else {
        setError({ ...error, last_name: "" });
        setUser({ ...user, last_name: value });
      }
    }

    if (name === "email") {
      if (value.length === 0) {
        setError({ ...error, email: "Email Is Empty" });
        setUser({ ...user, email: "" });
      } else {
        setError({ ...error, email: "" });
        setUser({ ...user, email: value });
      }
    }

    if (name === "password") {
      if (value.length === 0) {
        setError({ ...error, password: "Please set a password" });
        setUser({ ...user, password: "" });
      } else {
        setError({ ...error, password: "" });
        setUser({ ...user, password: value });
      }
    }
  };

  console.log(value, "value");
  return (
    <div>
      {" "}
      <main id="main">
        <section className="mt-5">
          <div className="container py-4 h-100">
            <div className="row d-flex align-items-center justify-content-center h-100 mt-5">
              <div className="col-md-8 col-lg-7 col-xl-6">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  className="img-fluid"
                  alt="Phone"
                />
              </div>
              <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <form>
                  <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form1Example13">
                      First Name
                    </label>
                    <input
                      name="first_name"
                      id="form1Example13"
                      className="form-control form-control-lg"
                      onChange={PostUserData}
                      value={user.first_name}
                    />
                    <span style={{ color: "red" }}>{error.email}</span>
                  </div>

                  <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form1Example13">
                      Last name
                    </label>
                    <input
                      name="last_name"
                      id="form1Example13"
                      className="form-control form-control-lg"
                      onChange={PostUserData}
                      value={user.last_name}
                    />
                    <span style={{ color: "red" }}>{error.email}</span>
                  </div>

                  <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form1Example13">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="form1Example13"
                      value={user.email}
                      className="form-control form-control-lg"
                      onChange={PostUserData}
                    />
                    <span style={{ color: "red" }}>{error.email}</span>
                  </div>

                  <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form1Example23">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      id="form1Example23"
                      className="form-control form-control-lg"
                      onChange={PostUserData}
                    />
                    <span style={{ color: "red" }}>{error.password}</span>
                  </div>
                  {loading ? (
                    <>
                      <button
                        type="submit"
                        disabled
                        style={{
                          paddingLeft: "2.5rem",
                          paddingRight: "2.5rem",
                        }}
                        className="btn btn-success btn-lg btn-block"
                      >
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Loading...
                      </button>
                      <div className="divider d-flex align-items-center my-3">
                        <p className="text-center fw-bold mx-3 mb-0 text-muted">
                          ALREADY HAVE AN ACCOUNT?{" "}
                          <Link to="/login">
                            <b>lOGIN</b>
                          </Link>
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <button
                        type="submit"
                        className="btn btn-success btn-lg btn-block"
                        onClick={handleSubmit}
                      >
                        Login
                      </button>
                      <div className="divider d-flex align-items-center my-3">
                        <p className="text-center fw-bold mx-3 mb-0 text-muted">
                          ALREADY HAVE AN ACCOUNT?{" "}
                          <Link to="/login">
                            <b>lOGIN</b>
                          </Link>
                        </p>
                      </div>
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Register;
