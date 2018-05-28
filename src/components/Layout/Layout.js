import React from 'react';
import Wrapper from '../../hoc/Wrapper';
import classes from './Layout.css';

const layout = (props) => {
  return (
    <Wrapper>
      <div>Blah, blah, blah</div>
      <main className={classes.content}>
        {props.children}
      </main>
    </Wrapper>
  )
};

export default layout;
