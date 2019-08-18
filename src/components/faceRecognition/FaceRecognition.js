import React, {Component} from "react";
import AddFace from "../addFace/AddFace";
import Header from "../header/Header";
import Img from 'react-image';
import placeholder from "../invalid.png";
import './FaceRecognition.css';

class FaceRecognition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            message: ''
        };
    }

    render() {
        return (
            <div>
                <Header/>
                <AddFace/>
                <div className='face-recognition-container'>
                    <div className="row">
                        <div className="col-md-8">
                            <Img className="img-fluid"
                                 src={[`url`, placeholder]}
                            />
                        </div>
                        <div className="col-md-4">
                            <div>
                                <div>
                                    <label>Name</label>
                                    <input type="text"
                                           className="form-control"
                                           readOnly={true}
                                           value={this.state.name}/>
                                </div>
                                <div>
                                    <label>Message</label>
                                    <textarea className="form-control"
                                              readOnly={true}
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