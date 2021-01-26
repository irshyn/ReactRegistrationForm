import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { USERS_API_URL } from '../../constants';
class RegistrationForm extends React.Component {
    state = {
        id: 0,
        position: 0,
        name: '',
        sports: '',
        breed: '',
        weight: 0
    }
    componentDidMount() {
        if (this.props.user) {
            const { id, position, name, sports, breed, weight } = this.props.user
            this.setState({ id, position, name, sports, breed, weight});
        }
    }
    
    onChange = e => {
        let value = e.target.type === "number" ? parseInt(e.target.value, 10) : e.target.value;
        this.setState({ [e.target.name]: value })
    }
    submitNew = e => {
        e.preventDefault();
        fetch(`${USERS_API_URL}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                sports: this.state.sports,
                breed: this.state.breed,
                weight: this.state.weight
            })
        })
            .then(res => res.json())
            .then(user => {
                this.props.addUserToState(user);
                this.props.toggle();
            })
            .catch(err => console.log(err));
    }
    submitEdit = e => {
        e.preventDefault();
        fetch(`${USERS_API_URL}/${this.state.id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.state.id,
                position: this.state.position,
                name: this.state.name,
                sports: this.state.sports,
                breed: this.state.breed,
                weight: this.state.weight
            })
        })
        .then(() => {
            this.props.toggle();
            this.props.updateUserIntoState(this.state.id);
        })
        .catch(err => console.log(err));
    }
    render() {
        return <Form autoComplete="off" onSubmit={this.props.user ? this.submitEdit : this.submitNew}>
            <FormGroup>
                <Label for="name">Name:</Label>
                <Input type="search" name="name" onChange={this.onChange} value={this.state.name === '' ? '' : this.state.name} />
            </FormGroup>
            <FormGroup>
                <Label for="sports">Sports:</Label>
                <Input type="text" name="sports" onChange={this.onChange} value={this.state.sports === null ? '' : this.state.sports} />
            </FormGroup>
            <FormGroup>
                <Label for="breed">Breed:</Label>
                <Input type="text" name="breed" onChange={this.onChange} value={this.state.breed === null ? '' : this.state.breed} />
            </FormGroup>
            <FormGroup>
                <Label for="weight">Weight:</Label>
                <Input type="number" name="weight" onChange={this.onChange} value={this.state.weight === null ? 0 : this.state.weight} />
            </FormGroup>
            <Button color="info" className="full-width">{this.props.user ? "Save" : "Add"}</Button>
        </Form>;
    }
}
export default RegistrationForm;