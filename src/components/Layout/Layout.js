import React from 'react';
import Wrapper from '../../hoc/Wrapper';

const layout = (props) => {
  return (
    <Wrapper>
      <div>Blah, blah, blah</div>
      <main>
        {props.children}
      </main>
    </Wrapper>
  )
};

export default layout;
