// Import Files
import React from 'react';

import NavigationBar from './NavigationBar';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <NavigationBar />
        {this.props.children}
        test
      </div>
    );
  }
};

export default App;