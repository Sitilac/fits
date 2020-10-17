import React from 'react';
import {Link} from 'react-router-dom';

function FitListItem({fit, handleDeleteFit}) { 
  return (
    <>
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{fit.name}</h3>
        <h3>{console.log(fit.top.name)}</h3>
      </div>
      <div className='panel-footer FitListItem-action-panel'>
      <h4>{fit.top.name}</h4>
      <h4>{fit.bottom.name}</h4>
      <h4>{fit.shoes.name}</h4>
      <h4>{fit.accessory.name}</h4>
        <Link
          className='btn btn-xs btn-warning'
          to={{
            pathname: '/editFit',
            state: {fit}
          }}
        >
          EDIT
        </Link>
        <button
          className='btn btn-xs btn-danger margin-left-10'
          onClick={() => handleDeleteFit(fit._id)}
        >
          DELETE
        </button>
      </div>
    </div>
    </>
  );
}

export default FitListItem;