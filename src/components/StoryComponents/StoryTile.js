import React from 'react';
import {Card, CardTitle, CardText, Button, Col} from 'reactstrap'

const enticeMe = [
    "Fucking read me",
    "Don't ignore me",
    "Get lost in me",
    "One for those with heart"
]

const StoryTile = (props) => {
    return ( 
        <Col md={3}>
            <Card body className='story-tile'>
                <CardTitle className='card-content'>{props.title}</CardTitle>    
                <CardText className='card-content'>{props.blurb}</CardText>
                <Button onClick={props.toggleShowStory} className='story-button'>{enticeMe[Math.floor(Math.random() * enticeMe.length)]}</Button>
            </Card>
        </Col>
     );
}
 
export default StoryTile;