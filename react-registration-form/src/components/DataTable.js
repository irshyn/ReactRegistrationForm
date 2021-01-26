import React, { Component } from 'react';
import { Button, Table } from 'reactstrap';
import RegistrationModal from './form/RegistrationModal';
import { USERS_API_URL } from '../constants';
import { Icon } from 'react-icons-kit';
import {remove} from 'react-icons-kit/fa/remove';

class DataTable extends Component {
  deleteItem = id => {
    let confirmDeletion = window.confirm('Do you really wish to delete it?');
    if (confirmDeletion) {
      fetch(`${USERS_API_URL}/${id}`, {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          this.props.deleteItemFromState(id);
        })
        .catch(err => console.log(err));
    }
  }
  render() {
    const items = this.props.items;
    return <Table striped>
      <thead className="thead-dark">
        <tr>
          {/* <th>Position</th> */}
          <th>Name</th>
          <th>Sports</th>
          <th>Breed</th>
          <th>Weight</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {!items || items.length <= 0 ?
          <tr>
            <td colSpan="6" align="center"><b>No Users yet</b></td>
          </tr>
          : items.map(item => (
            <tr key={item.id}>
              {/* <th scope="row">
                {item.position}
              </th> */}
              <td>
                {item.name}
              </td>
              <td>
                {item.sports}
              </td>
              <td>
                {item.breed}
              </td>
              <td>
                {item.weight} g
              </td>
              <td align="center">
                <div>
                  <RegistrationModal
                    isNew={false}
                    user={item}
                    updateUserIntoState={this.props.updateState} />
                  &nbsp;&nbsp;&nbsp;
                  <Button color='danger' onClick={() => this.deleteItem(item.id)}><Icon icon={remove} /></Button>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>;
  }
}
export default DataTable;