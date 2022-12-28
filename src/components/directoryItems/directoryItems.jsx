import classes from './directoryItems.module.css';

const DirectoryItems = ({ item }) => {
  const { title, info, imageUrl } = item;
  return (
    <div
      className={`${classes.wrapper}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(${imageUrl})`,
      }}
    >
      <h1>{title}</h1>
      <p>{info}</p>
    </div>
  );
}
 
export default DirectoryItems;