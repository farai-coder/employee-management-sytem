import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase'; 

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong">
                <div className="card-body p-5 text-center">
                  <h1 className="mb-3 text-bold">Sign in</h1>

                  <div className="form-outline mb-4">
                    <input
                      placeholder="email"
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="off"
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      placeholder="password"
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="new-password"
                    />
                  </div>

                  <button
                    className="btn btn-primary btn-lg btn-block mb-3"
                    type="submit"
                    onClick={signIn}
                  >
                    Login
                  </button>

                  {/* ... */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;