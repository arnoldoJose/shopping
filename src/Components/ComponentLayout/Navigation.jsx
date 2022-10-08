import React, { useRef,useContext } from 'react'
import { Link } from "react-router-dom";
import { closeMenu } from "../../assets/menu-animation";
import { CRMCarContext } from "../../UseContext/CartContext";

const Navigation = () => {
    
  const { addCart } = useContext(CRMCarContext);

  const menu = useRef();
  const animationOpen = useRef();
  const animationClose = useRef();

  return (
    <nav className="nav">
          <div className="container-logo">
            <label htmlFor="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="store-icon"
                viewBox="0 0 576 512"
              >
                <path d="M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0H109.6C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9l-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3V384H128V250.6c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3V384v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V384 252.6c-4 1-8 1.8-12.3 2.3z" />
              </svg>
            </label>
          </div>
          <div className="container-movil-icons">
            <Link to={"/user"} className="icon-login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon-user"
                viewBox="0 0 448 512"
              >
                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
            </Link>
            <Link to={"/mycart"} data-count={addCart} className="icon-shopping">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon-car"
                viewBox="0 0 576 512"
              >
                <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z" />
              </svg>
            </Link>
            <label htmlFor="menu" className="animation-menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="menu-movil-icon"
                viewBox="0 0 448 512"
                ref={animationOpen}
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="menu-animate-close"
                viewBox="0 0 320 512"
                ref={animationClose}
              >
                <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
              </svg>
            </label>
          </div>
          <input
            type="checkbox"
            onChange={(e) => closeMenu(e, menu, animationClose, animationOpen)}
            className="movil-menu"
            name=""
            id="menu"
          />
          <div className="container-menu" ref={menu}>
            <div className="container-title">
              <h3>E-commerce</h3>
            </div>
            <ul className="content-option">
              <li className="option">
                <label htmlFor="">option</label>
              </li>
              <li className="option">
                <label htmlFor="">option</label>
              </li>
              <li className="option">
                <label htmlFor="">option</label>
              </li>
            </ul>
          </div>
        </nav>
  )
}

export default Navigation