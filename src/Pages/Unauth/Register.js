import React, {useState} from "react";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import "./Register.css";
import { Link,useNavigate } from "react-router-dom";
import logo from '../../images/designlogo.png';
import { message } from "antd";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {newUserRegistration} from "./RegisterAction";
import { useDispatch, useSelector } from "react-redux";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function Register() {

  const [form, setForm] = useState({});
  const dispatch=useDispatch();
  const { isLoading, status, response } = useSelector(
    (state) => state.registration
  );
  const navigate=useNavigate();

  function handleInput(e) {
    if (e) {
      const formCopy = {
        ...form,
        [e.target.id]: e.target.value,
      };
      setForm(formCopy);
    }
  }

function validatetextboxes() {
    if(!form.firstname && !form.email && !form.mobile && !form.password ){
      toast.error('Fill the Registeration Credential and Submit', {
        position: toast.POSITION.TOP_CENTER
    });
    }
    if(!form.firstname){
      toast.warning('Please Fill your First Name !', {
        position: toast.POSITION.TOP_CENTER
    });
    }
    else if(form.firstname.length<3){
      toast.warning('Name must be greater than 3 characters!', {
        position: toast.POSITION.TOP_CENTER
    });
    }
    else if(!form.email){
      toast.warning('Please Fill your Email id !', {
        position: toast.POSITION.TOP_CENTER
    });
    }
    else if(!form.mobile){
      toast.warning('Please Fill Mobile number !', {
        position: toast.POSITION.TOP_CENTER
    });
    }
    else if(form.mobile.length>10){
      toast.error('Please fill valid Mobile number !', {
        position: toast.POSITION.TOP_CENTER
    });
    }
    else if(!form.password){
      toast.warning('Set Your Password !', {
        position: toast.POSITION.TOP_CENTER
    });
    }
    if(!form.role){
      toast.warning('Please Select your Role', {
        position: toast.POSITION.TOP_CENTER
    });
    }
    if(form.password != form.confirmpassword){
      toast.error('Password does not match with confirm password !', {
        position: toast.POSITION.TOP_CENTER
    });
    }
    if(response=="Password pattern doesn't match"){
      toast.warning('Password should contain alphabets a-z & number 0-9', {
        position: toast.POSITION.TOP_CENTER
    });
    }
    if(response=="Email id already Exist cannot sign in with the same Email id"){
      toast.warning('Email id already exists choose different Email account', {
        position: toast.POSITION.TOP_CENTER
    });
    }
    if(form.firstname.length>3 && form.lastname && form.email && form.mobile.length<11 && form.password==form.confirmpassword && form.role){
      dispatch(newUserRegistration(form));
    }    
      if(response=="User Created Successfully!!!"){
        message.success("Registered Successfully");
        setTimeout(()=>{
          navigate("/");
        },1500);
      }
  }

  return (
    <>
      <div className="Register">
        <Grid container spacing={1.5} item={true} sx={{ p: 5, justify: "Center" }}>
          <Grid
          data-aos="zoom-in"
          data-aos-duration='1500'
            sx={{ p: 2, position: "relative" }}
            className="Cardslist"
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <span>
              <img
                className="loginimage"
                src="https://www.itarian.com/images/ticketing-system-banner-img.png"
                alt="Designlogo"
              ></img>
            </span>
            <h1 className="loginlogo">Raise Your Query <span className="Titlemern">MERN</span></h1>
          </Grid>

          <Grid item={true}
            sx={{ p: 2 }}
            className="Registerform loginform Loginpage"
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <h3 className="text-start Registername">Register</h3>
            <hr></hr>

              <div className="">
                <TextField
                  required
                  id="firstname"
                  label="Firstname"
                  variant="outlined"
                  sx={{ width: "100%", display: "flex", color: "black", my:3 }}
                  value={form && form["firstname"]}
                  onChange={handleInput}
                />
                <TextField
                  required
                  id="lastname"
                  label="Lastname"
                  variant="outlined"
                  sx={{ width: "100%", display: "flex", color: "black", my:3 }}
                  value={form && form["lastname"]}
                  onChange={handleInput}
                />
                <TextField
                required
                  id="email"
                  label="Email id"
                  variant="outlined"
                  sx={{ width: "100%", display: "flex", color: "black", my:3 }}
                  value={form && form["email"]}
                  onChange={handleInput}
                />
                <div style={{margin:"1%",display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <div style={{fontSize:"18px",fontWeight:"500"}}>Select Your Role:</div>
                <select  name="role" className=" text-center"
                id="role" value={form && form["role"]} onChange={handleInput} style={{width:"100%",height:"50px"}}>
                    <option disabled selected value>--select Role--</option>
    <option value="student">Student</option>
    <option value="mentor">Mentor</option>
  </select></div>
                <TextField
                required
                  id="mobile"
                  label="Mobile No"
                  variant="outlined"
                  sx={{ width: "100%", display: "flex", color: "black", my:3 }}
                  value={form && form["mobile"]}
                  onChange={handleInput}
                />
                <TextField
                  required
                  id="password"
                  label="Password"
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  sx={{
                    display: "flex",
                    width: "100%",
                    my:3,
                  }}
                  value={form && form["password"]}
                  onChange={handleInput}
                />
                <TextField
                  required
                  id="confirmpassword"
                  label="Confirm Password"
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  sx={{
                    display: "flex",
                    width: "100%",
                    my:3,
                  }}
                  value={form && form["confirmpassword"]}
                  onChange={handleInput}
                />
                <p className="d-flex justify-content-between">
                  <p className="text-start loginbutton_register"><Link className="anchorlink" to="/">
                <span className="anchorlinkname">Log in...</span>
              </Link></p>
                <p className="text-end Registerbutton">
                  <button onClick={validatetextboxes} type="button" class="btn btn-primary Registerbutton" disabled={!form.firstname && !form.email && !form.mobile && !form.password}>{isLoading ? <div class="spinner-border text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div>:<>Register</>}</button>
                </p></p>
                <ToastContainer />
              </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}