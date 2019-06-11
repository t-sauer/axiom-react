import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Button from '../Button/Button';
import ButtonIcon from '../Button/ButtonIcon';
import Separator from '../Separator/Separator';

import './TreeParent.css';

export default class TreeParent extends Component {

  static propTypes = {
    children: PropTypes.node,
    isVisible: PropTypes.bool,
    onToggle: PropTypes.func,
  }

  render() {
    const { children, onToggle, isVisible } = this.props;
    const button = isVisible ? 'minus' : 'plus';

    return (
      <div className="ax-tree-parent">
        <div className="ax-tree-parent__button">
          <Button onClick={ onToggle } shape="circle" size="tiny" style="secondary">
            <ButtonIcon name={ button } size="0.7rem" />
          </Button>
          <div className="ax-tree-parent__guideline">
            <Separator borderStyle="dotted"/>
          </div>
        </div>
        { children }
      </div>
    );
  }
}
