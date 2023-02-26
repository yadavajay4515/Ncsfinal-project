import axios from 'axios';
import Base from './Base'
import FormError from './FormError';
import FormMessage from './FormMessage';
import withRouter from './withRouter';


 class CollegeDetails extends Base {
  constructor(props) {
    super(props);
    this.state = {
      inputError: {
        id: '',
        name: '',
        address: '',
        city: '',
        state: '',
        phoneNo: '',
        message: '',
        error: '',
        type:''

      },
      form: {
        id: '',
        name: '',
        phoneNo: '',
        address: '',
        city: '',
        state: '',

      },

    }
    if (this.props.params.cid) {
      this.getdata();

    }

  }
  reset(){
    this.setState({
      form: {
        id: '',
        name: '',
        phoneNo: '',
        address: '',
        city: '',
        state: '',

      },
    });
    this.changeInputError("error", "");
          this.changeInputError("message", "");
          this.changeInputError("name", "")
          this.changeInputError("phoneNo", "")
          this.changeInputError("address", "")
          this.changeInputError("city", "")
          this.changeInputError("state", "")
          this.changeInputError("type", "");
  }
  getdata() {
    let id = this.props.params.cid;
    axios.get("http://api.sunilos.com:9080/ORSP10/College/get/" + id)
      .then((res) => {
        this.setState({ form: res.data.result.data });

      })
  }

  save() {
    axios.post("http://api.sunilos.com:9080/ORSP10/College/save", this.state.form)
      .then((res) => {
      
        if (res.data.result.inputerror) {
          this.setState({ inputError: res.data.result.inputerror });
          this.changeInputError("error", "true");
        } else {
          this.changeInputError("error", "false");
          this.changeInputError("message", "data saved successfully");
          this.changeInputError("name", "")
          this.changeInputError("phoneNo", "")
          this.changeInputError("address", "")
          this.changeInputError("city", "")
          this.changeInputError("state", "")
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
                if (this.props.params.cid) {
                  return (

                    <h4 className="heading">Update college</h4>
                  )
                }

                if (!this.props.params.cid) {
                  return (

                    <h4 className="heading">Add college</h4>
                  )
                }


              })()

              }
             
        <div className="data" >
          <form>
            <table>
           

              <label>Name:</label>
              <p style={{marginBottom: '0rem'}}><input style={{width:'308px'}} type="text" className="t1"placeholder="Enter name" name="name" value={this.state.form.name} onChange={this.changeFormState} /></p>
              <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)',height: '22px',width:'298px'}}><FormError errorName={this.getInputError('name')} /> </div>
              
              <label>PhoneNo: </label>
              <p style={{marginBottom: '0rem'}}> <input style={{width:'308px'}} type="number" className="t1"placeholder="Enter PhoneNo" name="phoneNo" value={this.state.form.phoneNo} onChange={this.changeFormState} /> </p>
              <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)',height: '22px',width:'298px'  }}> <FormError errorName={this.getInputError('phoneNo')} /></div>
              
              <label>Address:</label>
              <p style={{marginBottom: '0rem'}}><input style={{width:'308px'}} type="text" className="t1"placeholder="Enter Address" name="address" value={this.state.form.address} onChange={this.changeFormState} /></p>
              <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)',height: '22px',width:'298px'}}><FormError errorName={this.getInputError('address')} /></div>
              
              <label>City:</label>
              <p style={{marginBottom: '0rem'}}><input style={{width:'308px'}} type="text" className="t1"placeholder="Enter city" name="city" value={this.state.form.city} onChange={this.changeFormState} /></p>
              <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)',height: '22px',width:'298px' }}><FormError errorName={this.getInputError('city')} /> </div>
              
              <label>State:</label>
              <p style={{marginBottom: '0rem'}}><input style={{width:'308px'}} type="text" className="t1"placeholder="Enter state" name="state" value={this.state.form.state} onChange={this.changeFormState} /></p>
              <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)',height: '22px',width:'298px'}}><FormError errorName={this.getInputError('state')} /> </div>

              <br></br>
              <button type='button' style={{ marginRight: '67px',width: "110px" ,marginLeft: '26px'}} onClick={(event) => this.save(event)} className='B'>Add college</button>
              <button type='button' onClick={(event) => this.reset(event)} className='B'>reset</button>

            </table>
            <br></br>
          </form>

        </div>
      </>
    )
  }
}
export default withRouter(CollegeDetails);
