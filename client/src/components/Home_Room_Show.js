import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Reserve_Button from './Reserve_Button';

class Home_Room_Show extends React.Component{
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.room_number}</TableCell>
                <TableCell>{this.props.room_price}</TableCell>
                <TableCell>{this.props.room_capacity}</TableCell>
                <TableCell>{this.props.room_bed}</TableCell>
                <TableCell>{this.props.room_view}</TableCell>
                <TableCell>{this.props.room_smoking}</TableCell>
                <TableCell>{this.props.room_damaged}</TableCell>
                <TableCell><Reserve_Button stateRefresh={this.props.stateRefresh} item_name={this.props.item_name}/></TableCell>
            </TableRow>
        )
    }
}

export default Home_Room_Show;