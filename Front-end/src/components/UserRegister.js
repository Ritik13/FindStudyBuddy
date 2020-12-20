import React, { Component } from "react";
import validateReg from "../modules/validation-register"
import changeState from "../modules/toggle-register-state"

class UserRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      Errorname: false,
      Erroremail: false,
      Errorpassword: false,
      Errorphone: false,
      ErrorConfirmPass: false

    };

    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {

  }

  handleClick = (e) => {
    e.preventDefault();
    let result;
    this.setState({
      Errorname: false,
      Erroremail: false,
      Errorpassword: false,
      Errorphone: false,
      ErrorConfirmPass: false
    });
    if (this.state.password === this.state.confirmPassword) {
      result = validateReg(this.state);
      if (result.length > 0) {

        for (let k = 0; k < result.length; k++) {
          switch (result[k]) {
            case "nameError":
              this.setState({
                Errorname: true
              })
              console.log(this.state)
              break;

            case "emailError":
              this.setState({
                Erroremail: true
              })
              break;

            case "passwordError":
              this.setState({
                Errorpassword: true
              })
              break;

            case "phoneError":
              this.setState({
                Errorphone: true
              })
              break;
            default:
              break;
          }
        }

      } else {
        alert("Form Submitted");
        //reseting form 
      }
    }
    else {
      this.setState({
        ErrorConfirmPass: true
      })
    }  //checkign confirm pass 

  }

  handleChange = (e) => {
    let m = e.target;
    this.setState({
      [m.name]: m.value
    });
  }



  render() {

    return (
      <div className="container registerForm gap">
        <div className="row">
          <div className="col"></div>
          <div className="col-md-6">
            <h2> Create New Account</h2>
            <form method="post" id="addForm">
              <div >
                <label htmlFor="firstName"><i className="fas fa-user"></i>
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="group-inline form-control"
                  name="firstName"
                  onChange={this.handleChange}
                  defaultValue=""
                />
                <br />
                {
                  (this.state.Errorname === true) &&
                  <div class="alert alert-danger" role="alert">
                    Please Check your name 
                  </div>
                }
              </div>
              <i className="fas fa-envelope-square"></i> <input type="Email" placeholder="Email" className="group-inline form-control"
                name="email"
                onChange={this.handleChange} />
              {
                (this.state.Erroremail === true) &&
                <div class="alert alert-danger" role="alert">
                  Please Check your Email 
                  </div>
              }
              <div>
                <i className="fas fa-key"></i> <input
                  type="password"
                  placeholder="Password"
                  className="group-inline form-control"
                  name="password"
                  onChange={this.handleChange}

                />
                <br />
                {
                  (this.state.Errorpassword === true) &&
                  <div class="alert alert-danger" role="alert">
                    Please Check your Password properly
                  </div>
                }
              </div>


              <div>
                <i className="fas fa-key"></i> <input
                  type="password"
                  placeholder="Confirm Password"
                  className="group-inline form-control"
                  name="confirmPassword"
                  onChange={this.handleChange}

                />
                {
                  (this.state.ErrorConfirmPass === true) &&
                  <div class="alert alert-danger" role="alert">
                    Pass word didn't match
                  </div>
                }
              </div>
              <i className="fas fa-phone-alt"></i>   <input
                type="tel"
                placeholder="Phone Number"
                className="group-inline form-control"
                name="phoneNumber"
                onChange={this.handleChange}

              />
              {
                (this.state.Errorphone === true) &&
                <div class="alert alert-danger" role="alert">
                  Please Check your Phone Number properly
                  </div>
              }

              <div className="sb">
                <input type="submit" className="btn btn-primary  coolbuttonHalfWidth"
                  onClick={this.handleClick}
                />
              </div>
            </form>
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

export default UserRegister;



