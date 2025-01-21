import React, { useState } from "react";
import styles from "../../styles/SignInSignUp.module.css";

const SignInSignUp = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

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
          {!isSignUpMode ? (
            <form
              className={`${styles["sign-in-form"]} ${
                !isSignUpMode ? styles["active"] : ""
              }`}
              onSubmit=""
            >
              <h2 className={styles.title}>Sign in</h2>

              <div className={styles["input-field"]}>
                <i className="fas fa-user"></i>

                <input
                  required
                  type="text"
                  placeholder="Username"
                  value=""
                  onChange=""
                />
              </div>
              <div className={styles["input-field"]}>
                <i className="fas fa-lock"></i>
                <input
                  required
                  type="password"
                  placeholder="Password"
                  value=""
                  onChange=""
                />
              </div>
                <input
                  type="submit"
                  value="Login"
                  className="primary-btn m-2"
                />

              <button
                type="button"
                className="text-black-500 cursor-pointer transition duration-300 ease-in-out hover:text-blue-700 hover:glow hover:shadow-blue-500/50"
                onClick=""
              >
                Forgot Password ?
              </button>

              <p className={styles["social-text"]}>
                Or Sign in with social platforms
              </p>
              <div className={styles["social-media"]}>
                {['facebook-f', 'twitter', 'google', 'linkedin-in'].map((icon) => (
                  <a key={icon} href="#" className={styles["social-icon"]}>
                    <i className={`fab fa-${icon}`}></i>
                  </a>
                ))}
              </div>
            </form>
          ) : (
            <form
              className={`${styles["sign-up-form"]} ${
                isSignUpMode ? styles["active"] : ""
              }`}
              onSubmit=""
            >
              <h2 className={styles.title}>Sign up</h2>

              <div className={styles["input-field"]}>
                <i className="fas fa-user"></i>
                <input
                  required
                  type="text"
                  placeholder="Email"
                  value=""
                  onChange=""
                />
              </div>
              <div className={styles["input-field"]}>
                <i className="fas fa-lock"></i>
                <input
                  required
                  type="password"
                  placeholder="Password"
                  value=""
                  onChange=""
                />
              </div>
              <div className={styles["input-field"]}>
                <i className="fas fa-lock"></i>
                <input
                  required
                  type="password"
                  placeholder="Confirm Password"
                  value=""
                  onChange=""
                />
              </div>

                <input type="submit" className="primary-btn m-2" value="Sign up" />
           
              <p className={styles["social-text"]}>
                Or Sign up with social platforms
              </p>
              <div className={styles["social-media"]}>
                {['facebook-f', 'twitter', 'google', 'linkedin-in'].map((icon) => (
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
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
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
