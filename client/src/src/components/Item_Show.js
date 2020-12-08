import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Item_Delete from './Item_Delete';

class Item_Show extends React.Component{
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.item_name}</TableCell>
                <TableCell>{this.props.staff_id}</TableCell>
                <TableCell>{this.props.item_area}</TableCell>
                <TableCell>{this.props.item_stock}</TableCell>
                <TableCell>{this.props.item_need}</TableCell>
                <TableCell>{this.props.item_budget}</TableCell>
                <TableCell>{this.props.order_status}</TableCell>
                <TableCell><Item_Delete stateRefresh={this.props.stateRefresh} item_name={this.props.item_name}/></TableCell>
            </TableRow>
        )
    }
}

export default Item_Show;