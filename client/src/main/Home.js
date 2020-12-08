import React from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { Toolbar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import R_Button from '../components/R_Button';
import Home_Room from '../components/Home_Room';
import styled, { ThemeConsumer } from "styled-components";

const roots = {
  root : {
    width : '100%',
    flexGrow: 1,
    minWidth : 1080
  }
}

const styles1 = {
  left : '10px',
  width : '120%',
  //marginBottom : 15,
  display : 'flex',
  justifyContent : 'center'
}

const styles2 = {
  width : '7%',
  marginLeft : 1100,
  display : 'flex',
  justifyContent : 'center'
}

const styles = {
  width : '8%',
  //marginBottom : 15,
  display : 'flex',
  justifyContent : 'center'
}

const Container = styled.div`
  position: absolute;
  top: 1;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(https://source.unsplash.com/random/1920x1080);
  background-size: cover;
  opacity: 0.5;
`;


class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            startDate : null,
            endDate : null,
        }
    }

    render() {
        return (  
        <Card>
            <Router>
                   
            <div style={roots}>
            <AppBar style={styles1} position="static" color="secondary">
            <Toolbar >
<<<<<<< HEAD
                <Typography flexGrow = "1" display = "none" variant="h6" noWrap className="textColor">
=======
                <Typography flexGrow = "1" display = "none" variant="h6" noWrap>
>>>>>>> 3ba9bf64f545c0c5396e6d06f2ff73145c2bd9a9
                    객실 예약하기
                </Typography>
                <div style={styles2}>
                <Link to="/reserve">
<<<<<<< HEAD
                <Button variant="outlined" color="secondary">조건 설정하기</Button>
=======
                <Button variant="contained" color="default">조건 설정하기</Button>
>>>>>>> 3ba9bf64f545c0c5396e6d06f2ff73145c2bd9a9
                </Link>
                </div>
                <div style={styles}>
                <Link to="/home_room">
                <Button variant="contained" color="default">객실 검색하기</Button>
                </Link>
                </div>
            </Toolbar>
            
            </AppBar>
            </div>
            <main>
                <Switch>
                <Route exact path="/reserve" component={R_Button} />
                <Route exact path="/home_room" component={Home_Room} />
                </Switch>
            </main>
            
            </Router>
            
        </Card>
        )
    }
}

export default Home;