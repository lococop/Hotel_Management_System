import React from 'react';
import { put } from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { DateRangePicker } from 'react-dates';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home_Room from './Home_Room';


const styles = theme => ({
    hidden : {
        display : 'none'
    },
    root : {
        width : '92%',
        flexGrow: 1,
        minWidth : 1080
    },
      menu : {
        width : '8%',
        marginTop : 15,
        marginBottom : 15,
        display : 'flex',
        justifyContent : 'center'
    },
    
})

const styles1 = {
    marginLeft: 500,
}

class R_Button extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            guest_mail : '',
            guest_name : '',
            payment_info :  '',
            guest_phone_number : '',
            guest_mail_R : '',
            room_number : '',
            number_of_members : 1,
            startDate: null,
            endDate: null,
            open : false,
            open1 : false,
        }
    }

    handleFormSubmit = (e) => {
        if(this.state.guest_mail==='' || this.state.guest_name==='' || this.state.payment_info==='' || this.state.guest_phone_number===''){
            alert("개인정보를 모두 입력해주세요.")
        }
        else{
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
            })
        this.setState({
            guest_mail_R : this.state.guest_mail,
            guest_mail : '',
            guest_name : '',
            payment_info :  '',
            guest_phone_number : '',
            open : false,
            open1 : false,
        })
    }
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

    handleFormSubmit1 = (e) => {
        if(this.state.room_number==='' || this.state.number_of_members==='' || this.state.startDate===null || this.state.endDate===null){
            alert("예약정보를 모두 입력해주세요.");
        }
        else{
        e.preventDefault()
        this.addCustomer1()
            .then((response) => {
                console.log(response.data);
            })
        this.setState({
            guest_mail_R : '',
            room_number : '',
            number_of_members : 1,
            startDate: null,
            endDate: null,
            open : false,
            open1 : false,
        })
    }
    }

    addCustomer1 = () => {
        const url = '/api/reservations';
        const formData = new FormData();
        formData.append('guest_mail_R', this.state.guest_mail_R);
        formData.append('room_number', this.state.room_number);
        formData.append('number_of_members', this.state.number_of_members);
        formData.append('startDate', this.state.startDate.format('YYYY-MM-DD'));
        formData.append('endDate', this.state.endDate.format('YYYY-MM-DD'));
        const config = {
            headers : {
                'content-type' : 'multipart/form-data'
            }
        }
        return put(url, formData, config);

    }


    handleSetnumber = () => {
        this.setState({
            number_of_members : this.state.number_of_members,
            open : false,
        })
    }

    handleIncrease = () => {
        if(this.state.number_of_members + 1 <= 10){
        this.setState({
            number_of_members: this.state.number_of_members +1
          });
        }
    };

    handleDecrease = () => {
        if(this.state.number_of_members - 1 > 0){
        this.setState({
            number_of_members: this.state.number_of_members -1
          });
        }
    };

    handleClickOpen = () => {
        this.setState({
            open: true
        })
      }

    handleClickClose = () => {
        this.setState({
            open: false
        })
      }

    handleOpen = () => {
        this.setState({
            open1 : true
        });
    }

    handleClose = () => {
        this.setState({
            open1 : false
        })
    }

    render(){
        const { number_of_members } = this.state;

        const { handleIncrease, handleDecrease } = this;

        return (
            <Card  align="center">
                <br/><br/><br/>
                <DateRangePicker 
                  startDate={this.state.startDate} 
                  startDateId="your_unique_start_date_id" 
                  endDate={this.state.endDate} 
                  endDateId="your_unique_end_date_id" 
                  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} 
                  focusedInput={this.state.focusedInput} 
                  onFocusChange={focusedInput => this.setState({ focusedInput })}/><br/><br/>
                <Button
                    variant="outlined" 
                    color="primary" 
                    onClick={this.handleClickOpen}>인원수
                </Button>
                <Dialog 
                    open={this.state.open} 
                    onClose={this.handleClickClose}>
                    <DialogTitle>인원수 선택</DialogTitle>
                    
                    <DialogActions>
                        <Button 
                            onClick={handleDecrease}
                            variant="contained"
                            color="primary">-</Button>
                            <b>{ number_of_members }</b>
                        <Button 
                            onClick={handleIncrease}
                            variant="contained"
                            color="primary">+</Button>
                        <Button
                            variant="outlined"
                            color="primary" 
                            onClick={this.handleSetnumber}>
                        완료</Button>
                    </DialogActions>
                </Dialog><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </Card>
            
        )
    }
}


export default withStyles(styles)(R_Button);