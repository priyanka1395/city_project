import React,{Component} from 'react';
import './City.css';
class City extends Component{


render(props){

return (
  <div className="cityStyle">
<h2>{props.name}</h2>
  </div>
)

}

}


export default City;