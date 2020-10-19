import React from 'react';
import {Link} from 'react-router-dom';

function ShoeCard({shoe}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
  <h3 className='panel-title'>{shoe.name}</h3>
      </div>
      <div className='panel-body'>
        <dl>
        <dt>Name: {shoe.name}</dt>
          <dt>Brand: {shoe.brand}</dt>
          <dt>Price: {shoe.price}</dt>
          <dt>Price: {shoe.color}</dt>
          <br/>
          <dt>Description: {shoe.description}</dt>
        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/'>RETURN TO LIST</Link>
      </div>
    </div>
  );
}

export default ShoeCard;