import React from 'react';
import {Link} from 'react-router-dom';
import AccessoryCard from '../../../components/AccessoryCard'

function AccessoryDetailsPage(props){
  const accessory = props.location.state.accessories;

  
  return(
    <>
    <div className="mainstyling2">
      <AccessoryCard
        key={accessory._id}
        accessory={accessory}
      />
      <button
        className='btn btn-xs btn-danger margin-left-10'
        onClick={() => props.handleDeleteAccessory(accessory._id)}
      >
          DELETE
        </button>
      <Link
        className='btn btn-xs btn-warning'
        to={{
          pathname: '/editAccessory',
          accessory: {accessory}
        }}
      >EDIT
      </Link>
      </div>
    </>
  );
}

export default AccessoryDetailsPage;