import "./Signup.less";
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import jojoLogo from "../../Images/jojo-black.png";
import { GoogleLogin } from "react-google-login";
import { LinkContainer } from "react-router-bootstrap";
import { gapi } from "gapi-script";

const clientId =
  "124118979451-5b03pb63uv3ogjgntaimga7tc4uirqcf.apps.googleusercontent.com";

export default function Signup() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "email",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  const onSuccess = (response) => {
    console.log(response.profileObj);
  };
  const onFailure = (response) => {
    console.log(response);
  };
  return (
    <div className="signup">
      <Row className="login-row">
        <Col md={7} sm={12} className="login-modal">
          <Container className="login-modal-container">
            <LinkContainer to="/">
              <div className="center-jojo">
                <img className="jojo-logo" src={jojoLogo}></img>
                <span className="jojo-text">Jobs For You.</span>
              </div>
            </LinkContainer>

            <form className="login-form-container">
              <div className="login-form">
                <h1>Create a new account</h1>
                <p>It's quick and easy.</p>
                <GoogleLogin
                  clientId={clientId}
                  buttonText="Sign Up With Google"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={"single_host_origin"}
                  className="google-login"
                />
                <div className="separator_container">
                  <span className="separator sep1"></span>
                  or
                  <span className="separator sep2"></span>
                </div>

                <input
                  type="email"
                  placeholder="Email"
                  className="email-input"
                  required
                ></input>

                <input
                  type="password"
                  placeholder="Password"
                  className="email-input pass-input"
                  required
                ></input>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="email-input pass-input"
                  required
                ></input>
                <div className="remember_forgot_container">
                  <span className="center-rem">
                    <input
                      className="remember-checkbox"
                      type="checkbox"
                      id="remember-checkbox"
                    ></input>
                    <label htmlFor="remember-checkbox">
                      Accept
                      <LinkContainer to="/">
                        <a className="terms-cond">Terms and Conditions</a>
                      </LinkContainer>
                    </label>
                  </span>
                </div>

                <button type="submit" className="login-btn">
                  Sign Up
                </button>

                <div className="no-account-container">
                  Already have an account?
                  <LinkContainer to="/">
                    <a>Login</a>
                  </LinkContainer>
                </div>
              </div>
            </form>
          </Container>
        </Col>

        <Col md={5} sm={0} className="login-text-col">
          <Container className="login-text-container">
            <h1>Turn your dreams into careers</h1>
            <p>Kickstart your career with just a click of a button.</p>
          </Container>
        </Col>
      </Row>
    </div>
  );
}
