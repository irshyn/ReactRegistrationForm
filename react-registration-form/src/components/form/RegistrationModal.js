import React, { Component, Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import RegistrationForm from './RegistrationForm';
import { Icon } from 'react-icons-kit';
import {edit} from 'react-icons-kit/fa/edit';

class RegistrationModal extends Component {
    state = {
        modal: false
    }
    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    }
    render() {
        const isNew = this.props.isNew;
        let title = 'Edit Contestant';
        let button = '';
        if (isNew) {
            title = 'Add Contestant';
            button = <Button
                color="success"
                onClick={this.toggle}
                style={{ minWidth: "200px" }}>Add Contestant</Button>;
        } else {
            button = <Button
                color='primary'
                onClick={this.toggle}><Icon icon={edit} /></Button>;
        }
        return <Fragment>
            {button}
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
                <ModalBody>
                    <RegistrationForm
                        addUserToState={this.props.addUserToState}
                        updateUserIntoState={this.props.updateUserIntoState}
                        toggle={this.toggle}
                        user={this.props.user} />
                </ModalBody>
            </Modal>
        </Fragment>;
    }
}
export default RegistrationModal;