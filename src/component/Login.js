import axios from 'axios';
import React from 'react'
import ReactDOM from 'react-dom/client';
import Base from './Base';
import Nextpage from './Nextpage';
import LoadingBar from 'react-top-loading-bar'



export default class Login extends Base {
  constructor(props) {
    super(props);

    this.state = {
      inputError: {
        type: '',
        message: "",
        error: "",
        loginId: '',
        password: ''
      },

      form: {
        loginId: "",
        password: ""
      },

    }

  }
  state={
    progress:0,
    }
  
    setProgress=(progress)=>{
      this.setState({progress: progress})
    }
  reset() {
    this.setState({
      form: {
        loginId: "",
        password: ""
      }
    });

    this.changeInputError("error", "");
    this.changeInputError("message", "");
    this.changeInputError("type", "");
    this.changeInputError("loginId", "");
    this.changeInputError("password", "");
  }
  login() {
    this.setProgress(10);
    axios.post("http://api.sunilos.com:9080/ORSP10/Auth/login", this.state.form)
      .then((res) => {
        console.log(res)
        if (res.data.success === true) {
          alert("login successfully");          
          const root = ReactDOM.createRoot(document.getElementById('root'));
          root.render(<Nextpage userid={res.data.result.data.name} />);
          
        }
        if (res.data.result.inputerror) {
          this.setState({ inputError: res.data.result.inputerror })
        }
        else {
          this.changeInputError("error", "true");
          this.changeInputError("message", "Invalid Id or password");
          this.changeInputError("type", "danger");
          this.changeInputError("loginId", "");
          this.changeInputError("password", "");
        }
        this.setProgress(100);
       })

  }
  render() {

    return (
      <>
       <LoadingBar height={3} color='#f11946' progress={this.state.progress}/>
      <div className='login'>
        <h4 className="heading" >Login</h4>
        <div className="data" >
          <form >
            <table>
              <div style={{ color: 'rgb(255 100 114)', height: '40px', width: '240px', fontSize: '24px' }}>
                {this.state.inputError.message}
              </div>

              <label>Email ID : </label>
              <p style={{ marginBottom: '0rem' }}><input style={{ width: '320px' }} id='t1' placeholder="Enter Email ID" name="loginId" value={this.state.form.loginId} onChange={(event) => this.changeFormState(event)} />  </p>
              <div style={{ textAlign: "center", color: 'rgb(255 100 114)', height: '23px', width: '311px' }}>{this.state.inputError.loginId}  </div>

              <label>  Password :</label>
              <p style={{ marginBottom: '0rem' }}><input style={{ width: '320px' }} type="password" id='t1' placeholder="Enter Password" name="password" value={this.state.form.password} onChange={(event) => this.changeFormState(event)} r/></p>
              <div style={{ textAlign: "center", color: 'rgb(255 100 114)', height: '23px', width: '311px' }}>{this.state.inputError.password}  </div>

              <br></br>
              <button type='button' style={{ marginRight: '40px' }} className='B' onClick={(event) => this.login(event)}>Login</button>
              <button type='button' onClick={(event) => this.reset(event)} className='B'>reset</button>

            </table>
            <br></br>
          </form>

        </div>
        </div>
        <div style={{
                backgroundColor: 'black',
                color: 'white',
                textAlign: 'center',
                marginTop: '205px',
                height: '30px'
            }}>
                Copyright © ORS pvt.ltd || All right reserved
            </div>
      </>
    )
  }
}

