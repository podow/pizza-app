import React from 'react';
import PropTypes from 'prop-types';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null; // eslint-disable-line
    return { statusCode };
  }

  static propTypes = {
    statusCode: PropTypes.number.isRequired
  };

  render() {
    switch (this.props.statusCode) {
      case 404:
        return <h1>Error occured on client</h1>;
      case 500:
        return <h1>Error occured on server</h1>;

      default:
        return (
          <p>
            {this.props.statusCode
              ? `An error ${this.props.statusCode} occurred on server`
              : 'An error occurred on client'}
          </p>
        );
    }
  }
}

export default Error;
