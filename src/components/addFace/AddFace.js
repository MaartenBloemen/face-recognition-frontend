import React, {Component} from "react";
import {Modal} from "react-bootstrap";
import Img from 'react-image';
import placeholder from "../invalid.png";
import './AddFace.css';
import axios from 'axios';

class AddFace extends Component {
    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            name: ''
        };
    }

    handleClose() {
        this.setState({
            show: false,
            name: '',
        });
    }

    handleShow() {
        this.setState({show: true});
    }

    handleSubmit = () => {
        let data = new FormData();
        data.append('name', this.state.name);

        axios.post('http://localhost:8080/add_face', data)
            .then((response) => {
                this.handleClose();
            }, (error) => {
                console.log(error);
                this.setState({
                    name: ''
                });
            });
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
                                   name="name"
                                   value={this.state.name}
                                   onChange={this.handleInputChange}/>
                            <small className="form-text text-muted text-right">
                                The first name of the person to add.
                            </small>
                        </div>
                        <div>
                            <label>Face</label>
                            <Img className="img-fluid"
                                 src={[`http://localhost:8080/stream`, placeholder]}
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
