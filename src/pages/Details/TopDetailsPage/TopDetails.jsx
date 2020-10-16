import React from 'react';
import {Link} from 'react-router-dom';
import TopCard from '../../../components/TopCard'

function TopDetailsPage(props){
  const top = props.location.state.tops;
  return(
    <>
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
      <Link
        className='btn btn-xs btn-warning'
        to={{
          pathname: '/editTop',
          tops: {top}
        }}
      >EDIT
      </Link>
    </>
    
  );
}

export default TopDetailsPage;