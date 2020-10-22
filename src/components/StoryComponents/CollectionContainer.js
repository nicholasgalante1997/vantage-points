import React from 'react';
import CollectionLink from './CollectionLink'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const CollectionContainer = (props) => {
    return ( 
        <Container>
            <Row>
                {props.collection.map(collection => 
                <CollectionLink collection={collection} 
                key={collection.id}/>)}
            </Row>
        </Container>
     );
}
 
export default CollectionContainer;