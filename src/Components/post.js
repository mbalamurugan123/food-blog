import axios from "axios";
import { FacebookShareButton,TwitterShareButton,TelegramShareButton,LinkedinShareButton } from "react-share";
import img1 from "./images/blog_img1.jpeg";

import React, { useState,useEffect } from "react";
function Main(){
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:8080/getValues')
          .then(response => {
              setQuotes(response.data);
          })
          .catch(error => {
              console.log(error);
          });
  }, []);

  // function componentDidMount(){
  //   let self = this;
  //   axios.get('http://localhost:8080/getValues')
  //     .then(function(data) {
  //       console.log(data);
  //       self.setState({post:data.data});
  //     });
  // }
  
  // {this.state.post.map(quote,id)=>{

  
    return (
      <div>
        
      {quotes.map(quote =>(
        <div className="post" key={quote.id}>
            <div className="post__header">
              <i className="material-icons sidebar__topAvatar"> account_circle </i>
              <div className="post__info">
                <h2>Balamurugan</h2>
                
                <img src={img1} className="img_post"></img>
                <p>{quote.name}</p>
              </div>
            </div>
            <div className="post__body">
              <p>{quote.recipe}</p>
            </div>
            <div className="feed__inputOptions">
              <div className="inputOption">
                <i style={{color: 'gray'}} className="material-icons"> thumb_up </i>
                <h4>Like</h4>
              </div>
              <div className="inputOption">
                <i style={{color: 'gray'}} className="material-icons"> comment </i>
                <h4>Comment</h4>
              </div>
              <div className="inputOption">
              <i class="fa fa-whatsapp"></i>
                <a class="whts" href="https://api.whatsapp.com/send?text=http://localhost:3000/frame" data-action="share/whatsapp/share">
            <h4>Share</h4>
        </a>
              </div>
              <div className="inputOption">
                <i style={{color: 'gray'}} className="material-icons"> send </i>
                <h4>Send</h4>
              </div>
            </div>
          </div>
          )
          
           )}
          </div>
    
  );
}
export default Main;

