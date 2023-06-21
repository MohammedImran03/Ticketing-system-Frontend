import React, { useEffect, useState } from "react";
import './Login.css';
import {  Button, Form, Input  } from 'antd';
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
export default function Forgetpasswordpage() {
    const onFinish = (values) => {
        if(values.email.length >0){
        console.log(values);
          }
      };
    return (
      <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light"><p className="Title"><h1 data-aos="slide-down" 
                  data-aos-duration="2000">Query Ticketing System</h1></p></nav>
<div className="loginscreen">       
<div class="jumbotron1 p-3">
  <h6 class="display-6 text-start">Reset Password</h6>
  <hr></hr>
              <div className="textfields">

  <Form
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
  >
    <Form.Item
      label="Email id"
      name="email"
      rules={[
        {
          required: true,
          type: "email",
          message: 'Please Enter a valid Email id!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
    >
      <Button type="primary" htmlType="submit">
        Send OTP
      </Button>
    </Form.Item>
  </Form>
              </div>
              {/* <p className="d-flex justify-content-between mb-0">
              <p className="text-start">
              <Link className="anchorlink" to="/forget-password">
                <span className="anchorlinkname">Forget Password ?</span>
              </Link></p> <p className="text-start">
              <Link className="anchorlink" to="/signup">
                <span className="anchorlinkname">Sign up</span>
              </Link></p> </p> */}
</div>

      </div>
     
{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Reset-Password</h5>
        <span type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" className="closebuttonx">X</span>
        </span>
      </div>
      <div class="modal-body">
        We have sent an OTP message to your Email id
      </div>
    </div>
  </div>
</div>  */}
        </>
    );
}
