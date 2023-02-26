import axios from "axios";
import Base from "./Base"
import { Link } from "react-router-dom";
import FormMessage from './FormMessage';
import LoadingBar from 'react-top-loading-bar'
export default class RoleList extends Base {
    constructor(props) {
        super(props);
        this.state = {
            inputError: {
                message: '',
                error: ''
            },

            name: '',
            discription: "",
            list: []
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
        axios.post("http://api.sunilos.com:9080/ORSP10/Role/search/", this.state)
            .then((res) => {
                // console.log(res);
                this.setState({ list: res.data.result.data });
                this.setProgress(100)
            });
    }
    delete(id) {
        this.setProgress(10)
        let url = "http://api.sunilos.com:9080/ORSP10/Role/delete/" + id;
        axios.get(url).then((res) => {
            this.changeInputError("message", "Data Deleted Successfully");
            this.changeInputError("error", "false");
            this.changeInputError("type", "success");
            this.setProgress(100);
            this.search();
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
                    <input name="discription" placeholder='Search by discription'
                        value={this.state.discription}
                        onChange={(event) => this.changeState(event)} /> &nbsp; &nbsp;
                    <input name="name" placeholder='Search by Name' type="text"
                        value={this.state.name}
                        onChange={this.changeState} /> &nbsp; &nbsp;
                    <button type='button' className="B" onClick={(event) => this.search(event)}>Search</button>


                </div>

                <table style={{ width: "70%", margin: "0px 200px" }} className="table table-success table-hover table-bordered border-success">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">id</th>

                            <th scope="col">Name</th>
                            <th scope="col">Discription</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.list.map((ele, i) => (
                            <tr key={i}>

                                <td>{i + 1}</td>

                                <td>{ele.name}</td>
                                <td>{ele.discription}</td>

                                <td> <button className="btn btn-primary " type="button" onClick={(event) => this.delete(ele.id)}>Delete</button> </td>
                                {/* <td><Link to={'/addrole/' + ele.id}>Edit</Link></td> */}
                                <td><button className="text-bg-warning" style={{ border: "none", borderRadius: '7px', marginLeft: '18px', padding: '5px 19px', background: '#efff00f2' }} type="button"><Link style={{ color: "black", textDecoration: "none" }} to={'/addrole/' + ele.id}>Edit</Link></button></td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </>
        )
    }
}
