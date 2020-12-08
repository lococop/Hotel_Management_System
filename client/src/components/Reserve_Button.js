import React from 'react';
import { put } from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

const styles = theme => ({
    hidden : {
        display : 'none'
    }
})

class Reserve_Button extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            guest_mail : '',
            guest_name : '',
            payment_info :  '',
            guest_phone_number : '',   
            open : false
        }
    }

    handleFormSubmit = (e) => {
        if(this.state.guest_mail==='' || this.state.guest_name==='' || this.state.payment_info==='' || this.state.guest_phone_number===''){
            alert("개인정보를 모두 입력해주세요.")
            e.preventDefault()
        }
        else{
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
                this.props.stateRefresh();
            })
        this.setState({
            guest_mail : '',
            guest_name : '',
            payment_info :  '',
            guest_phone_number : '', 
            open : false
        })
        alert("예약이 완료 되었습니다.")
    }
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
        const url = '/api/guests';
        const formData = new FormData();
        formData.append('guest_mail', this.state.guest_mail);
        formData.append('guest_name', this.state.guest_name);
        formData.append('payment_info', this.state.payment_info);
        formData.append('guest_phone_number', this.state.guest_phone_number);
        const config = {
            headers : {
                'content-type' : 'multipart/form-data'
            }
        }
        return put(url, formData, config);
    }

    handleClickOpen = () => {
        this.setState({
            open : true
        });
    }

    handleClose = () => {
        this.setState({
            guest_mail : '',
            guest_name : '',
            payment_info :  '',
            guest_phone_number : '',   
            open : false
        })
    }

    render(){
        const { classes } = this.props;
        return (
            <div>
                <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>
                    예약하기
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>개인정보 입력</DialogTitle>
                    <DialogContent>
                    <TextField label="고객 이메일" input type="text" name="guest_mail" value={this.state.guest_mail} onChange={this.handleValueChange}/><br/>
                    <TextField label="고객 성명" input type="text" name="guest_name" value={this.state.guest_name} onChange={this.handleValueChange}/><br/>
                    <TextField label="카드번호" input type="text" name="payment_info" value={this.state.payment_info} onChange={this.handleValueChange}/><br/>
                    <TextField label="고객 전화번호" input type="text" name="guest_phone_number" value={this.state.guest_phone_number} onChange={this.handleValueChange}/><br/>
                    </DialogContent>
                    <DialogActions>
                        <div>
                        <Link to="/reserve">
                            <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>완료</Button>
                            
                        </Link >
                        </div>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button> 
                    </DialogActions>
                </Dialog>

            </div>
        )
    }
}

export default withStyles(styles)(Reserve_Button);