import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <img src="https://i.imgur.com/KDIDiSE.png" />
          <div>
            <span>Meu perfil</span>
            <i className="material-icons">account_circle</i>
          </div>
        </nav>
      </header>
      /**
       * <header id="header">
        <img id="header-logo" src="https://ibb.co/rb2JqPf" />
        <img id="header-user-logo" src="https://ibb.co/68hbC0T" />
      </header>
       */
    );
  }
}

export default Header;
