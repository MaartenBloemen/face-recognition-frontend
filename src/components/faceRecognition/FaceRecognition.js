import React, {Component} from "react";
import AddFace from "../addFace/AddFace";
import Header from "../header/Header";
import Img from 'react-image';
import placeholder from "../invalid.png";
import './FaceRecognition.css';
import axios from 'axios';

class FaceRecognition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            accuracy: '',
            message: ''
        };
    }

    componentDidMount() {
        setInterval(() => this.fetchData(), 5000);
    }

    fetchData = () => {
        axios.get('http://localhost:8080/without_blink')
            .then((response) => {
                this.setState({
                    name: response.data.name,
                    message: response.data.message,
                    accuracy: response.data.precision
                })
            }, (error) => {
                console.log(error);
            });
    };


    render() {
        return (
            <div>
                <Header/>
                <AddFace/>
                <div className='face-recognition-container'>
                    <div className="row">
                        <div className="col-md-8">
                            <Img className="img-fluid"
                                 src={[`http://localhost:8080/stream`, placeholder]}
                            />
                        </div>
                        <div className="col-md-4">
                            <div>
                                <div>
                                    <label>Name</label>
                                    <input type="text"
                                           className="form-control"
                                           value={this.state.name}/>
                                </div>
                                <div>
                                    <label>Accuracy</label>
                                    <input type="text"
                                           className="form-control"
                                           value={this.state.accuracy}/>
                                </div>
                                <div>
                                    <label>Message</label>
                                    <textarea className="form-control"
                                              value={this.state.message}
                                              rows="5"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FaceRecognition;
