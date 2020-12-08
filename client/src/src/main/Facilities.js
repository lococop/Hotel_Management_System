import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Info from './Info';

const Facilities = () => {
    return (
        <div>
        <AppBar position="static" color="secondary">
            <Toolbar>
              <Typography variant="h6" noWrap className="textColor1">
                호텔시설 소개
              </Typography>
            </Toolbar>
        </AppBar>
        <Card className="fac">
            <Typography variant="h6" noWrap>
                <br/>
                <Info
                title="호텔 피트니스"
                name=""
                photo="http://www.isquare-hotel.com/isquare/_upload/resv/16003220538465.jpg"
                content="● 운영시간: 월~토 9시~22시 (매주 일요일은 휴관)"
                content1="● 주차: 3시간까지 무료"
                content2="● 요금: 매달 25만원 또는 매년 180만원"
                content3="&nbsp;&nbsp;&nbsp;200평 규모의 여유로운 공간을 자랑하는 호텔 피트니스 클럽은 최신식의 고급 유산소 및 &nbsp;&nbsp;&nbsp;근력운동 기구를 구비 하여
                투숙객과 회원의 건강한 생활의 동반자가 되어 드립니다.">
                </Info>
                <br/>
                <br/>
                <Info
                title="비즈니스 센터"
                name=""
                photo="http://www.isquare-hotel.com/isquare/_upload/resv/14758226833745.jpg"
                content="&nbsp;&nbsp;&nbsp;투숙객 전용의 무료 이용 가능한 비즈니스 센터는 호텔 본관 1층에 위치하고 있으며, 24시간 이용 가능 합니다."
                content1=""
                content2="&nbsp;&nbsp;&nbsp;비즈니스 센터는 고객님께서 필요한 업무를 신속하고 편리하게 처리할 수 있도록 완벽한 &nbsp;&nbsp;&nbsp;서비스를 제공하고 있습니다."
                content3="">
                </Info>
                <br/>
                <br/>
                <Info
                title="콘서트홀 / 연회장"
                name=""
                photo="https://s3.ap-northeast-2.amazonaws.com/event-localnaeil/FileData/Article/201711/852d4fe8-51e8-4538-86e0-e8c6f10bcbbb.jpg"
                content="&nbsp;&nbsp;&nbsp;700명을 수용할 수 있는 그랜드 홀과 300명을 수용할 수 있는 콘서트홀, 이외에도 다양한 &nbsp;&nbsp;&nbsp;작은 연회장을 갖추고 있습니다."
                content1=""
                content2="&nbsp;&nbsp;&nbsp;결혼식 외에 다양한 이벤트에 사용할 수 있는 시설을 갖추고 있습니다."
                content3="">
                </Info>
                <br/>
                <br/>
                <Info
                title="웨딩홀"
                name=""
                photo="https://img.hankyung.com/photo/201805/01.16620449.1.jpg"
                content=" &nbsp;&nbsp;&nbsp;높은 천고, 넓은 공간이 가지고 있는 웅장함이 최첨단 조명과 더해진 그랜드 볼룸은 정통호 &nbsp;&nbsp;&nbsp;텔 웨딩으로 평생 잊지 못할 의미있는 예식으로 만들어 드릴 공간입니다."
                content1=""
                content2=""
                content3="">
                </Info>
                <br/>
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

export default Facilities;