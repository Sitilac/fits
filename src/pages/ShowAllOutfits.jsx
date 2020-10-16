import React, {Component} from 'react';

// class ShowAllOutfits extends Component{
//   const top = props.location.state.tops;
//   render(){
//     return(
//       <>
//       <h1>OutfitPage</h1>
//       </>
//     )
//   }
// }

function ShowAllOutfits(props){
  const tops = props.location
  console.log(tops);
  return(
    <>
    <h1>Outfit</h1>
    </>
  )

}


export default ShowAllOutfits;