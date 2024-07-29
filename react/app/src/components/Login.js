
function Login() {
    const sectionStyle = {
        
        justifyContent: 'center',
      };
    
      const jumbotronStyle = {
        
      };
    
      const textStyle = {
        color: 'hsl(217, 10%, 50.8%)',
      };
    return(
        <div>
            <section className="c-flex justify-content-center" style={sectionStyle} >
                <div className="px-4 py-5 px-md-5 text-center text-lg " style={jumbotronStyle}>
                    <div className="container ml-50">
                    <div className="row gx-lg-5 align-items-center d-flex justify-content-center">
                        

                        <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="card shandow-lg">
                            <div className="card-body py-5 px-md-5">
                            <form>
                                <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                    <input type="text" id="form3Example1" className="form-control" />
                                    <label className="form-label" htmlFor="form3Example1">First name</label>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                    <input type="text" id="form3Example2" className="form-control" />
                                    <label className="form-label" htmlFor="form3Example2">Last name</label>
                                    </div>
                                </div>
                                </div>

                                <div className="form-outline mb-4">
                                <input type="email" id="form3Example3" className="form-control" />
                                <label className="form-label" htmlFor="form3Example3">Email address</label>
                                </div>

                                <div className="form-outline mb-4">
                                <input type="password" id="form3Example4" className="form-control" />
                                <label className="form-label" htmlFor="form3Example4">Password</label>
                                </div>

                                <div className="form-check d-flex justify-content-center mb-4">
                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                                <label className="form-check-label" htmlFor="form2Example33">
                                    Subscribe to our newsletter
                                </label>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block mb-4">
                                Sign up
                                </button>

                                <div className="text-center">
                                <p>or sign up with:</p>
                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-facebook-f"></i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-google"></i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-twitter"></i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-github"></i>
                                </button>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            
        </div>
    )
}
export default Login;