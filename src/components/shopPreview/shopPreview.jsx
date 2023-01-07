import classes from './shopPreview.module.css';
import { useEffect } from "react";
import ShopContainer from '../shopcontainer/shopContainer';
import WithSpinner from '../loadingSpinner/spinner';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview, selectCollectionFetching, selectErrorMessage } from '../../redux/shop/shopSelector';
import { fetchCollectionsStartAsync } from '../../redux/shop/shopAction';


const ShopPreview = ({ isFetching, errorMessage, collections, fetchCollectionsStartAsync }) => {
  useEffect(()=>{
    fetchCollectionsStartAsync();
    
  },[])

  if(isFetching){
    return <WithSpinner />;
    
  }
  if(errorMessage){
    return <h1>something went wrong</h1>
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
  errorMessage: selectErrorMessage,
  collections: selectCollectionsForPreview
});
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPreview);