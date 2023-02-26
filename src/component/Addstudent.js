import axios from "axios";
import Base from "./Base"
import FormError from './FormError'
import FormMessage from "./FormMessage";
import withRouter from "./withRouter";

class Addstudent extends Base {

  constructor(props) {
    super(props);
    this.state = {
      inputError: {
        error: '',
        message: '',
        firstName: '',
        lastName: '',
        email: '',
        mobileNo: '',
        collegeId: '',
        type: ''

          
      },
      form: {
        firstName: '',
        lastName: '',
        email: '',
        mobileNo: '',
        collegeId: ''
      }
    }
    if (this.props.params.sid) {
      this.getdata();
    }


  }
  reset() {
    this.setState({
      form: {
        firstName: '',
        lastName: '',
        email: '',
        mobileNo: '',
        collegeId: ''
      }
    });

    this.changeInputError("firstName", "");
    this.changeInputError("lastName", "");
    this.changeInputError("mobileNo", "");
    this.changeInputError("email", "");
    this.changeInputError("collegeId", "");
  }
  getdata() {
    let id = this.props.params.sid;
    axios.get("http://api.sunilos.com:9080/ORSP10/Student/get/" + id)
      .then((res) => {
        this.setState({ form: res.data.result.data });

      })
  }
  save() {
    axios.post("http://api.sunilos.com:9080/ORSP10/Student/save", this.state.form)
      .then((res) => {
        console.log(res);
        if (res.data.result.inputerror) {

          this.setState({ inputError: res.data.result.inputerror });
          this.changeInputError("error", "true");
        }
        else {
          this.changeInputError("message", "Data save successfully");
          this.changeInputError("error", "false");
          this.changeInputError("firstName", "ajau");
          this.changeInputError("lastName", "");
          this.changeInputError("mobileNo", "");
          this.changeInputError("email", "");
          this.changeInputError("collegeId", "");
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
          if (this.props.params.sid) {
            return (

              <h4 className="heading">Update Student</h4>
            )
          }

          if (!this.props.params.sid) {
            return (

              <h4 className="heading">Add Student </h4>
            )
          }


        })()

        }
        <div className="data" >
          <form>
            <table>

              <label>FirstName : </label>
              <p style={{ marginBottom: '0rem' }}> <input style={{ width: '308px' }} type="text" className="t1"placeholder="Enter Firstname" name="firstName" value={this.state.form.firstName} onChange={this.changeFormState} /> </p>
              <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)', height: '22px', width: '298px' }}> <FormError errorName={this.getInputError('firstName')} /></div>

              <label>LastName :</label>
              <p style={{ marginBottom: '0rem' }}><input style={{ width: '308px' }} type="text" className="t1"placeholder="Enter Lastname" name="lastName" value={this.state.form.lastName} onChange={this.changeFormState} /></p>
              <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)', height: '22px', width: '298px' }}><FormError errorName={this.getInputError('lastName')} /> </div>

              <label>emailId:</label>
              <p style={{ marginBottom: '0rem' }}><input style={{ width: '308px' }} type="text" className="t1"placeholder="Enter emailId" name="email" value={this.state.form.email} onChange={this.changeFormState} /></p>
              <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)', height: '22px', width: '298px' }}><FormError errorName={this.getInputError('email')} /></div>

              <label>MobileNo:</label>
              <p style={{ marginBottom: '0rem' }}><input style={{ width: '308px' }} type="text" className="t1"placeholder="Enter mobileNo" name="mobileNo" value={this.state.form.mobileNo} onChange={this.changeFormState} /></p>
              <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)', height: '22px', width: '298px' }}><FormError errorName={this.getInputError('mobileNo')} /> </div>

              <label>collegeId :</label>
              <p style={{ marginBottom: '0rem' }}><input style={{ width: '308px' }} type="number" className="t1"placeholder="Enter collegeId" name="collegeId" value={this.state.form.collegeId} onChange={this.changeFormState} /></p>
              <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)', height: '22px', width: '298px' }}><FormError errorName={this.getInputError('collegeId')} /> </div>

              <br></br>

              <button type='button' style={{ marginRight: '67px', width: "110px", marginLeft: '26px' }} onClick={(event) => this.save(event)} className='B'>Add Student</button>
              <button type='button' onClick={(event) => this.reset(event)} className='B'>reset</button>

            </table>
            <br></br>
          </form>

        </div>
      </>
    )
  }
}
export default withRouter(Addstudent);