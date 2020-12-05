import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Pickup_Delete from './Pickup_Delete';


class Pickup_Show extends React.Component{
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.reserve_number}</TableCell>
                <TableCell>{this.props.staff_id}</TableCell>
                <TableCell>{this.props.arrive_time}</TableCell>
                <TableCell>{this.props.pickup_spot}</TableCell>
                <TableCell>{this.props.persons}</TableCell>
                <TableCell><Pickup_Delete stateRefresh={this.props.stateRefresh} reserve_number={this.props.reserve_number}/></TableCell>
            </TableRow>
        )
    }
}

export default Pickup_Show;