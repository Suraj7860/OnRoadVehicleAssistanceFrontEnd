import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import * as actionCreators from '../actions/actions'
import * as actionValidate from '../actions/ValidateUser'
import AdminRouter from './AdminRouter';
import MechanicRegister from './MechanicRegister'
import MechanicRouting from './MechanicRouting';
import UserRouting from './UserRouting';
import '../style/home.css'
import UserRegister from './UserRegister'


class MainLogin extends Component {

  constructor(props) {
    super(props)


    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    console.log("token is", token);
    console.log("role is", role);
    var loggedIn = true
    var uRole = ''

    if (token === null) {
      loggedIn = false
    }
    if (role !== null) {
      uRole = role
    }

    this.setState({
      loggedIn: loggedIn,
      role: uRole
    })




    this.state = {
      userRole: "",
      email: "",
      password: "",
      renderPage: "MAIN_LOGIN",
      roleErr: '',
      usernameErr: '',
      passwordErr: '',
      loggedIn,
      role
    }
  }

  eventHandler = (e) => {

    this.setState({
      [e.target.name]: e.target.value
    })

  }


  parentSelected = () => {
    var admin = document.getElementById("admin");
    var mechanic = document.getElementById("mechanic");
    var user = document.getElementById("user");
    var element = document.getElementById("registerLink");

    if (admin.checked) {
      element.classList.remove("d-block");
      this.setState({
        userRole: "admin"
      })
    }
    if (mechanic.checked) {
      element.classList.add("d-block");
      this.setState({
        userRole: "mechanic"
      })
    }
    if (user.checked) {
      element.classList.add("d-block");
      this.setState({
        userRole: "user"
      })
    }
  };


  userLogin = (e) => {
    e.preventDefault()
    let User = {
      email: this.state.email,
      password: this.state.password,
      userRole: this.state.userRole
    }

    console.log("in userLogin")
    this.props.onValidateUser(User)
  };


  renderRegister = () => {
    if (this.state.userRole === "mechanic") {
      this.setState({
        renderPage: "MECHANIC_REGISTER"
      })
    }
    else if (this.state.userRole === "user") {
      this.setState({
        renderPage: "USER_REGISTER"
      })
    }
  }

  render() {

    console.log("this.props.status ", this.props.status)
    console.log("this.state.loggedIn ", this.state.loggedIn)
    console.log("this.state.userRole ", this.state.userRole)
    console.log("this.state.role ", this.state.role)

    if ((this.props.status === 200 || this.state.loggedIn === true) && (this.state.userRole === 'admin' || this.state.role === 'admin')) {
      localStorage.setItem("token", "khfhdskhfkjsdhfkhdfsdjfhsd");
      localStorage.setItem("role", 'admin');
      return <Redirect to="/admin" />
    }
    else if ((this.props.status === 200 || this.state.loggedIn === true) && (this.state.userRole === 'mechanic' || this.state.role === 'mechanic')) {
      localStorage.setItem("token", "khfhdskhfkjsdhfkhdfsdjfhsd");
      localStorage.setItem("role", 'mechanic');
      return <Redirect to="/mechanic" />

    }
    else if ((this.props.status === 200 || this.state.loggedIn === true) && (this.state.userRole === 'user' || this.state.role === 'user')) {
      localStorage.setItem("token", "khfhdskhfkjsdhfkhdfsdjfhsd");
      localStorage.setItem("role", 'user');
      return <Redirect to="/user" />

    }




    const renderComponent = this.state.renderPage;
    if (renderComponent === "MAIN_LOGIN") {
      return (
        <>
          <div className="mt-5 text-body font-weight-bold">
            <h1>On Road Vehicle Breakdown Assistance</h1>
          </div>
          <div class="container mt-5 px-3 py-3 border border-dark rounded form-group required main-login text-dark main-login">
            <div class="row">
              <div class="col">
                <h2>Login Page </h2>
                <br></br>
                <form>
                  <div class="mb-3 row">
                    <label for="username" class="col-sm-5 col-form-label mr-3   control-label">
                      Select Role
                      </label>
                    <div class="col-sm-4 ">
                      <div
                        class="col d-flex bd-highlight mb-3 justify-content-between"
                        id="role" onChange={this.parentSelected}
                      >
                        <div class="form-check p-2 bd-highlight">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="userRole"
                            id="admin"
                            value="admin"
                            ref={this.userRole}
                          style={{ position: 'absolute',marginTop:'2.3rem',marginLeft:'-4.25rem'}}></input>
                          <label class="form-check-label" for="admin">
                            Admin
                            </label>
                        </div>

                        <div class="form-check p-2 bd-highlight">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="userRole"
                            id="mechanic"
                            value="mechanic"
                            ref={this.userRole}
                          // onChange={this.parentSelected}
                          style={{ position: 'absolute',marginTop:'2.3rem',marginLeft:'-4.25rem'}}></input>
                          <label class="form-check-label" for="mechanic">
                            Mechanic
                            </label>
                        </div>

                        <div class="form-check p-2 bd-highlight">
                          <input 
                              class="form-check-input"
                              type="radio"
                              name="userRole"
                              id="user"
                              value="user"
                              ref={this.userRole}
                              // onChange={this.parentSelected}
                              style={{ position: 'absolute',marginTop:'2.3rem',marginLeft:'-4.25rem'}}></input>
                        <label class="form-check-label" for="parent">
                          User
                            </label>
                      </div>
                    </div>
                    {/* <div className="font-size-small text-danger">{this.state.roleErr}</div> */}
                  </div>
                    </div>

                <div class="mb-3 row">
                  <label for="email" class="col-sm-5 col-form-label control-label">
                    Enter Username
                      </label>
                  <div class="col-sm-6 ">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      name="email"
                      id="adminUsername"
                      placeholder="Enter Email Id"
                      onChange={this.eventHandler}
                    /><br></br>
                    {/* <div className="font-size-small text-danger">{this.state.usernameErr}</div> */}
                  </div>
                </div>

                <div class="mb-3 row">
                  <label for="password" class="col-sm-5 col-form-label control-label">
                    Enter Password
                      </label>
                  <div class="col-sm-6">
                    <input
                      type="password"
                      class="form-control form-control-sm"
                      name="password"
                      placeholder="Enter the Password"
                      //   pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      id="adminPassword"
                      onChange={this.eventHandler}
                    /><br></br>
                    {/* <div className="font-size-small text-danger">{this.state.passwordErr}</div> */}
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col">
                    <button
                      class="btn btn-primary btn-sm"
                      onClick={this.userLogin}
                    >
                      Login
                        </button>
                  </div>
                </div>
                  </form>

              <div class="row mt-3 d-none" id="registerLink">
                <div class="col">
                  {/* <h5>or <a href={<MechanicRegister />} class="link-primary">Registration</a></h5> */}
                  <h6 onClick={this.renderRegister} style={{ color: 'ButtonFace', fontSize: '25px', textDecoration: 'underline' }}>
                    Don't have an account?
                      </h6>
                </div>
              </div>
            </div>
          </div>
          <div className={"alert"} role="alert">
            {
              this.props.status === 200 ?
                (this.state.userRole === 'admin' ? this.setState({ renderPage: "ADMIN_ROUTING" }) :
                  (this.state.userRole === 'mechanic' ? this.setState({ renderPage: "MECHANIC_ROUTING" }) :
                    (this.state.userRole === 'user' ? this.setState({ renderPage: "USER_ROUTING" }) : <div></div>))) : <div></div>
            }
            {
              this.props.status === 404 && <div>Login failed</div>
            }
          </div>

        </div>
              
                  </>
        )
    }
    else if (this.state.renderPage === 'MECHANIC_REGISTER') {
      return (
        <div>
          <MechanicRegister />
        </div>);
    }
    else if (this.state.renderPage === "USER_REGISTER") {
      return (
        <div>
          <UserRegister />
        </div>);

    }
    else if (this.state.renderPage === 'ADMIN_ROUTING') {
      return (
        <div>
          <AdminRouter />
        </div>);
    }
    else if (this.state.renderPage === 'MECHANIC_ROUTING') {
      return (
        <div>
          <MechanicRouting />
        </div>);
    }
    else if (this.state.renderPage === 'USER_ROUTING') {
      return (
        <div>
          <UserRouting />
        </div>);
    }
    else {
      return <div>{this.state.renderPage}</div>;
    }
  }
}
const mapStateToProps = (state) => {
  console.log("Admin: " + state.returnedMessage, state.status)
  return {
    returnedMessage: state.returnedMessage,
    status: state.status

  }


}

const mapDispatchToProps = (dispatch) => {
  return {
    onValidateUser: (User) => {
      console.log("in on validate user")
      dispatch(actionValidate.validateUser(User))
    }


  }
}


export default connect(mapStateToProps, mapDispatchToProps)((MainLogin))
