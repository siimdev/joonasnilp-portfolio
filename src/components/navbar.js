import React, { Component } from "react";
// import { Link } from "react-router-dom"

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      open: false,
      closeHover: false,
      shown: true
    };

    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
    window.addEventListener("scroll", this.handleScroll);
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
    window.removeEventListener("scroll", this.handleScroll);
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  handleScroll = () => {
    this.setState({
      open: false
    });
  };
  handleClickOutside = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({
        open: false
      });
    }
  };
  setWrapperRef(node) {
    this.wrapperRef = node;
  }
  openNav() {
    this.setState({
      open: true
    });
  }
  closeNav() {
    this.setState({
      open: false
    });
  }

  closeHover() {
    this.setState({
      closeHover: true
    });
  }

  closeNotHover() {
    this.setState({
      closeHover: false
    });
  }
  toggle() {
    this.setState({
      shown: !this.state.shown
    });
  }

  render() {
    const { width, closeHover } = this.state;
    const isMobile = width <= 991;
    let navbar = {};

    if (isMobile) {
      navbar = (
        <nav>
          <div ref={this.setWrapperRef} className="nav-wrapper container">
            <a className="nav-text-name center brand-logo" href="./#">
              Joonas Nilp
            </a>
            <a className="button-collapse" onClick={this.openNav}>
              <i className="material-icons">menu</i>
            </a>
            <ul
              className={`side-nav ${this.state.open ? "visible" : "hidden"}`}
              tabIndex="0"
              onBlur={this.closeNav}
            >
              <li>
                <a
                  className="nav-text"
                  onClick={this.closeNav}
                  onMouseEnter={this.closeHover.bind(this)}
                  onMouseLeave={this.closeNotHover.bind(this)}
                >
                  <i
                    className={`${
                      closeHover ? "white-color" : "black-color"
                    } material-icons left sideNavClose`}
                  >
                    close
                  </i>
                </a>
              </li>
              {/* <li>
                <Link className="nav-text" to="/meedia">
                  {" "}
                  Portfolio
              </Link>
              </li> */}

              {/* <li>
                <a className="nav-text" onClick={this.closeNav} href="./#minust">
                  Minust
                </a>
              </li>
              <li>
                <a className="nav-text" onClick={this.closeNav} href="./#millegaTegelen">
                  Näited
                </a>
              </li> */}
              <li>
                <a
                  className="nav-text"
                  onClick={this.closeNav}
                  href="./#kontakt"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </nav>
      );
    } else {
      navbar = (
        <nav>
          <div className="nav-wrapper container">
            <a className="nav-text-name" href="./#" role="button">
              Joonas Nilp
            </a>
            <ul
              className="right hide-on-sm-and-down"
              onClick={() => this.toggle()}
            >
              {/* <li>
                <Link className="nav-text" to="/meedia">
                  {" "}
                  Portfolio
              </Link>
              </li> */}

              {/* <li>
                <a className="nav-text" href="./#minust">
                  Minust
                </a>
              </li>
              <li>
                <a className="nav-text" href="./#millegaTegelen">
                  Millega tegelen
                </a>
              </li> */}
              <li>
                <a className="nav-text" href="./#kontakt">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </nav>
      );
    }

    return <div className="navbar-fixed">{navbar}</div>;
  }
}
