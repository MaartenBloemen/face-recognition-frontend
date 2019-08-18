import React, {Component} from "react";
import {Modal} from "react-bootstrap";
import Img from 'react-image';
import placeholder from "../invalid.png";
import './AddFace.css';

class AddFace extends Component {
    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            firstName: '',
            lastName: ''
        };
    }

    handleClose() {
        this.setState({
            show: false,
            firstName: '',
            lastName: ''
        });
    }

    handleShow() {
        this.setState({show: true});
    }

    handleSubmit = () => {
        //TODO: post data to backend here
    };

    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        return (
            <div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add new face</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <label>First name</label>
                            <input type="text"
                                   className="form-control"
                                   placeholder="John"
                                   name="firstName"
                                   value={this.state.firstName}
                                   onChange={this.handleInputChange}/>
                            <small className="form-text text-muted text-right">
                                The first name of the person to add.
                            </small>
                        </div>
                        <div>
                            <label>Last name</label>
                            <input type="text"
                                   className="form-control"
                                   placeholder="Doe"
                                   name="lastName"
                                   value={this.state.lastName}
                                   onChange={this.handleInputChange}/>
                            <small className="form-text text-muted text-right">
                                The last name of the person to add.
                            </small>
                        </div>
                        <div>
                            <label>Face</label>
                            <Img className="img-fluid"
                                 src={[`url`, placeholder]}
                            />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-success"
                                onClick={this.handleSubmit}>
                            <i className="fa fa-check-circle"/> Submit
                        </button>
                        <button className="btn btn-danger"
                                onClick={this.handleClose}>
                            <i className="fa fa-times-circle"/> Close
                        </button>
                    </Modal.Footer>
                </Modal>
                <button className="btn btn-primary btn-circle btn-xl btn-add"
                        onClick={this.handleShow}>
                    <i className="fa fa-plus fa-2x"/>
                </button>
            </div>
        );
    }
}

export default AddFace;