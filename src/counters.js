import { FaRegClock } from 'react-icons/fa';

const Counters = (props) => {   
    return ( 
        <div className="global">   
            <div className="centro">
                <div className="calendar"><FaRegClock /></div>
                <div className="six">{props.six %10}</div>
                <div className="five">{props.five %10}</div>
                <div className="four">{props.four %10}</div>
                <div className="three">{props.three %10}</div>
                <div className="two">{props.two %10}</div>
                <div className="one">{props.one %10}</div>                
            </div>             
        </div>
     );
}
 
export default Counters ;