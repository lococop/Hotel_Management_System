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

class PickupAdd extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            reserve_number : '',
            staff_id : '',
            arrive_time :  '',
            pickup_spot : '',
            persons : '',
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
            reserve_number : '',
            staff_id : '',
            arrive_time :  '',
            pickup_spot : '',
            persons : '',
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
        const url = '/api/pickups';
        const formData = new FormData();
        formData.append('reserve_number', this.state.reserve_number)
        formData.append('staff_id', this.state.staff_id);
        formData.append('arrive_time', this.state.arrive_time);
        formData.append('pickup_spot', this.state.pickup_spot);
        formData.append('persons', this.state.persons);
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
            reserve_number : '',
            staff_id : '',
            arrive_time :  '',
            pickup_spot : '',
            persons : '',
            open : false
        })
    }

    render(){
        const { classes } = this.props;
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                    픽업 추가
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>픽업 추가</DialogTitle>
                    <DialogContent>
                        <TextField label="예약번호" input type="text" name="reserve_number" value={this.state.reserve_number} onChange={this.handleValueChange}/><br/>
                        <TextField label="담당직원" input type="text" name="staff_id" value={this.state.staff_id} onChange={this.handleValueChange}/><br/>
                        <TextField label="픽업시간" input type="text" name="arrive_time" value={this.state.arrive_time} onChange={this.handleValueChange}/><br/>
                        <TextField label="픽업장소" input type="text" name="pickup_spot" value={this.state.pickup_spot} onChange={this.handleValueChange}/><br/>
                        <TextField label="픽업인원" input type="text" name="persons" value={this.state.persons} onChange={this.handleValueChange}/><br/>
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

export default withStyles(styles)(PickupAdd);