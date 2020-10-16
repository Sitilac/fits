import React from 'react';
import AccessoryCard from '../../../components/AccessoryCard'

function AccessoryDetailsPage(props){
  const accessory = props.location.state.accessories;

  //this.getOne()
  return(
    <>
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
    </>
  );
}

export default AccessoryDetailsPage;