import './Top.css';

const Top = ({vCount, xCount}) => {
  return ( 
    <div className="top">
      <div>
        <label><i className="fa-solid fa-xmark"></i> Count is → </label>
        <label>{xCount}</label>
      </div>
      <div>
        <label><i className="fa-solid fa-check"></i> Count is → </label>
        <label>{vCount}</label>
      </div>
    </div> 
  );
}
 
export default Top;