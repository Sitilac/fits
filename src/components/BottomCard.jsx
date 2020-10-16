import React from 'react';
import {Link} from 'react-router-dom';

function BottomCard({bottom}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
  <h3 className='panel-title'>{bottom.name}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Name</dt>
          <dd>{bottom.name}</dd>
          <dt>Price</dt>
          <dd>{bottom.price}</dd>

        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/'>RETURN TO LIST</Link>
      </div>
    </div>
  );
}

export default BottomCard;