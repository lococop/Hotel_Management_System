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

class CleanupAdd extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            clean_area : '',
            staff_id : '',
            clean_status :  '',
            clean_members : '',
            clean_time : '',
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
            clean_area : '',
            staff_id : '',
            clean_status :  '',
            clean_members : '',
            clean_time : '',
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
        const url = '/api/cleanups';
        const formData = new FormData();
        formData.append('clean_area', this.state.clean_area)
        formData.append('staff_id', this.state.staff_id);
        formData.append('clean_status', this.state.clean_status);
        formData.append('clean_members', this.state.clean_members);
        formData.append('clean_time', this.state.clean_time);
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
            clean_area : '',
            staff_id : '',
            clean_status :  '',
            clean_members : '',
            clean_time : '',
            open : false
        })
    }

    render(){
        const { classes } = this.props;
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                    청소구역 추가
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>구역 추가</DialogTitle>
                    <DialogContent>
                        <TextField label="청소구역" input type="text" name="clean_area" value={this.state.clean_area} onChange={this.handleValueChange}/><br/>
                        <TextField label="담당직원" input type="text" name="staff_id" value={this.state.staff_id} onChange={this.handleValueChange}/><br/>
                        <TextField label="청소상태" input type="text" name="clean_status" value={this.state.clean_status} onChange={this.handleValueChange}/><br/>
                        <TextField label="필요인원" input type="text" name="clean_members" value={this.state.clean_members} onChange={this.handleValueChange}/><br/>
                        <TextField label="청소시간" input type="text" name="clean_time" value={this.state.clean_time} onChange={this.handleValueChange}/><br/>
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

export default withStyles(styles)(CleanupAdd);