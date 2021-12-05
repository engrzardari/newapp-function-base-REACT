import React, { Component } from "react";
import PropTypes from "prop-types";

export class Footer extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="bg-dark">
        <div className="text-white container">
          <div className="row">
            <div className="col my-3">
              <h6 className="mx-3">Quick Links</h6>
              <a className="nav-link" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link" href="/about">
                About
              </a>
              <a className="nav-link" href="/general">
                General
              </a>
            </div>

            <div className="col my-3">
              <h6 className="mx-3">Quick Links</h6>
              <a className="nav-link" href="/business">
                Business
              </a>
              <a className="nav-link" href="/entertainment">
                Entertainment
              </a>
              <a className="nav-link" href="/health">
                Health
              </a>
            </div>    

            <div className="col my-3">
              <h6 className="mx-3">Quick Links</h6>
              <a className="nav-link" href="/science">
                Science
              </a>
              <a className="nav-link" href="/sports">
                Sports
              </a>
              <a className="nav-link" href="/technology">
                Technology
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center my-2 text-white">
              All Rights <a href="/">newsapp</a> are reserved  @ 2021
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
