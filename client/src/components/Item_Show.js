import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


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
            </TableRow>
        )
    }
}

export default Item_Show;