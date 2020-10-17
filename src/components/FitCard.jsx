import React from 'react';
import {Link} from 'react-router-dom';

function FitCard({fit}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{fit.name}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Top</dt>
          <dd>{fit.top.name}</dd>
          <dt>Bottom</dt>
          <dd>{fit.bottom.name}</dd>
          <dt>Shoe</dt>
          <dd>{fit.shoes.name}</dd>
          <dt>Accessory</dt>
          <dd>{fit.accessory.name}</dd>
        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/'>RETURN TO LIST</Link>
      </div>
    </div>
  );
}

export default FitCard;