import axios from "axios";
import Base from "./Base"
import FormError from './FormError'
import FormMessage from "./FormMessage";
import withRouter from "./withRouter";

 class AddUser extends Base {

  constructor(props) {
    super(props);
    this.state = {
      inputError: {
        error: '',
        message: '',
        firstName: '',
        lastName: '',
        loginId: '',
        password: '',
        roleId: '',
        type: ''


      },
      form: {
        firstName: '',
        lastName: '',
        loginId: '',
        roleId: '1',
        password: ''

      }
    }

    if (this.props.params.uid) {
      this.getdata();

    }

  }
  reset() {
    this.setState({
      form: {
        firstName: '',
        lastName: '',
        loginId: '',
        roleId: '',
        password: ''

      }
    })
    this.changeInputError("firstName", "");
    this.changeInputError("lastName", "");
    this.changeInputError("loginId", "");
    this.changeInputError("password", "");
    this.changeInputError("roleId", "");
  }
  getdata() {
    let id = this.props.params.uid;
    axios.get("http://api.sunilos.com:9080/ORSP10/User/get/" + id)
      .then((res) => {
        this.setState({ form: res.data.result.data });

      })
  }


  save() {
    axios.post("http://api.sunilos.com:9080/ORSP10/User/save/", this.state.form)
      .then((res) => {
        console.log(res);
        if (res.data.result.inputerror) {


          this.setState({ inputError: res.data.result.inputerror });
        }
        else {
          this.changeInputError("message", "Register successfully");
          this.changeInputError("error", "false");
          this.changeInputError("firstName", "");
          this.changeInputError("lastName", "");
          this.changeInputError("loginId", "");
          this.changeInputError("password", "");
          this.changeInputError("roleId", "");
          this.changeInputError("type", "success");
        }

      });
  }
  render() {
    return (
      <>
        {(() => {
          if (this.state.inputError.message) {
            return (
              <div>
                <FormMessage type={this.getInputError("type")} error={this.getInputError("error")} message={this.getInputError('message')} />
              </div>
            )
          }

        })()
        }
        {(() => {
          if (this.props.params.uid) {
            return (

              <h4 className="heading">Update User</h4>
            )
          }

          if (!this.props.params.uid) {
            return (

              <h4 className="heading">User Registration</h4>
            )
          }


        })()

        }

        <div className="data" >
          <form>
            <table style={{ margin: '15px' }}>

              <label>FirstName : </label>
              <p style={{ marginBottom: '0rem' }}> <input style={{ width: '308px' }} type="text" className="t1"placeholder="Enter Firstname" name="firstName" value={this.state.form.firstName} onChange={this.changeFormState} /> </p>
              <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)', height: '22px', width: '298px' }}><FormError errorName={this.getInputError('firstName')} /></div>

              <label>LastName :</label>
              <p style={{ marginBottom: '0rem' }}><input style={{ width: '308px' }} type="text" className="t1"placeholder="Enter Lastname" name="lastName" value={this.state.form.lastName} onChange={this.changeFormState} /></p>
              <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)', height: '22px', width: '298px' }}><FormError errorName={this.getInputError('lastName')} /> </div>

              <label>Email ID:</label>
              <p style={{ marginBottom: '0rem' }}><input style={{ width: '308px' }} type="text" className="t1"placeholder="Enter LoginId" name="loginId" value={this.state.form.loginId} onChange={this.changeFormState} /></p>
              <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)', height: '22px', width: '298px' }}><FormError errorName={this.getInputError('loginId')} /></div>

              <label>Password :</label>
              <p style={{ marginBottom: '0rem' }}><input style={{ width: '308px' }} type="password" className="t1"placeholder="Enter password" name="password" value={this.state.form.password} onChange={this.changeFormState} /></p>
              <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)', height: '22px', width: '298px' }}><FormError errorName={this.getInputError('password')} /> </div>

              <label>RoleId :</label>
              <p style={{ marginBottom: '0rem' }}><input style={{ width: '308px' }} type="number" className="t1"placeholder="Enter RoleId" name="roleId" value={this.state.form.roleId} onChange={this.changeFormState} /></p>
              <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)', height: '22px', width: '298px' }}><FormError errorName={this.getInputError('roleId')} /> </div>

              <br></br>

              <button type='button' style={{ marginRight: '67px', width: "84px", marginLeft: '26px' }} onClick={(event) => this.save(event)} className='B'>Add User</button>
              <button type='button' onClick={(event) => this.reset(event)} className='B'>reset</button>

            </table>
            <br></br>
          </form>

        </div>
      </>
    )
  }
}
export default withRouter(AddUser);