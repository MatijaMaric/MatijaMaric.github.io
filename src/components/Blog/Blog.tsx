import React from 'react';

import './Blog.scss';

class Blog extends React.Component {
  public render(): React.ReactNode {
    return (
      <div className="Blog">
        <div className="Blog__title">BLOG</div>
        <div className="Blog__body">glug</div>
      </div>
    );
  }
}

export default Blog;
