import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';

import './TreeChild.css';

export default class TreeChild extends Component {

  static propTypes = {
    children: PropTypes.node,
    isVisible: PropTypes.bool,
  }

  render() {
    const { children, isVisible } = this.props;

    const classes = classnames('ax-tree-child', {
      'ax-tree-child--visible': isVisible,
    });

    return <div className={ classes }>{ children }</div>;
  }
}
