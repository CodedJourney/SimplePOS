// Import Files
import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  renderContent = () => {

  }

  render() {
    console.log(this.props);
    return (
      <div className="Home">
        This is the home page
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Home);