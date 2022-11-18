import mountain1 from '../assets/imgs/mountain1.jpg';
import mountain2 from '../assets/imgs/mountain2.jpg';
import mountain3 from '../assets/imgs/mountain3.jpg';
import mountain4 from '../assets/imgs/mountain4.jpg';
import mountain5 from '../assets/imgs/mountain5.jpg';
import mountain6 from '../assets/imgs/mountain6.jpg';
import mountain7 from '../assets/imgs/mountain7.jpg';
import mountain8 from '../assets/imgs/mountain8.jpg';
import './Middle.css';

const Middle = ({index, xCount, vCount}) => {
  const imgs = [
    mountain1, mountain2, mountain3, mountain4, mountain5,
    mountain6, mountain7, mountain8
  ];

  return ( 
    <div className="middle">
      {index < 8 && <img src={imgs[index]} alt="" />}
      {index >= 8 && xCount > vCount && <h1>Looks Like You Hate Mountains!</h1>}
      {index >= 8 && xCount < vCount && <h1>Looks Like You Like Mountains!</h1>}
      {index >= 8 && xCount === vCount && <h1>Normal Person</h1>}
    </div> 
  );
}
 
export default Middle;