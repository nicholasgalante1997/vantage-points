import React from 'react';

const CollectionPage = (props) => {
    console.log(props.location.state.collection)
    return ( 
        <div>
            <p className='collection-page-title'>{props.location.state.collection.title}</p>
            {props.location.state.collection.stories.map(story => <li>{story.title}</li>)}
        </div>
     );
}
 
export default CollectionPage;