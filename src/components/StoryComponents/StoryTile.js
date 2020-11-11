import React, {useState} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

// ICONS    
import {BiBookReader} from 'react-icons/bi'
import {BsFillBookmarksFill} from 'react-icons/bs'
import {GiHighGrass} from 'react-icons/gi'
import {GiMountainCave} from 'react-icons/gi'
import {BsTrash} from 'react-icons/bs'
import {GiHeartOrgan} from 'react-icons/gi'
import {RiKnifeBloodLine} from 'react-icons/ri'

const StoryTile = (props) => {

    const [showDetails, setShowDetails] = useState(false)

    const toggleDetails = () => {
        setShowDetails(!showDetails)
        console.log(showDetails)
    }

    const iconSorter = (id) => {
        switch(id){
            case 1: 
                return <GiHighGrass size={48} />
            case 2: 
                return <GiMountainCave size={48} />
            case 3: 
                return <BsTrash size={48} />
            case 4: 
                return <GiHeartOrgan size={48} />
            case 5: 
                return <RiKnifeBloodLine size={48} />
            default: 
                break;
        }
    }

    console.log(showDetails)

    return ( 
        <Col md={3}>
            <Container style={styles.screen}>
                <Row style={styles.row}>
                     {iconSorter(props.story.id)}
                </Row>
                <Row style={{...styles.row, ...styles.medium}}>
                   <em>{props.story.title}</em>
                </Row>
                <Row style={styles.rowBottom}>
                    <Button style={{backgroundColor: '#084292', margin: 10}}
                        onClick={toggleDetails}
                    >
                        <BiBookReader size={24} />
                    </Button>
                    <Button style={{backgroundColor: '#084292', margin: 10}}>
                        <BsFillBookmarksFill size={24} />
                    </Button>
                </Row>
            </Container>
        </Col>
     );
}

const styles = {
    screen: {
        backgroundColor: 'white', 
        borderRadius: 20, 
        padding: 10, 
        marginRight: 20, 
        marginLeft: 20
    },
    row: {
        justifyContent: 'center', 
        alignItems: 'center',
        margin: 5
    },
    rowBottom: {
        justifyContent: 'center',
        alignItems: 'space-evenly',
        padding: 5
    }
}
 
export default StoryTile;