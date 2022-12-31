import classes from './shopCollections.module.css';

import ShopItems from '../../components/shopItems/shopItems';

import { fetchCollectionsStartAsync } from '../../redux/shop/shopAction';
import {
  selectCollection,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shopSelector";
import { connect } from 'react-redux';
import { useEffect } from 'react';

const CollectionsPage = ({collections, isLoading, fetchCollectionsStartAsync}) => {

  useEffect(()=>{
    fetchCollectionsStartAsync();
  }, [])

  if (collections === null) {
    return <h1>loading...</h1>;
  }
  const { title, items } = collections;

  return ( 
    <div className={classes.wrapper} >
    <h1 className={classes.title}>{title}</h1>
    <div className={classes.shopItems}>
      {
        items.map(item => {
          console.log(item);
          return <ShopItems key={item.id} item={item} isCollectionPage />
        })
      }
    </div>
    </div>
   );
}
 
const mapStateToProps = (state, ownProps) => ({
  collections: selectCollection(ownProps.match.params.collectionId)(state),
  isLoading: selectIsCollectionsLoaded
});
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});
export default connect(mapStateToProps, mapDispatchToProps)(CollectionsPage);