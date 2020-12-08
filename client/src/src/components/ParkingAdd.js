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

class ParkingAdd extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            car_number : '',
            staff_id : '',
            guest_mail :  '',
            car_model : '',
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
            car_number : '',
            staff_id : '',
            guest_mail :  '',
            car_model : '',
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
        const url = '/api/parkings';
        const formData = new FormData();
        formData.append('car_number', this.state.car_number)
        formData.append('staff_id', this.state.staff_id);
        formData.append('guest_mail', this.state.guest_mail);
        formData.append('car_model', this.state.car_model);
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
            car_number : '',
            staff_id : '',
            guest_mail :  '',
            car_model : '',
            open : false
        })
    }

    render(){
        const { classes } = this.props;
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                    주차정보 추가
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>주차정보 추가</DialogTitle>
                    <DialogContent>
                        <TextField label="차량 번호" input type="text" name="car_number" value={this.state.car_number} onChange={this.handleValueChange}/><br/>
                        <TextField label="담당직원" input type="text" name="staff_id" value={this.state.staff_id} onChange={this.handleValueChange}/><br/>
                        <TextField label="소유주" input type="text" name="guest_mail" value={this.state.guest_mail} onChange={this.handleValueChange}/><br/>
                        <TextField label="차량 모델" input type="text" name="car_model" value={this.state.car_model} onChange={this.handleValueChange}/><br/>
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

export default withStyles(styles)(ParkingAdd);