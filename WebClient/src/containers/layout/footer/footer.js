import React, { Component } from 'react';
import PropTypes from 'prop-types';
const propTypes = {
  children: PropTypes.node,
};
const defaultProps = {};
class DefaultFooter extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;
    return (
      <React.Fragment>
        <span>Chấn Đông &copy; 2019</span>
        <span className="ml-auto">Designed by <a href="https://www.facebook.com/trantien489">Tien Tran</a></span>
      </React.Fragment>
    );
  }
}
DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;
export default DefaultFooter;
