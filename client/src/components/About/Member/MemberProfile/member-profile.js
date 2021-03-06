import React, { Component } from 'react';
import memberData from './member-information.js';
import style from '../member.module.scss';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import MemberModal from './member-modal';
import styles from './member-profile.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class MemberProfile extends Component {
  constructor(props) {
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

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(item) {
    this.setState({
      show: true,
      memberName: item.name,
      memberTitle: item.title,
      memberImage: item.image,
      memberDescription: item.description
    });
  }

  render() {
    return (
      <div className={style['member-profile-main']}>
        <div className='container'>
          <div className='row justify-content-center'>
            {this.state.data.map((item, index) => {
              return (
                <div className='row' key={index}>
                  <div
                    className='col-xs'
                    key={index}
                    style={{ padding: '40px' }}
                  >
                    <img
                      key={index + 1}
                      src={item.image}
                      className={styles['member-image-outer']}
                      onClick={() => this.handleShow(item)}
                    />
                    <p key={index + 2}>{item.name}</p>
                    <p key={index + 3}>{item.title}</p>
                    {/* <MemberModal item={item} key={index} show={this.state.show} onHide={this.handleClose}/> */}
                    <Modal
                      size='lg'
                      show={this.state.show}
                      onHide={this.handleClose}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>{this.state.memberName}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Container>
                          <div className='row'>
                            <div className='col'>
                              <div style={{ fontSize: '20px' }}>
                                {this.state.memberTitle}
                              </div>
                              <div>{this.state.memberDescription}</div>
                            </div>
                            <div className='col'>
                              <img
                                src={this.state.memberImage}
                                className={styles['member-image-inner']}
                              />
                            </div>
                          </div>
                        </Container>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant='secondary' onClick={this.handleClose}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default MemberProfile;
