import React from 'react';
import {Link} from 'react-router-dom';
import BottomCard from '../../../components/BottomCard'

function BottomDetailsPage(props){
  const bottom = props.location.state.bottoms;
  return(
    <>
    <div className="mainstyling2">
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
        <Link
        className='btn btn-xs btn-warning'
        to={{
          pathname: '/editBottom',
          bottoms: {bottom}
        }}
      >EDIT
      </Link>
      </div>
    </>
  );
}

export default BottomDetailsPage;