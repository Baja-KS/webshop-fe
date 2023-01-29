import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = () => (
  <header className="section-header">
  {/*<section className="header-main">*/}
  {/*<div className="container">*/}
  {/*    <div className="row gy-3 align-items-center">*/}
  {/*    <div className="col-lg-2 col-sm-4 col-4">*/}
  {/*        <a href="http://therichpost.com" className="navbar-brand">*/}
  {/*        RichEcom*/}
  {/*        </a> */}
  {/*    </div>*/}
  {/*    <div className="order-lg-last col-lg-5 col-sm-8 col-8">*/}
  {/*        <div className="float-end">*/}
  {/*        <a href="#" className="btn btn-light"> */}
  {/*            <i className="fa fa-user"></i>  <span className="ms-1 d-none d-sm-inline-block">Sign in  </span> */}
  {/*        </a>*/}
  {/*        <a href="#" className="btn btn-light"> */}
  {/*            <i className="fa fa-heart"></i>  <span className="ms-1 d-none d-sm-inline-block">Wishlist</span>   */}
  {/*        </a>*/}
  {/*        <a data-bs-toggle="offcanvas" href="#offcanvas_cart" className="btn btn-light"> */}
  {/*            <i className="fa fa-shopping-cart"></i> <span className="ms-1">My cart </span> */}
  {/*        </a>*/}
  {/*            </div>*/}
  {/*    </div>*/}
  {/*    */}
  {/*    </div> */}
  {/*</div> */}
  {/*</section> */}


      <section className="bg-success py-5">
          <div className="container">
              <h2 className="text-light">Big Tehc Only</h2>
              <ol className="breadcrumb ondark mb-0">
                  <li className="breadcrumb-item active" aria-current="page">Catalog</li>
              </ol>
          </div>
      </section>
      <nav className="navbar navbar-light bg-dark navbar-expand-lg">
          <div className="container">
              <button className="navbar-toggler border" type="button" data-bs-toggle="collapse" data-bs-target="#navbar_main">
                  <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbar_main">
                  <ul className="navbar-nav">
                      <li className="nav-item">
                          <a className="nav-link text-light ps-0" href="#"> Categories </a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link text-light" href="#">Hot offers</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link text-light" href="#">Gift boxes</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link text-light" href="#">Projects</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link text-light" href="#">Menu item</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link text-light" href="#">Menu name</a>
                      </li>
                      <li className="nav-item dropdown">
                          <a className="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown">
                              Others
                          </a>
                          <ul className="dropdown-menu">
                              <li> <a className="dropdown-item" href="#">Submenu one </a> </li>
                              <li> <a className="dropdown-item" href="#">Submenu two</a> </li>
                              <li> <a className="dropdown-item" href="#">Submenu three</a> </li>
                          </ul>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
</header> 

);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
