import React from 'react';
import Flex from './Flex';

const CenteredContent = ({
  style: customStyle,
  children,
  ...props
}) => (
  <Flex
    style={{ ...customStyle, alignItems: 'center', justifyContent: 'center' }}
    {...props}
  >
    <Flex.Content>
      {children}
    </Flex.Content>
  </Flex>
);

export default CenteredContent;
