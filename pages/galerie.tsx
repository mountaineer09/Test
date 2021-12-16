import Navbar from "../components/Navbar";
import Image from 'next/image';

const Galeries = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">


        <h1 className="main-title">Simple image overlay hover effects</h1>

        <div className="container">
          <h3 className="title">Text fadeIn bottom</h3>
          <div className="content">
            <a href="https://unsplash.com/photos/HkTMcmlMOUQ" >
              <div className="content-overlay"></div>
              <img className="content-image" src="\chalet.JPG" />
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">This is a title</h3>
                <p className="content-text">This is a short description</p>
              </div>
            </a>
          </div>
        </div>

        <div className="container">
          <h3 className="title">Text fadeIn top</h3>
          <div className="content">
            <a href="https://unsplash.com/photos/HkTMcmlMOUQ" >
              <div className="content-overlay"></div>
              <img className="content-image" src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362" alt="..." />
              <div className="content-details fadeIn-top">
                <h3>This is a title</h3>
                <p>This is a short description</p>
              </div>
            </a>
          </div>
        </div>

        <div className="container">
          <h3 className="title">Text fadeIn left</h3>
          <div className="content">
            <a href="https://unsplash.com/photos/HkTMcmlMOUQ" >
              <div className="content-overlay"></div>
              <img className="content-image" src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362" alt="..." />
              <div className="content-details fadeIn-left">
                <h3>This is a title</h3>
                <p>This is a short description</p>
              </div>
            </a>
          </div>
        </div>

        <div className="container">
          <h3 className="title">Text fadeIn right</h3>
          <div className="content">
            <a href="https://unsplash.com/photos/HkTMcmlMOUQ" >
              <div className="content-overlay"></div>
              <img className="content-image" src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362" alt="..." />
              <div className="content-details fadeIn-right">
                <h3>This is a title</h3>
                <p>This is a short description</p>
              </div>
            </a>
          </div>
        </div>

        <div className="container">
          <h3 className="title">Text fadeIn top left</h3>
          <div className="content">
            <a href="https://unsplash.com/photos/HkTMcmlMOUQ" >
              <div className="content-overlay"></div>
              <img className="content-image" src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362" alt="..." />
              <div className="content-details fadeIn-top fadeIn-left">
                <h3>This is a title</h3>
                <p>This is a short description</p>
              </div>
            </a>
          </div>
        </div>

        <div className="container">
          <h3 className="title">Text fadeIn top right</h3>
          <div className="content">
            <a href="https://unsplash.com/photos/HkTMcmlMOUQ" >
              <div className="content-overlay"></div>

              <img className="content-image" src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362" alt="..." />
              <div className="content-details fadeIn-top fadeIn-right">
                <h3>This is a title</h3>
                <p>This is a short description</p>
              </div>
            </a>
          </div>
        </div>

        <div className="container">
          <h3 className="title">Text fadeIn bottom left</h3>
          <div className="content">
            <a href="https://unsplash.com/photos/HkTMcmlMOUQ" >
              <div className="content-overlay"></div>
              <img className="content-image" src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362" alt="..." />
              <div className="content-details fadeIn-bottom fadeIn-left">
                <h3>This is a title</h3>
                <p>This is a short description</p>
              </div>
            </a>
          </div>
        </div>

        <div className="container">
          <h3 className="title">Text fadeIn bottom right</h3>
          <div className="content">
            <a href="https://unsplash.com/photos/HkTMcmlMOUQ" >
              <div className="content-overlay"></div>
              <img className="content-image" src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362" alt="..." />
              <div className="content-details fadeIn-bottom fadeIn-right">
                <h3>This is a title</h3>
                <p>This is a short description</p>
              </div>
            </a>
          </div>
        </div>

        <style jsx>{`

*, *:before, *:after{
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing:border-box;
    box-sizing: border-box;
  }
  
  body{
    background: #f9f9f9;
    font-size: 16px;
    font-family: 'Raleway', sans-serif;
  }
  
  .main-title{
    color: #2d2d2d;
    text-align: center;
    text-transform: capitalize;
    padding: 0.7em 0;
  }
  
  .container{
    padding: 1em 0;
    float: left;
    width: 50%;
  }
  @media screen and (max-width: 640px){
    .container{
      display: block;
      width: 100%;
    }
  }
  
  @media screen and (min-width: 900px){
    .container{
      width: 33.33333%;
    }
  }
  
  .container .title{
    color: #1a1a1a;
    text-align: center;
    margin-bottom: 10px;
  }
  
  .content {
    position: relative;
    width: 90%;
    max-width: 400px;
    margin: auto;
    overflow: hidden;
  }
  
  .content .content-overlay {
    background: rgba(0,0,0,0.7);
    position: absolute;
    height: 99%;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    -webkit-transition: all 0.4s ease-in-out 0s;
    -moz-transition: all 0.4s ease-in-out 0s;
    transition: all 0.4s ease-in-out 0s;
  }
  
  .content:hover .content-overlay{
    opacity: 1;
  }
  
  .content-image{
    width: 100%;
  }
  
  .content-details {
    position: absolute;
    text-align: center;
    padding-left: 1em;
    padding-right: 1em;
    width: 100%;
    top: 50%;
    left: 50%;
    opacity: 0;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-transition: all 0.3s ease-in-out 0s;
    -moz-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }
  
  .content:hover .content-details{
    top: 50%;
    left: 50%;
    opacity: 1;
  }
  
  .content-details h3{
    color: #fff;
    font-weight: 500;
    letter-spacing: 0.15em;
    margin-bottom: 0.5em;
    text-transform: uppercase;
  }
  
  .content-details p{
    color: #fff;
    font-size: 0.8em;
  }
  
  .fadeIn-bottom{
    top: 80%;
  }
  
  .fadeIn-top{
    top: 20%;
  }
  
  .fadeIn-left{
    left: 20%;
  }
  
  .fadeIn-right{
    left: 80%;
  }
`}</style>





























      </div>
    </div>
  );
}

export default Galeries;