import React, {Component} from 'react';
import OutfitListItem from './OutfitListItem'

function ShowAllOutfits(props){
  return (
    <>
    <div className="mainstyling">
      {!props.user ? (
        <></>
      ) : (
        <>
        <h1>Outfit List</h1>
        <div className='ListPage'>
          {props.fits.map(fit => 
            <OutfitListItem
              fit={fit}
              handleDeleteFit={props.handleDeleteFit}
              key={fit._id}
              // handleUpdateTop={props.handleUpdateTop}
              // handleUpdateBotom={props.handleUpdateBottom}
              // handleUpdateShoe={props.handleUpdateShoe}
              // handleUpdateAccessory={props.handleUpdateAccessory}
            />
          )}
        </div>
        </>
      )}
      </div>
    </>
  );
}


export default ShowAllOutfits;