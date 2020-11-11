import React from 'react';
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom';
import {AiOutlineForm} from 'react-icons/ai'
import {IoMdBeer} from 'react-icons/io'
import {FaStreetView} from 'react-icons/fa'
import {WiMoonAltWaningGibbous2} from 'react-icons/wi'
import { Container, Row } from 'react-bootstrap';


// const iconArray = [AiOutlineForm, IoMdBeer, FaStreetView, WiMoonAltWaningGibbous2]

const CollectionLink = (props) => {
    console.log(props)

    const iconSorter = (id) => {
      switch(id){
        case 1: 
            return <IoMdBeer size={64} />
        case 2: 
            return <AiOutlineForm size={64}/>
        case 3: 
            return <FaStreetView size={64}/>
        case 4: 
            return <WiMoonAltWaningGibbous2 size={64}/>
        default: 
            break;
      }
    }

    iconSorter()

    return ( 
        <Col>
            <Container style={{backgroundColor: 'white', borderRadius: 20, padding: 10, marginRight: 20, marginLeft: 20}}>
                <Row style={{justifyContent: 'center', alignItems: 'center'}}>
                     {iconSorter(props.collection.id)}
                </Row>
                <Row style={{justifyContent: 'center', alignItems: 'center', margin: 5}}>
                   <Link to={{
                        pathname: `/c/${props.collection.id}`,
                        state: {...props}}} >
                        <strong className='collection-title'>{props.collection.title}</strong>
                    </Link> 
                </Row>
                
            </Container>
        </Col>
     );
}
 
export default CollectionLink;