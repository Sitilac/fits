import React from 'react';
import {Link} from 'react-router-dom';
import ShoeCard from '../../../components/ShoeCard'

function ShoeDetailsPage(props){
  const shoe = props.location.state.shoes;

  //this.getOne()
  return(
    <>
    <div className="mainstyling2">
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
     <Link
        className='btn btn-xs btn-warning'
        to={{
          pathname: '/editShoe',
          shoes: {shoe}
        }}
      >EDIT
      </Link>
      </div>
    </>
  );
}

export default ShoeDetailsPage;