import React from 'react';
import {Link} from 'react-router-dom';

function AccessoryCard({accessory}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
  <h3 className='panel-title'>{accessory.name}</h3>
      </div>
      <div className='panel-body'>
        <dl>
        <dt>Name: {accessory.name}</dt>
          <dt>Brand: {accessory.brand}</dt>
          <dt>Price: {accessory.price}</dt>
          <dt>Price: {accessory.color}</dt>
          <br/>
          <dt>Description: {accessory.description}</dt>

        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/'>RETURN TO LIST</Link>
      </div>
    </div>
  );
}

export default AccessoryCard;