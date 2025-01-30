import React, { useState, useEffect } from "react";
import styles from "../../styles/SignInSignUp.module.css";

const SignInSignUp = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [showForm, setShowForm] = useState(false);

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
            <form className={styles["sign-up-form"]} onSubmit="">
              <h2 className={styles.title}>Sign up</h2>

              <div className={styles["input-field"]}>
                <i className="fas fa-user"></i>
                <input required type="text" placeholder="Email" />
              </div>
              <div className={styles["input-field"]}>
                <i className="fas fa-lock"></i>
                <input required type="password" placeholder="Password" />
              </div>
              <div className={styles["input-field"]}>
                <i className="fas fa-lock"></i>
                <input required type="password" placeholder="Confirm Password" />
              </div>

              <input type="submit" className="primary-btn m-2" value="Sign up" />

              <p className={styles["social-text"]}>Or Sign up with social platforms</p>
              <div className={styles["social-media"]}>
                {["facebook-f", "twitter", "google", "linkedin-in"].map((icon) => (
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

              <button type="button" className="text-black-500 hover:text-blue-700">
                Forgot Password?
              </button>

              <p className={styles["social-text"]}>Or Sign in with social platforms</p>
              <div className={styles["social-media"]}>
                {["facebook-f", "twitter", "google", "linkedin-in"].map((icon) => (
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
            <button className={`${styles.btn} ${styles.transparent}`} onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className={styles.image} alt="" />
        </div>
        <div className={`${styles["panel"]} ${styles["right-panel"]}`}>
          <div className={styles.content}>
            <h3>One of us?</h3>
            <p>Sign in to continue your journey.</p>
            <button className={`${styles.btn} ${styles.transparent}`} onClick={handleSignInClick}>
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
