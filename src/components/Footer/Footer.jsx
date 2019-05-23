/*eslint-disable*/
import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer
        className={
          "footer" +
          (this.props.transparent !== undefined ? " footer-transparent" : "")
        }
      >
        <div
          className={
            "container" + (this.props.fluid !== undefined ? "-fluid" : "")
          }
        >
          <nav className="pull-left">
            <ul>
              <li>
                <a href="#dashboard">Home</a>
              </li>
              <li>
                <a href="#atendimento">Atendimento</a>
              </li>
              <li>
                <a href="#laudos">Portfolio</a>
              </li>
              <li>
                <a href="#financeiro">Blog</a>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; {1900 + new Date().getYear()}{" "}
            <a href="blizz" target="_blank">
              Blizz Saude
            </a>
            , Gestão simplificada <i className="fa fa-heart heart" /> como deve
            ser.
          </p>
        </div>
      </footer>
    );
  }
}
export default Footer;
