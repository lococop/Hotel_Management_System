import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Cleanup_Delete from './Cleanup_Delete';

class Cleanup_Show extends React.Component{
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.clean_area}</TableCell>
                <TableCell>{this.props.staff_id}</TableCell>
                <TableCell>{this.props.clean_status}</TableCell>
                <TableCell>{this.props.clean_members}</TableCell>
                <TableCell>{this.props.clean_time}</TableCell>
                <TableCell><Cleanup_Delete stateRefresh={this.props.stateRefresh} clean_area={this.props.clean_area}/></TableCell>
            </TableRow>
        )
    }
}

export default Cleanup_Show;