import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../Base/Base';
import Icon from '../Icon/Icon';
import classnames from 'classnames';
import './Chip.css';

export default class Chip extends Component {
  static propTypes = {
    /** Apply active styling */
    active: PropTypes.bool,
    /** Colour of the Chip when active */
    activeColor: PropTypes.oneOf([
      'accent',
      'highlight',
      'success',
      'error',
      'forbidden-planet',
      'tiny-clanger',
      'critical-mass',
      'fantastic-voyage',
      'paradise-lost',
      'serene-sea',
      'event-horizon',
      'electric-dreams',
      'outer-limits',
      'giant-leap',
      'moon-lagoon',
      'space-invader',
      'extraterrestrial',
      'terra-form',
      'primeval-soup',
      'future-shock',
      'sun-maker',
      'new-horizon',
      'blast-off',
      'crash-course',
      'solar-rust',
      'ground-control',
      'space-oddity',
      'rocky-planet',
      'deep-thought',
      'luna-dust',
    ]).isRequired,
    /** Content for chip */
    children: PropTypes.node.isRequired,
    /** Disable interaction behaviour */
    disabled: PropTypes.bool,
    /** Name of the Icon located to the left of the main content */
    leftIcon: PropTypes.string,
    /** Metric content */
    metric: PropTypes.string,
    /** Name of the Icon located to the right of the main content or metric */
    rightIcon: PropTypes.string,
    /** Size of the chip */
    size: PropTypes.oneOf(['small', 'medium', 'large', 'huge']),
  };

  static defaultProps = {
    activeColor: 'accent',
    size: 'medium',
  };

  render() {

    const {
      active,
      activeColor,
      children,
      disabled,
      leftIcon,
      metric,
      rightIcon,
      size,
      ...rest
    } = this.props;

    const classes = classnames('ax-chip',
      `ax-chip--${size}`,
      `ax-chip-color--${activeColor}`,
      { 'ax-chip--active': active },
    );

    const iconClasses = classnames('ax-chip-icon',
      `ax-text--color-${activeColor}`
    );

    const metricClasses = classnames('ax-chip-metric',
      { 'ax-chip-metric--light': active && activeColor == 'accent' }
    );

    return (
      <Base className={ classes } disabled={ disabled } { ...rest }>
        { leftIcon && (<Icon className={ iconClasses } name={ leftIcon } /> ) }
        <Base className="ax-chip-label">{ children }</Base>
        { metric && (<Base className={ metricClasses }> { metric }</Base>) }
        { rightIcon && (<Icon className={ iconClasses } name={ rightIcon } />) }
      </Base>
    );
  }
}
