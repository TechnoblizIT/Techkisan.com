import React, { useState, useEffect } from "react";
import styles from "../../styles/SignInSignUp.module.css";
import { showError, showSucess } from "../../utils/toastUtils";
import endpoints from "../endpoints/endpoints";

const SignInSignUp = () => {
  const Endpoints = new endpoints();
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = (type) => {
    if (!formData.email) {
      showError("Email is required");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      showError("Email is not valid");
      return false;
    }

    if (formData.password.length < 3) {
      showError("Password must be at least 3 characters");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      showError("Password and Confirm Password do not match");
      return false;
    }
    if (!formData.name) {
      showError("Name is required");
      return false;
    }
    if (formData.name.length < 3) {
      showError("Name must be at least 3 characters");
      return false;
    }
    return true;
  };

  const handleSignupFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const isValid = validate("signup");
    if (!isValid) return;
    const { name, email, password } = formData;
    try {
      const response = await fetch(Endpoints.SIGNUP_URI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (response.status === 200) {
        showSucess("User created successfully");
      } else if (response.status === 500) {
        showError("Internal server error");
      }
    } catch (err) {
      console.log(err);
      showError("Internal server error");
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowForm(isSignUpMode);
    }, 700);

    return () => clearTimeout(timeout);
  }, [isSignUpMode]);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  return (
    <div
      className={`${styles.container} ${
        isSignUpMode ? styles["sign-up-mode"] : ""
      }`}
    >
      <div className={styles["forms-container"]}>
        <div className={styles["signin-signup"]}>
          {showForm ? (
            <form
              className={styles["sign-up-form"]}
              onSubmit={handleSignupFormSubmit}
            >
              <h2 className={styles.title}>Sign up</h2>
              <div className={styles["input-field"]}>
                <i className="fas fa-user"></i>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                />
              </div>
              <div className={styles["input-field"]}>
                <i className="fas fa-user"></i>
                <input
                  required
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>
              <div className={styles["input-field"]}>
                <i className="fas fa-lock"></i>
                <input
                  required
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
              </div>
              <div className={styles["input-field"]}>
                <i className="fas fa-lock"></i>
                <input
                  required
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                />
              </div>

              <button
                type="submit"
                className="primary-btn m-2"
                disabled={loading}
              >
                {loading ? (
                  <span>
                    <i className="fas fa-spinner fa-spin mr-2"></i> Signing
                    up...
                  </span>
                ) : (
                  "Sign up"
                )}
              </button>

              <p className={styles["social-text"]}>
                Or Sign up with social platforms
              </p>
              <div className={styles["social-media"]}>
                {["google"].map((icon) => (
                  <a key={icon} href="#" className={styles["social-icon"]}>
                    <i className={`fab fa-${icon}`}></i>
                  </a>
                ))}
              </div>
            </form>
          ) : (
            <form className={styles["sign-in-form"]} onSubmit="">
              <h2 className={styles.title}>Sign in</h2>

              <div className={styles["input-field"]}>
                <i className="fas fa-user"></i>
                <input required type="text" placeholder="Username" />
              </div>
              <div className={styles["input-field"]}>
                <i className="fas fa-lock"></i>
                <input required type="password" placeholder="Password" />
              </div>

              <input type="submit" value="Login" className="primary-btn m-2" />

              <button
                type="button"
                className="text-black-500 hover:text-blue-700"
              >
                Forgot Password?
              </button>

              <p className={styles["social-text"]}>
                Or Sign in with social platforms
              </p>
              <div className={styles["social-media"]}>
                {["google"].map((icon) => (
                  <a key={icon} href="#" className={styles["social-icon"]}>
                    <i className={`fab fa-${icon}`}></i>
                  </a>
                ))}
              </div>
            </form>
          )}
        </div>
      </div>

      <div className={styles["panels-container"]}>
        <div className={`${styles["panel"]} ${styles["left-panel"]}`}>
          <div className={styles.content}>
            <h3>New here?</h3>
            <p>Join us today to access premium features!</p>
            <button
              className={`${styles.btn} ${styles.transparent}`}
              onClick={handleSignUpClick}
            >
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className={styles.image} alt="" />
        </div>
        <div className={`${styles["panel"]} ${styles["right-panel"]}`}>
          <div className={styles.content}>
            <h3>One of us?</h3>
            <p>Sign in to continue your journey.</p>
            <button
              className={`${styles.btn} ${styles.transparent}`}
              onClick={handleSignInClick}
            >
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className={styles.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
