
import axios from "axios";
import React,{Component} from "react";
import Main from "./post";
import back1 from "./images/back1.jpg";

import { Link } from "react-router-dom";
class Frame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      recipe:'',
      
    };
  }
  
  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleRecipeChange = (event) => {
    this.setState({ recipe: event.target.value });
  };
  
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: this.state.name,
      recipe: this.state.recipe,
      
    };
    axios.post('http://127.0.0.1:8080/post', data)
    window. location. reload(false);
  };
  
  
  render() {
  return (
    <div>
      
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <div className="header">
        <div className="header__left">
          <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />
          <div className="header__search">
            <i className="material-icons"> search </i>
            <input type="text" />
          </div>
        </div>
        <div className="header__right">
          <div className="headerOption">
            <i className="material-icons headerOption__icon"> home </i>
            <h3>Home</h3>
          </div>
          
          
          <div className="headerOption">
            <i className="material-icons headerOption__icon"> chat </i>
            <h3>Messaging</h3>
          </div>
          <div className="headerOption">
            <i className="material-icons headerOption__icon"> account_circle </i>
            <h3>Me</h3>
          </div>
          <div className="headerOption">
            <i className="fa fa-sign-in"></i>
            <Link to="/login"><h3 className="a1">Login</h3></Link>
          </div>
        </div>
      </div>
      {/* Header Ends */}
      <div className="back_pic">

     <img src={back1}></img>
      </div>
      {/* Main Body Starts */}
      <div className="body__main">
        <div className="bar">
          
        </div>
        
        
        <div className="feed">
          <div className="feed__inputContainer">
              <form >
            <div id="feed1">
              {/* <i className="material-icons"> create </i> */}
              <h4>Item Name:</h4>
                <input type="text" className="in1" value={this.state.name} onChange={this.handleNameChange}/>
              
            </div>
            <h4>Write Recipe:</h4>
            <div  id="feed2">
              
                <textarea type="text" className="in2"  value={this.state.recipe} onChange={this.handleRecipeChange} ></textarea>
            </div>
            <div>
            
              <input type="file" className="files" ></input>
            </div>
            <div className="feed__inputOptions">
              
              <div >
                <button type="submit" className="submit_but" onClick={this.handleSubmit}>Upload</button>
              </div>
              
            </div>
              </form>
          </div>
        
        </div>
        {/* Feed Ends */}
        <Main />
      </div>
      {/* Main Body Ends */}
    </div>
  );
  }
}
export default Frame;