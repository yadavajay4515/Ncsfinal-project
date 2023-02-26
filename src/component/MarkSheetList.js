
import axios from "axios";
import { Link } from "react-router-dom";
import Base from "./Base"
import FormMessage from './FormMessage';
import LoadingBar from 'react-top-loading-bar'
export default class MarkSheetList extends Base {
    constructor(props) {
        super(props);
        this.state = {
            inputError: {
                message: '',
                error: '',
                type: ""
            },


            rollNo: '',
            name: '',
            list: [],
            length: ''
        }
        this.search();
    }

    state = {
        progress: 0,
    }

    setProgress = (progress) => {
        this.setState({ progress: progress })
    }

    search() {
        this.setProgress(10)
        axios.post("http://api.sunilos.com:9080/ORSP10/Marksheet/search", this.state)
            .then((res) => {
                // console.log(res);
                this.setState({
                    list: res.data.result.data,
                });
                this.setProgress(100)
            });
    }
    delete(id) {
        let url = "http://api.sunilos.com:9080/ORSP10/Marksheet/delete/" + id;
        this.setProgress(10)
        axios.get(url).then((res) => {
            this.changeInputError("message", "Data Deleted Successfully");
            this.changeInputError("error", "false");
            this.changeInputError("type", "success");

            this.search();
            this.setProgress(100)
        });
    }




    render() {
        return (
            <>
                <LoadingBar height={3} color='#f11946' progress={this.state.progress} />
                {(() => {
                    if (this.state.inputError.message) {
                        return (

                            <div> <FormMessage type={this.getInputError("type")} error={this.getInputError("error")} message={this.getInputError('message')} /> </div>
                        )
                    }
                })()
                }
                <div className="searchForm">
                    <input name="rollNo" placeholder='Search by RollNo'
                        value={this.state.rollNo}
                        onChange={(event) => this.changeState(event)} />&nbsp; &nbsp;


                    <input name="name" placeholder='Search by Name' type="text"
                        value={this.state.name}
                        onChange={this.changeState} /> &nbsp; &nbsp;
                    <button type='button' className='B' onClick={(event) => this.search(event)}>Search</button>
                </div>
                <table style={{ width: "70%", margin: "0px 200px" }} className="table table-success table-success table-bordered table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">RollNo</th>
                            <th scope="col">Name</th>
                            <th scope="col">physics</th>
                            <th scope="col">Chemistry</th>
                            <th scope="col">Maths</th>
                            <th scope="col">delete</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.list.map((ele, i) => (
                            <tr key={i}>

                                <td>{i + 1}</td>
                                <td>{ele.rollNo}</td>
                                <td>{ele.name}</td>
                                <td>{ele.physics}</td>
                                <td>{ele.chemistry}</td>
                                <td>{ele.maths}</td>
                                <td> <button className="btn btn-primary " type="button" onClick={(event) => this.delete(ele.id)}>Delete</button> </td>
                                {/* <td><Link to={'/addmarksheet/' + ele.id}>Edit</Link></td> */}
                                <td><button className="text-bg-warning" style={{ border: "none", borderRadius: '7px', marginLeft: '18px', padding: '5px 19px', background: '#efff00f2' }} type="button"><Link style={{ color: "black", textDecoration: "none" }} to={'/addmarksheet/' + ele.id}>Edit</Link></button></td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>

            </>
        )
    }
}
