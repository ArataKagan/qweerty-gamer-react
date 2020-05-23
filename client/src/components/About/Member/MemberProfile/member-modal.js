import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MemberModal = () => {
  return (
    <div>
      <Modal>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className='show-grid'>
              <Col xs={12} md={8}></Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MemberModal;
