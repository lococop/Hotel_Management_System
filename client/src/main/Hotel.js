import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';




const Hotel = () => {
    return (
        <div>
            
        <AppBar position="static" color="secondary">
            <Toolbar>
              <Typography variant="h6" noWrap className="textColor">
                호텔 소개
              </Typography>
            </Toolbar>
        </AppBar>
        
        <Card>
        <div class="img">
        <div class="content">
            
            <h4>배에힘꽉조 호텔은 이 도시의 최고의 특급 호텔로서 지역 최고의 휴식과 문화의 장소로 각광받고 있습니다.</h4><br/>
           
            <h4>최대 700명을 수용할 수 있는 그랜드 홀과 300명을 수용할 수 있는 콘서트홀, 이외에도 다양한 작은 연회장을 갖추고 있습니다.</h4>
            <br/>
            <h4>이제 아시아를 넘어 세계로 뻗어가는 글로벌 호텔로서 전세계 어디에서나 한결같이 품격있는 서비스와 시설로 고객에게 깊은 감동을 주는 브랜드를 지향하고 있습니다.</h4><br/>

            <h4>균형 있는 라이프스타일을 추구하며 품격의 가치를 아는 고객을 위해 세련되고 모던한 감각을 지닌 안락한 객실과 세심한 배려가 묻어나는 서비스를 준비합니다.</h4><br/>
            <h4>또한 배에힘꽉조호텔만의 감각적인 오트 퀴진과 다양한 경험을 제공하는 호텔시설은 감동을 더해드립니다.</h4><br/>

            <h4>배에힘꽉조호텔에서 품격 있는 휴식으로 삶의 균형을 완성해가시길 바랍니다.</h4><br/>

 
        </div>
        <div class="img-cover"></div>
    </div>
        </Card>
        </div>
    );
};

export default Hotel;