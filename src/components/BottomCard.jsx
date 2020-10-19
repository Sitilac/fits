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
        <dt>Name: {bottom.name}</dt>
          <dt>Brand: {bottom.brand}</dt>
          <dt>Price: {bottom.price}</dt>
          <dt>Price: {bottom.color}</dt>
          <br/>
          <dt>Description: {bottom.description}</dt>
        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/'>RETURN TO LIST</Link>
      </div>
    </div>
  );
}

export default BottomCard;