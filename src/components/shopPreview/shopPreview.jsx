import classes from './shopPreview.module.css';
import ShopContainer from '../shopcontainer/shopContainer';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview, selectCollectionFetching } from '../../redux/shop/shopSelector';
import { fetchCollectionsStartAsync } from '../../redux/shop/shopAction';
import { useEffect } from 'react';

const ShopPreview = ({ isFetching, collections, fetchCollectionsStartAsync }) => {

  useEffect(()=>{
    fetchCollectionsStartAsync();
  },[])

  if(isFetching){
    return <h1>loading...</h1>;
    
  }
  return ( 
    <div className={classes.wrapper}>
      {
        collections.map(collection => {
          return <ShopContainer key={collection.id} collection={collection} />
        })
      }
    </div>
   );
}
 
const mapStateToProps = createStructuredSelector({
  isFetching: selectCollectionFetching,
  collections: selectCollectionsForPreview
});
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPreview);