import React from 'react';
import {Link} from 'react-router-dom';
import FitCard from '../../../components/FitCard'

function FitDetailsPage(props){
  const fit = props.location.location.state.fit;
  return(
    
    <>
      <FitCard
        key={fit._id}
        fit={fit}
        handleDelete={props.handleDeleteFit}
      />
      <button
        className='btn btn-xs btn-danger margin-left-10'
        onClick={() => props.handleDeletefit(fit._id)}
      >
        DELETE
      </button>
      <Link
        className='btn btn-xs btn-warning'
        to={{
          pathname: '/editFit',
          fits: {fit}
        }}
      >EDIT
      </Link>
    </>
    
  );
}

export default FitDetailsPage;