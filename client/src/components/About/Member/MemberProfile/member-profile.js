import React, { Component } from 'react';
import memberData from './member-information.js';
import style from '../member.module.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
// import MemberModal from './member-modal';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



class MemberProfile extends Component {
    constructor(props){
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            data: memberData,
            show: false,
            memberName: null,
            memberTitle: null,
            memberImage: null,
            memberDescription: null
        };
    }

    handleClose(){this.setState({show: false})}

    handleShow(item){
        console.log('inside handleShow: ', item);
        this.setState({
            show: true,
            memberName: item.name,
            memberTitle: item.title,
            memberImage: item.image,
            memberDescription: item.description
        });
    }

    render(){
        return(
            <div className={style['member-profile-main']}>
            <div className='container'> 
            <div className='row justify-content-center'>
                    {
                        this.state.data.map((item, index) => {
                        return(
                            <div className='col-4' key={index}>
                                <img src={item.image} style={{width: '150px'}}/>
                                <p>{item.name}</p>
                                <p>{item.title}</p>
                                <Button variant="outline-warning" onClick={() => this.handleShow(item)}>
                                    Know More About Me
                                </Button>
                                {/* <MemberModal item={item} key={index} show={this.state.show} onHide={this.handleClose}/> */}
                                <Modal size='lg' show={this.state.show} onHide={this.handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>
                                            {this.state.memberName}
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Container>
                                            <Row className="show-grid">
                                                <Col xs={12} md={8}>
                                                    {this.state.memberTitle}
                                                </Col>
                                                <Col xs={12} md={8}>
                                                    {this.state.memberDescription}
                                                </Col>
                                                <Col xs={12} md={8}>
                                                    <img src={this.state.memberImage} style={{width: '150px'}} />
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={this.handleClose}>
                                        Close
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