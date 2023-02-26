import axios from 'axios';
import Base from './Base'
import FormError from './FormError';
import FormMessage from './FormMessage';
import './MyCss.css';
import withRouter from './withRouter';

class AddMarkSheet extends Base  {
    constructor(props) {
        super(props);
        this.state = {
          inputError: {
            id: '',
            rollNo: '',
            name: '',
            physics: '',
            chemistry: '',
            maths: '',
            studentId: '',
            message: '',
            error: '',
            type:''
    
          },
          form: {
            id: '',
            rollNo: '',
            name: '',
            physics: '',
            chemistry: '',
            maths: '',
            studentId: ''
    
          },
    
        }
        if (this.props.params.pid) {
          this.getdata();
    
        }
    
      }
      reset(){
        this.setState({
          form: {
            id: '',
            rollNo: '',
            name: '',
            physics: '',
            chemistry: '',
            maths: '',
            studentId: ''
    
          }
        });
        this.changeInputError("error", "");
        this.changeInputError("message", "");
        this.changeInputError("rollNo", "")
        this.changeInputError("name", "")
        this.changeInputError("physics", "")
        this.changeInputError("chemistry", "")
        this.changeInputError("maths", "")
        this.changeInputError("studentId", "")
        this.changeInputError("type", "")

      }
      getdata() {
        let id = this.props.params.pid;
        axios.get("http://api.sunilos.com:9080/ORSP10/Marksheet/get/" + id)
          .then((res) => {
            this.setState({ form: res.data.result.data });
    
          })
      }
    
      save() {
        let config={
          method:'post',
          url:'http://api.sunilos.com:9080/ORSP10/Marksheet/save',
          data:this.state.form,
          headers:{
              useragent:'Axios-deepak'
          }
        }
        axios(config)
          .then((res) => {
            console.log(res);
            if (res.data.result.inputerror) {
              this.setState({ inputError: res.data.result.inputerror });
              this.changeInputError("error", "true");
            
            } else {
              this.changeInputError("error", "false");
              this.changeInputError("message", "data saved successfully");
              this.changeInputError("rollNo", "")
              this.changeInputError("name", "")
              this.changeInputError("physics", "")
              this.changeInputError("chemistry", "")
              this.changeInputError("maths", "")
              this.changeInputError("studentId", "")
              this.changeInputError("type", "success")
    
    
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
                if (this.props.params.pid) {
                  return (

                    <h4 className="heading">Update Marksheet</h4>
                  )
                }

                if (!this.props.params.pid) {
                  return (

                    <h4 className="heading">Add Marksheet</h4>
                  )
                }


              })()

              }
             
        <div className="data" >
          <form>
            <table>
           
              <label>RollNo: </label>
              <p style={{marginBottom: '0rem'}}> <input style={{width:'308px'}} type="number" className="t1"placeholder="Enter RollNo" name="rollNo" value={this.state.form.rollNo} onChange={this.changeFormState} /> </p>
              <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)',height: '22px',width:'298px'  }}> <FormError errorName={this.getInputError('rollNo')} /></div>

              <label>Name :</label>
              <p style={{marginBottom: '0rem'}}><input style={{width:'308px'}} type="text" className="t1"placeholder="Enter name" name="name" value={this.state.form.name} onChange={this.changeFormState} /></p>
              <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)',height: '22px',width:'298px'}}><FormError errorName={this.getInputError('name')} /> </div>
              
              <label>Physics:</label>
              <p style={{marginBottom: '0rem'}}><input style={{width:'308px'}} type="number" className="t1"placeholder="Enter physics marks" name="physics" value={this.state.form.physics} onChange={this.changeFormState} /></p>
              <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)',height: '22px',width:'298px'}}><FormError errorName={this.getInputError('physics')} /></div>
              
              <label>chemistry:</label>
              <p style={{marginBottom: '0rem'}}><input style={{width:'308px'}} type="number" className="t1"placeholder="Enter chemistry marks" name="chemistry" value={this.state.form.chemistry} onChange={this.changeFormState} /></p>
              <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)',height: '22px',width:'298px' }}><FormError errorName={this.getInputError('chemistry')} /> </div>
              
              <label>Maths:</label>
              <p style={{marginBottom: '0rem'}}><input style={{width:'308px'}} type="number" className="t1"placeholder="Enter maths marks" name="maths" value={this.state.form.maths} onChange={this.changeFormState} /></p>
              <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)',height: '22px',width:'298px'}}><FormError errorName={this.getInputError('maths')} /> </div>
              <label>studentId:</label>
              <p style={{marginBottom: '0rem'}}><input style={{width:'308px'}} type="number" className="t1"placeholder="Enter studentId" name="studentId" value={this.state.form.studentId} onChange={this.changeFormState} /></p>
              <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)',height: '22px',width:'298px'}}><FormError errorName={this.getInputError('studentId')} /> </div>

              <br></br>
             
              <button type='button' style={{ marginRight: '67px',width: "110px" ,marginLeft: '26px'}} onClick={(event) => this.save(event)} className='B'>Add Student</button>
              <button type='button' onClick={(event) => this.reset(event)} className='B'>reset</button>

            </table>
            <br></br>
          </form>

        </div>

            </>
        )
    }
}
export default withRouter(AddMarkSheet);