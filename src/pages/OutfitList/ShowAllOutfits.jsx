import React, {Component} from 'react';
import OutfitListItem from './OutfitListItem'

function ShowAllOutfits(props){
  return (
    <>
      {!props.user ? (
        <></>
      ) : (
        <>
        <h1>Outfit List</h1>
        <div className='PuppyListPage-grid'>
          {props.fits.map(fit => 
            <OutfitListItem
              fit={fit}
              handleDeleteFit={props.handleDeleteFit}
              key={fit._id}
            />
          )}
        </div>
        </>
      )}
    </>
  );
}


export default ShowAllOutfits;