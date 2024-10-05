import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import './PlayerTeam.css';
import { LinkContainer } from "react-router-bootstrap";



export default function PlayerTeamList() {
  const { state } = useLocation();

  const statBoxStyle = {
    backgroundColor: '#FF4500', // Red-Orange color
    padding: '10px 70px',
    borderRadius: '0',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '1.2em',
    fontFamily: 'Arial, sans-serif',
   
  };

  const statBoxStyle2= {
    backgroundColor: '#FF4500', // Red-Orange color
    padding: '10px 70px',
    borderRadius: '0',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '1.2em',
    fontFamily: 'Arial, sans-serif',
    marginleft: '15px',
    width:'150px',
  };


  

  
  


  return (

    <Container fluid className='body' style={{height:"90vh", paddingTop:"4rem"}}>


    
  
      <Row sm={2} lg={4} className="justify-content-evenly">
        <Col style={{ width: '25%' }}>
        <LinkContainer to={"/players"}  style={{ height: '500px', width: '325px', borderRadius: '2rem',}}>
           <Card.Img src={state.playerURL} className="rounded-5" />
        </LinkContainer>
        </Col>

        <Col style={{ width: '75%' }}>
          <Container style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            {/* Left box for text */}
            <div style={{ flex: 1, color: 'white' }}>

              <Card.Text style={{ fontSize: '1.5em', fontFamily: 'Arial, sans-serif' }}>
                Goals scored:
                <hr style={{ borderColor: '#FF4500', margin: '5px 0',  width: '60px', borderWidth: '4px'}} />
              </Card.Text>

              <Card.Text style={{ fontSize: '1.5em', fontFamily: 'Arial, sans-serif' }}>
                Assists:
                <hr style={{ borderColor: '#FF4500', margin: '5px 0',  width: '60px', borderWidth: '4px' }} />
              </Card.Text>

              <Card.Text style={{ fontSize: '1.5em', fontFamily: 'Arial, sans-serif' }}>
                Game Played:
                <hr style={{ borderColor: '#FF4500', margin: '5px 0',  width: '60px', borderWidth: '4px' }} />
              </Card.Text>

              <Card.Text style={{ fontSize: '1.5em', fontFamily: 'Arial, sans-serif' }}>
                Position:
                <hr style={{ borderColor: '#FF4500', margin: '5px 0',  width: '60px', borderWidth: '4px' }} />
              </Card.Text>

              <Card.Text style={{ fontSize: '1.5em', fontFamily: 'Arial, sans-serif'  }}>
                Red Card:
                <hr style={{ borderColor: '#FF4500', margin: '5px 0' ,  width: '60px', borderWidth: '4px'}} />
              </Card.Text>


              <Card.Text style={{ fontSize: '1.5em', fontFamily: 'Arial, sans-serif' }}>
                Yellow Card:
                <hr style={{ borderColor: '#FF4500', margin: '5px 0' ,  width: '60px', borderWidth: '4px' }} />
              </Card.Text>


           
            </div>

            {/* Middle red-orange line */}
            <div
              style={{
                width: '2px',
                height: '70%',
                backgroundColor: '#FF4500',
                margin: '0 10px',
              }}
            ></div>

            {/* Right box for stats */}
            <div style={{ flex: 1.2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={statBoxStyle}>
                {state.goals}
              </div>
              <div style={statBoxStyle}>
                {state.assists}
              </div>
              <div style={statBoxStyle}>
                {state.gameplayed}
              </div>

              <div style={statBoxStyle2}>
                {state.position}
              </div>

              <div style={statBoxStyle}>
                {state.redcard}
              </div>

              <div style={statBoxStyle}>
                {state.yellowcard}
              </div>
            </div>
          </Container>
        </Col>
      </Row>
      
    </Container>
 


  );

 

}


