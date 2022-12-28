import classes from './shopPreview.module.css';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shopSelector';
import { fetchCollectionsStartAsync } from '../../redux/shop/shopAction';
import { useEffect } from 'react';

const ShopPreview = ({fetchCollectionsStartAsync}) => {
  // useEffect(()=>{
  //   fetchCollectionsStartAsync();
  // },[])
  return ( 
    <div className={classes.wrapper}>
      hi
    </div>
   );
}
 
export default ShopPreview;