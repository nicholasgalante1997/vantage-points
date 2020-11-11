import React, {useState} from 'react';
import StoryTile from '../StoryComponents/StoryTile'
import {Container, Row, Button} from 'reactstrap'
import Stories from '../../data/stories'


const CollectionPage = (props) => {

    const [moreInfo, setMoreInfo] = useState(false)

    const toggleShowStory = () => {
        setMoreInfo(!moreInfo)
    }

    const thisCollection = props.location.state.collection
    const myStories = [...Stories.filter(story => story.collectionId === thisCollection.id )]

    return ( 
        <Container fluid>
            <Row style={styles.topRow}>
                <h4 style={styles.collectionTitle}>{thisCollection.title}</h4>
            </Row>
            <Row>
                {myStories.map(story => <StoryTile 
                key={story.id} story={story}
                />)}
            </Row>
        </Container>
     );
}

const styles = {
    topRow: {
        paddingTop: 50,
        paddingLeft: 25,
        paddingBottom: 50
    },
    collectionTitle: {
        fontSize: 54
    }
}
 
export default CollectionPage;

            //     <Row className='story-row'>
            //     {props.location.state.collection.stories.map(story => 
            //     <StoryTile title={story.title} blurb={story.blurb} 
            //     toggleShowStory={toggleShowStory} /> )}
            // </Row>