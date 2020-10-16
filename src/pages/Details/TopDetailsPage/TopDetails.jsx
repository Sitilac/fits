import React from 'react';
import TopCard from '../../../components/TopCard'

function TopDetailsPage(props){
  const top = props.location.state.tops;

  //this.getOne()
  return(
    <>
    <h1>Hi</h1>
      <TopCard
        key={top._id}
        top={top}
        handleDelete={props.handleDeleteTop}
      />
         <button
          className='btn btn-xs btn-danger margin-left-10'
          onClick={() => props.handleDeleteTop(top._id)}
        >
          DELETE
        </button>
    </>
  );
}

export default TopDetailsPage;