import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Parking_Delete from './Parking_Delete';


class Parking_Show extends React.Component{
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.car_number}</TableCell>
                <TableCell>{this.props.staff_id}</TableCell>
                <TableCell>{this.props.guest_mail}</TableCell>
                <TableCell>{this.props.car_model}</TableCell>
                <TableCell>{this.props.park_in}</TableCell>
                <TableCell>{this.props.park_out}</TableCell>
                <TableCell><Parking_Delete stateRefresh={this.props.stateRefresh} car_number={this.props.car_number}/></TableCell>
            </TableRow>
        )
    }
}

export default Parking_Show;