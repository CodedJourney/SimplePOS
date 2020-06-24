// Importing Files
import React from 'react';
import { connect } from 'react-redux';

import BrowserHistory from '../BrowserHistory';
import { signout } from '../actions/index';

class NavigationBar extends React.Component {
  onNavClick = (url, e) => {
    const children = e.target.parentElement.children;
    for (let i = 0; i < children.length - 1; i++) {
      children[i].className = 'item';
    }
    e.target.className += ' active';
    BrowserHistory.push(url);
  }

  renderRightNav = () => {

  }

  render() {
    console.log(this.props);
    return (
      <div className='NavigationBar'>
        <div className="ui secondary pointing menu">
          <a href='/' className="item active">
            Home
          </a>
          <a onClick={() => BrowserHistory.push('/inventory')} className="item">
            Inventory
          </a>
          <a href='/orders' className="item">
            Orders
          </a>
          <div className="right menu">
            <div onClick={(e) => this.onNavClick('/signin', e)} className="ui item">
              Signin
          </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
}

export default connect(mapStateToProps, { signout })(NavigationBar);