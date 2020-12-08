import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Info from './Info';

const Tour = () => {
    return (
        <div>
        <AppBar position="static" color="secondary">
            <Toolbar>
              <Typography variant="h6" noWrap className="textColor">
                주변 시설/관광지
              </Typography>
            </Toolbar>
        </AppBar>
        <Card className="tour">
            <Typography variant="h6" noWrap>
            
            <br/>
                <Info
                title="시외버스 터미널"
                name="시외버스 터미널"
                photo="https://koreandramaland.com/wp-content/uploads/2019/08/jeonju-express-bus-station-kdrama-filming-location-photo-copyright-florence-november-2019-koreandramaland-1-1067x800.jpg"
                content="&nbsp; &nbsp; &nbsp;택시로 10분 정도 거리. 호텔 건너편 버스 정류장에서 2번 버스를 타고 시외버스 터미널에&nbsp; &nbsp; &nbsp;서 하차."
                content1=""></Info>
                <br/>
                <br/>
                <Info
                title="국립박물관"
                name="국립박물관"
                photo="https://gongju.museum.go.kr/_prog/download/?site_dvs_cd=gongju&func_gbn_cd=main_visual&mng_no=68"
                content="&nbsp; &nbsp; &nbsp;호텔 건너편 정류장에서 2번 버스를 타고 15분 정도 이동 뒤 10분 보도로 이동."
                content1=""></Info>
                <br/>
                <br/>
                <Info
                title="해수욕장"
                name="해수욕장"
                photo="https://sangsaeng.seoul.go.kr/upload/smartEditor/2020080310150492c863ad-5094-4a84-b65d-d4c85a17559f.png"
                content="&nbsp; &nbsp; &nbsp;호텔 앞 버스 정류장에서 3번 버스를 타고 해수욕장 정류장에서 하차."
                content1=""></Info>
                <br/>
                <br/>
                <Info
                title="국제공항"
                name="국제공항"
                photo="https://www.ji9.org/uploads/allimg/200311/aRtCR5J83S93RwtA.jpeg?wx_fmt=jpeg"
                content="&nbsp; &nbsp; &nbsp;15분 간격으로 공항에서 호텔 간 셔틀버스를 운행하고 있음."
                content1=""></Info>
                <br/>
                <br/>
                <Info
                title="워터파크"
                name="워터파크"
                photo="https://www.gimhae.go.kr/CmsMultiFile/view.do?multifileId=MF00000239&idx=22452"
                content="&nbsp; &nbsp; &nbsp;7월과 8월에 한해 30분 간격으로 금, 토, 일요일에 셔틀 버스를 운영하고 있음."
                content1=""></Info>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </Typography> 
        </Card>
        </div>
    );
};

export default Tour;