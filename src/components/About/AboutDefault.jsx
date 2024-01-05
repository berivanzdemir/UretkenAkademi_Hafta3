import React, { Component } from "react";
import "./AboutDefault.css";
import { useState } from "react";
import Form from "react-bootstrap/Form";


function AboutDefault() {
  const [contact, setContact] = useState(false);

  function onclick() {
    setContact((prevContact) => !prevContact);
  }

  return (
    <div className="about">
      <img
        src="https://media.licdn.com/dms/image/D4D35AQH6a2YuYCIoSw/profile-framedphoto-shrink_800_800/0/1702746162123?e=1705086000&v=beta&t=6JCIbCi_uXuTA2YjUiEzRU50T0Ya320VF4cVB_wZnfE"
        className="pic"
        alt=""
      />
      <div className="text">
        <h2>About</h2>
        <h5>
          Front-end Developer <span>Berivan Özdemir</span>
        </h5>
        <p>
          I am currently studying Management Information Systems. The area I
          particularly focus on for self-improvement is frontend technologies,
          specifically ReactJS. Through my work on ReactJS, I consistently
          enhance my skills in designing and developing user interfaces.
          Throughout this process, I am dedicated to expanding my knowledge and
          experience in the frontend domain by actively working on projects and
          keeping up with the latest technological developments.
        </p>
        <div className="data">
          {!contact && (
            <a href="#" onClick={onclick} className="hire">
              Contact
            </a>
          )}
        </div>
        {contact && (
          <div className="text">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email adresin</Form.Label>
                <Form.Control
                  className="cnt"
                  type="email"
                  placeholder="name@example.com"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Önerin</Form.Label>
                <Form.Control className="cnt" as="textarea" rows={3} />
                <button className="hire" onClick={onclick}>
                  Send
                </button>
              </Form.Group>
            </Form>
            
          </div>
          
        )}
      </div>
      
    </div>
  );
}

export default AboutDefault;
