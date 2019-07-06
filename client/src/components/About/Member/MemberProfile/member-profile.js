import React, { Component } from 'react';
import memberData from './member-information.js';
import style from '../member.module.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class MemberProfile extends Component {
    constructor(props){
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            data: memberData,
            show: false
        };
    }

    handleClose(){this.setState({show: false})}

    handleShow(){this.setState({show: true})}

    render(){
        return(
            <div className={style['member-profile-main']}>
            <div className='container'> 
            <div className='row justify-content-center'>
                    {
                        this.state.data.map((item, index) => {
                        return(
                            <div className='col-4'>
                                <img src={item.image} style={{width: '150px'}}/>
                                <p>{item.name}</p>
                                <p>{item.title}</p>
                                <Button variant="outline-warning" onClick={this.handleShow}>
                                    Know More About Me
                                </Button>
                                <Modal show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header closeButton>
                                        <Modal.Title>Modal heading</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={this.handleClose}>
                                        Close
                                        </Button>
                                        <Button variant="primary" onClick={this.handleClose}>
                                        Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div> 
                        )
                    })}
                    </div>
            </div>
            </div>
        )
    }
} 

export default MemberProfile;