import PropTypes from 'prop-types';
import React, { Component, Children, cloneElement } from 'react';
import Separator from '../Separator/Separator';

import './Tree.css';

export default class Tree extends Component {

  static propTypes = {
    children: PropTypes.node,
  }

  state = {
    visibleChildren: [],
  }

  toggleIndex(index) {
    this.setState((prevState) => {
      const { visibleChildren } = prevState;
      let newVisibleChildren = [];
      if (visibleChildren.includes(index)) {
        newVisibleChildren = visibleChildren.filter((i) => i !== index);
      } else {
        newVisibleChildren = [...visibleChildren, index];
      }

      return {
        ...prevState,
        visibleChildren: newVisibleChildren,
      };

    });
  }

  render() {
    const { children } = this.props;
    const { visibleChildren } = this.state;

    const mappedChildren = Children.map(children, (child, index) => {

      if (child.type.displayName === 'TreeChild') {
        return cloneElement(child, { isVisible: visibleChildren.includes(index) });
      }

      if (child.type.displayName === 'TreeParent') {
        return cloneElement(child, {
          onToggle: () => this.toggleIndex(index + 1),
          isVisible: visibleChildren.includes(index + 1),
        });
      }

    });

    return (
      <div className="ax-tree">
        <div className="ax-tree__guideline">
          <Separator borderStyle="dotted" direction="vertical"/>
        </div>
        { mappedChildren }
      </div>
    );
  }
}
