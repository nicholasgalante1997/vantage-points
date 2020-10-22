import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const Header = (props) => {
    return ( 
        <Container className='header'>
            <Row>
                <h5 className='landing-tag'>Vantage Points</h5>
                <em className='landing-par'>A collection of true stories that never happened.</em>
            </Row>
        </Container>
     );
}
 
export default Header;