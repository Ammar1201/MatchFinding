import './Bottom.css';

const Bottom = ({setVCount, setXCount, setIndex, vCount, xCount}) => {
  return ( 
    <div className="bottom">
      <div>
        <button onClick={() => {
            setXCount(prev => {
              if(prev < 8 && vCount < 8) {
                if(xCount + vCount < 8) {
                  return prev + 1
                }
              }
              return prev;
            });
            setIndex(prev => {
              if(prev < 8) {
                return prev + 1
              }
              return prev;
            });
          }}>
            <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div>
        <button onClick={() => {
            setVCount(prev => {
              if(prev < 8 && xCount < 8) {
                if(xCount + vCount < 8) {
                  return prev + 1
                }
              }
              return prev;
            });
            setIndex(prev => {
              if(prev < 8) {
                return prev + 1
              }
              return prev;
            });
          }}>
            <i className="fa-solid fa-check"></i>
          </button>
      </div>
    </div> 
  );
}
 
export default Bottom;