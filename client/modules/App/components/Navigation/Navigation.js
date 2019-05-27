import React from 'react';
import PropTypes from 'prop-types';

const Navigation = (props, context) => (<div>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/posts">Posts</a></li>
    </ul>
  </div>);

Navigation.propTypes = {
};

export default Navigation;
