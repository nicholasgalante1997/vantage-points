import React from 'react';
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom';

const CollectionLink = (props) => {
    console.log(props)
    return ( 
        <Col>
            <Link to={{
                pathname: `/c/${props.collection.id}`,
                state: {...props}}} >
                <strong className='collection-title'>{props.collection.title}</strong>
            </Link>
        </Col>
     );
}
 
export default CollectionLink;