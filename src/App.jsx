import { useState } from "react";
import "./style.css"

function App() {
  return (
    <>
      {/* <style>
        {
          `
        .container{
          display: flex;
          justify-content: center;
          flex-direction: column;
          max-width: 800px;
          padding-left: 10px;
          padding-right: 10px;
          margin: auto;
        }
        @import url(https://fonts.googleapis.com/css?family=Raleway:400);
        .snip1457 {
          font-family: 'Raleway', Arial, sans-serif;
          border: none;
          background-color: #5666a5;
          border-radius: 5px;
          color: #ffffff;
          cursor: pointer;
          padding: 0px 30px;
          display: inline-block;
          margin: 15px 30px;
          text-transform: uppercase;
          line-height: 46px;
          font-weight: 400;
          font-size: 1em;
          outline: none;
          position: relative;
          overflow: hidden;
          font-size: 16px;
          border-radius: 23px;
          letter-spacing: 2px;
          -webkit-transform: translateZ(0);
          -webkit-transition: all 0.35s ease;
          transition: all 0.35s ease;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
        }
        .snip1457:before {
          opacity: 0;
          content: "";
          position: absolute;
          top: 0px;
          bottom: 0px;
          left: 0px;
          right: 0px;
          border-radius: inherit;
          background-color: #ffffff;
          -webkit-transition: all 0.3s;
          transition: all 0.3s;
          -webkit-transform: translateY(100%);
          transform: translateY(100%);
        }
        .snip1457:after {
          position: absolute;
          top: 0px;
          bottom: 0px;
          left: 0px;
          right: 0px;
          border: 5px solid #5666a5;
          content: '';
          border-radius: inherit;
        }
        .snip1457:hover,
        .snip1457.hover {
          background-color: #5666a5;
          color: #ffffff;
        }
        .snip1457:hover:before,
        .snip1457.hover:before {
          -webkit-transform: translateY(0%);
          transform: translateY(0%);
          opacity: 0.25;
        }
        `
        }
      </style>
      <div className="App">
        <div className='container'>
          <a className='login ' href="https://sgstockexchange.com/login">
            <button className='snip1457'>Đăng nhập</button>
          </a>
          <a className='resgister ' href="https://sgstockexchange.com/register?ref=DL10">
            <button className='snip1457'>Đăng ký</button>
          </a>
        </div>
      </div> */}
      <div className="container">
        <div className="wrapper">
          <img
            src="./assets/bicrypto-logo.png"
            alt="Bi Crypto Logo"
            className="logo"
          />

          <div className="form-container">
            {/* <h3>LOGIN HERE</h3> */}
            <form action="" className="form">
              {/* <input type="text" placeholder="Email address" />
              <input type="text" placeholder="Password" /> */}
              <a href="https://sgstockexchange.com/login?ref=DL10">
              <button>
                LOGIN &nbsp; <span className="fa fa-paper-plane"></span>
              </button>
              </a>
              <a href="https://sgstockexchange.com/register?ref=DL10">
              <button>
                SIGNUP &nbsp; <span className="fa fa-paper-plane"></span>
              </button>
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
