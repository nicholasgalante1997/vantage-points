import React from 'react';
import Header from '../Header/Header'
import CollectionContainer from '../StoryComponents/CollectionContainer'
import Container from 'react-bootstrap/Container'

const LandingPage = (props) => {
    return ( 
        <Container>
            <Header />
            <CollectionContainer collection={props.collections} />
      </Container>
     );
}
 
export default LandingPage;