import React from 'react';
import BottomCard from '../../../components/BottomCard'

function BottomDetailsPage(props){
  const bottom = props.location.state.bottoms;

  //this.getOne()
  return(
    <>
    <h1>Hi</h1>
      <BottomCard
        key={bottom._id}
        bottom={bottom}
      />
           <button
          className='btn btn-xs btn-danger margin-left-10'
          onClick={() => props.handleDeleteBottom(bottom._id)}
        >
          DELETE
        </button>
    </>
  );
}

export default BottomDetailsPage;