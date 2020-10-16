import React from 'react';
import ShoeCard from '../../../components/ShoeCard'

function ShoeDetailsPage(props){
  const shoe = props.location.state.shoes;

  //this.getOne()
  return(
    <>
      <ShoeCard
        key={shoe._id}
        shoe={shoe}
      />
    <button
      className='btn btn-xs btn-danger margin-left-10'
      onClick={() => props.handleDeleteShoe(shoe._id)}
     >
      DELETE
     </button>
    </>
  );
}

export default ShoeDetailsPage;