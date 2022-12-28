import classes from './homeDirectory.module.css';

import data  from '../../pages/homePage/homeData';
import DirectoryItems from '../directoryItems/directoryItems';
import { useEffect, useState } from 'react';

const HomeDirectory = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = data.length-1;
    if(index > lastIndex){
      setIndex(0);
    }
    const timerId = setInterval(() => {
      setIndex(index + 1)
    }, 6000)
    return () => clearInterval(timerId);
  }, [index])

  return ( 
    <div className={classes.wrapper}>
      {
        data.map((item, itemIndex) => {
          return (
            <div
              key={item.id}
              className={`${classes.item} ${
                index === itemIndex ? classes.show : ""
              }`}
            >
              <DirectoryItems item={item} />
            </div>
          );
        })
      }
    </div>
   );
}
 
export default HomeDirectory;