var React = require('react');
var Link = require('react-router-dom').Link;

class Home extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <h1>Github Battle: Battle your friends... and stuff.</h1>
        <Link className='button' to='/battle'>Battle</Link>
        <p>(I built this as a React.js refresher using Tyler McGinnis' <a href="https://reacttraining.com/online/react-fundamentals" target="_blank">awesome React Fundamentals course</a>).</p>
      </div>
    )
  }
}

module.exports = Home;