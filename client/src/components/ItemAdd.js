import React from 'react';
import { post } from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    hidden : {
        display : 'none'
    }
})

class ItemAdd extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            item_name : '',
            staff_id : '',
            item_area :  '',
            item_stock : '',
            item_need : '',
            item_budget : '',
            order_status : '',    
            open : false
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
                this.props.stateRefresh();
            })
        this.setState({
            item_name : '',
            staff_id : '',
            item_area :  '',
            item_stock : '',
            item_need : '',
            item_budget : '',
            order_status : '',    
            open : false
        })
    }

    handleFileChange = (e) => {
        this.setState({
            file : e.target.files[0],
            fileName : e.target.value
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addCustomer = () => {
        const url = '/api/items';
        const formData = new FormData();
        formData.append('item_name', this.state.item_name)
        formData.append('staff_id', this.state.staff_id);
        formData.append('item_area', this.state.item_area);
        formData.append('item_stock', this.state.item_stock);
        formData.append('item_need', this.state.item_need);
        formData.append('item_budget', this.state.item_budget);
        formData.append('order_status', this.state.order_status);
        const config = {
            headers : {
                'content-type' : 'multipart/form-data'
            }
        }
        return post(url, formData, config);

    }

    handleClickOpen = () => {
        this.setState({
            open : true
        });
    }

    handleClose = () => {
        this.setState({
            item_name : '',
            staff_id : '',
            item_area :  '',
            item_stock : '',
            item_need : '',
            item_budget : '',
            order_status : '',    
            open : false
        })
    }

    render(){
        const { classes } = this.props;
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                    물품 추가
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>물품 추가</DialogTitle>
                    <DialogContent>
                        <TextField label="물품명" input type="text" name="item_name" value={this.state.item_name} onChange={this.handleValueChange}/><br/>
                        <TextField label="담당직원" input type="text" name="staff_id" value={this.state.staff_id} onChange={this.handleValueChange}/><br/>
                        <TextField label="물품위치" input type="text" name="item_area" value={this.state.item_area} onChange={this.handleValueChange}/><br/>
                        <TextField label="현재개수" input type="text" name="item_stock" value={this.state.item_stock} onChange={this.handleValueChange}/><br/>
                        <TextField label="필요개수" input type="text" name="item_need" value={this.state.item_need} onChange={this.handleValueChange}/><br/>
                        <TextField label="물품예산" input type="text" name="item_budget" value={this.state.item_budget} onChange={this.handleValueChange}/><br/>
                        <TextField label="발주여부" input type="text" name="order_status" value={this.state.order_status} onChange={this.handleValueChange}/><br/>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>추가</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button> 
                    </DialogActions>
                </Dialog>

            </div>
        )
    }
}

export default withStyles(styles)(ItemAdd);