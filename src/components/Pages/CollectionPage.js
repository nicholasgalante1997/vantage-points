import React, {useState} from 'react';
import StoryTile from '../StoryComponents/StoryTile'
import {Container, Row, Button} from 'reactstrap'

const CollectionPage = (props) => {

    const [moreInfo, setMoreInfo] = useState(false)

    const toggleShowStory = () => {
        setMoreInfo(!moreInfo)
    }
    
    console.log(moreInfo)
    return ( 
        <div>
            <em className='collection-page-title'>{props.location.state.collection.title}</em>
            <Container>
                { moreInfo ? <Button onClick={toggleShowStory}>Toggle Me</Button> : 
                <Row className='story-row'>
                {props.location.state.collection.stories.map(story => 
                <StoryTile title={story.title} blurb={story.blurb} 
                toggleShowStory={toggleShowStory} /> )}
                </Row>}
            </Container>
        </div>
     );
}
 
export default CollectionPage;

            //     <Row className='story-row'>
            //     {props.location.state.collection.stories.map(story => 
            //     <StoryTile title={story.title} blurb={story.blurb} 
            //     toggleShowStory={toggleShowStory} /> )}
            // </Row>