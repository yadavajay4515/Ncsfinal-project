
import axios from "axios";
import Base from "./Base"
import FormError from './FormError'
import FormMessage from "./FormMessage";
import withRouter from "./withRouter";

 class AddRole extends Base {

  constructor(props) {
    super(props);
    this.state = {
      inputError: {
        error: '',
        message: '',
        name: '',
        discription: '',
        type: ''


      },
      form: {
        name: '',
        discription: ''
      }
    }
    if (this.props.params.rid) {
      this.getdata();

    }

  }
  reset() {
    this.setState({
      form: {
        name: '',
        discription: ''
      }
    });
    this.changeInputError("message", "");
    this.changeInputError("error", "");
    this.changeInputError("name", "");
    this.changeInputError("discription", "");
    this.changeInputError("type", "");
  }
  getdata() {
    let id = this.props.params.rid;
    axios.get("http://api.sunilos.com:9080/ORSP10/Role/get/" + id)
      .then((res) => {
        this.setState({ form: res.data.result.data });

      })
  }


  save() {
    axios.post("http://api.sunilos.com:9080/ORSP10/Role/save/", this.state.form)
      .then((res) => {
        console.log(res);
        if (res.data.result.inputerror) {

          this.setState({ inputError: res.data.result.inputerror });
          this.changeInputError("error", "true");
        }
        else {
          this.changeInputError("message", "Data save successfully");
          this.changeInputError("error", "false");
          this.changeInputError("name", "");
          this.changeInputError("discription", "");
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
                if (this.props.params.rid) {
                  return (

                    <h4  className="heading">Update Role</h4>
                  )
                }

                if (!this.props.params.rid) {
                  return (

                    <h4  className="heading">Add Role</h4>
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
              
              <label>Discription: </label>
              <p style={{marginBottom: '0rem'}}> <input style={{width:'308px'}} type="text" className="t1"placeholder="Enter discription" name="discription" value={this.state.form.discription} onChange={this.changeFormState} /> </p>
              <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)',height: '22px',width:'298px'  }}> <FormError errorName={this.getInputError('discription')} /></div>
          
              <br></br>
              <button type='button' style={{ marginRight: '67px',width: "110px" ,marginLeft: '26px'}} onClick={(event) => this.save(event)} className='B'>Add Role</button>
              <button type='button' onClick={(event) => this.reset(event)} className='B'>reset</button>

            </table>
            <br></br>
          </form>

        </div>

      </>
    )
  }
}
export default withRouter(AddRole);