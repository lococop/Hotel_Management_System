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
              <Typography variant="h5" noWrap>
              
              </Typography>
              <Typography variant="h6" noWrap className="textColor">
                    객실 이용 안내
              </Typography>
            </Toolbar>
        </AppBar>
        <Card className="room">
        <br/>
            <Typography variant="h6" noWrap>
            <Info 
            title="1) Deluxe Double (디럭스 더블)"
            name=""
            photo="http://www.isquare-hotel.com/isquare/_upload/resv/1452139443119.jpg"
            content="● 층수/면적: 1~8층/32.34m² (9.8평)"
            content1="● 객실료: 363,000원"
            content2="● 침대: 더블 사이즈 1개"></Info>
            <br/>
            
            <Info 
            title="2) Deluxe Twin (디럭스 트윈)"
            name=""
            photo="http://www.isquare-hotel.com/isquare/_upload/resv/14521393581642.jpg
            "
            content="● 층수/면적: 4~5층/32.34m² (9.8평)"
            content1="● 객실료: 363,000원"
            content2="● 침대: 싱글 사이즈 2개"></Info>
            <br/>
            
            <Info  
            title="3) Deluxe Family A (디럭스 패밀리 A)"
            name=""
            photo="http://www.isquare-hotel.com/isquare/_upload/resv/14758223538667.jpg"
            content="● 층수/면적: 3~4층/32.34m² (9.8평)"
            content1="● 객실료: 444,000원"
            content2="● 침대: 킹 사이즈 1개, 슈퍼 싱글 사이즈 1개"
            content3="● 최대 투숙 인원: 성인 2인, 소아 2인"></Info>
            <br/>
            
            <Info 
            title="4) Deluxe Family B (디럭스 패밀리 B)"
            name=""
            photo="http://www.isquare-hotel.com/isquare/_upload/resv/14521393065117.jpg"
            content="● 층수/면적: 3~4층/32.34m² (9.8평)"
            content1="● 객실료: 396,000원"
            content2="● 침대: 퀸 사이즈 1개, 슈퍼 싱글 사이즈 1개"
            content3="● 최대 투숙 인원: 성인 2인, 소아 1인"></Info>
            <br/>
            
            <Info 
            title="5) Conor Suite (코너 스위트)"
            name=""
            photo="http://www.isquare-hotel.com/isquare/_upload/resv/14521391940932.jpg"
            content="● 층수/면적: 3~8층/39.6m² (12평)"
            content1="● 객실료: 495,000원"
            content2="● 침대: 퀸 사이즈 1개"
            content3=" 고객님의 품위를 지켜 드리기 위한 조금 더 여유롭고, 고급스러운 객실 환경이 조성되어 있는 객실입니다. 품격있는 안락함을 만끽해보시기 바랍니다."></Info>
            <br/>
            
            <Info 
            title="6) Premier Suite (프리미어 스위트)"
            name=""
            photo="http://www.isquare-hotel.com/isquare/_upload/resv/14521390537092.jpg"
            content="● 층수/면적: 10층/64.68m² (19.6평)"
            content1="● 가격: 1,100,000원"
            content2="● 퀸 사이즈 1개, 슈퍼 싱글 사이즈 1개"
            content3=" 최상층에 위치한 프리미어 스위트룸은 고객님의 사무공간과 침실 공간으로 구성되어 있어, 내집 같은 편안함을 경험할 수 있습니다."></Info>
            <br/>
            
            <Info 
            title="7) Royal Suite (로열 스위트)"
            name=""
            photo="http://www.isquare-hotel.com/isquare/_upload/resv/14521389718337.jpg"
            content="● 층수: 10층/161.7m² (49평)"
            content1="● 가격: 3,850,000원"
            content2="● 추가 서비스: Turn Down 서비스, 75인치 이동식 대형 TV"
            content3=" 호텔의 최상층에 위치한 Royal Suite는 품격있는 응접실, 넓은 부엌, 깊은 숙면을 유도하는 최고급 침구류를 갖춘 안락한 침실로 구성되어 있습니다. VVIP를 위해 준비한 특별한 공간에서 최상의 남다름을 경험하십시오."></Info>
            <br/>
            
            <ul className="textColor">
                      <li><h6>Check in 오후 3시 이후</h6></li>
                      <li><h6>Check out 오후 12시(정오) 까지</h6></li>
                      <li><h6>Check out시간 초과 시 추가 요금이 발생 합니다.</h6></li>
                    </ul>
            <Info
            title="추가 요금 안내"
            name="추가 요금표"
            photo="data:image/jpeg;base64,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"
            content="● 오후 12시(정오) ~ 오후 3시까지 :객실요금의 30%"
            content1="● 오후 3시부터 오후 6시까지 : 객실 요금의 50%"
            content2="● 오후 6시를 경과할 시 : 해당일 객실 요금의 전액">
            </Info>
            <br/>
            </Typography> 
        </Card>
                
        </div>
    );
};

export default Facilities;