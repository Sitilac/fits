import React from 'react';
import {Link} from 'react-router-dom';

function TopCard({top}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
  <h3 className='panel-title'>{top.name}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Name: {top.name}</dt>
          <dt>Brand: {top.brand}</dt>
          <dt>Price: {top.price}</dt>
          <dt>Price: {top.color}</dt>
          <br/>
          <dt>Description: {top.description}</dt>
        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/' onclick={() => window.location.reload(false)}>RETURN TO LIST</Link>
      </div>
    </div>
  );
}

export default TopCard;