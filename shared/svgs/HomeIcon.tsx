import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export default function SvgComponent(props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> & Readonly<SvgProps> & Readonly<{ children?: React.ReactNode; }>) {
  return (
       <Svg width='33' height='33' viewBox="0 0 24 24" {...props}>

  <Path d="M16.9,24c-1.69,0-3.05-1.37-3.05-3.06c0,0,0,0,0-0.01v-4.1c-0.01-1.68,1.34-3.06,3.03-3.07h4.07
	c1.69,0.01,3.05,1.38,3.05,3.07v4.09c0,1.69-1.36,3.06-3.05,3.07L16.9,24z M3.05,24C1.36,23.99,0,22.62,0,20.93v-4.09
	c-0.01-1.69,1.35-3.07,3.04-3.07H7.1c1.68,0,3.05,1.37,3.05,3.05v4.11c0.01,1.69-1.35,3.06-3.03,3.07c0,0,0,0-0.01,0
	C7.11,24,3.05,24,3.05,24z M16.9,10.24c-1.68,0-3.05-1.37-3.05-3.05V3.07C13.84,1.39,15.2,0.01,16.89,0c0,0,0,0,0.01,0h4.06
	c1.69,0.01,3.05,1.38,3.05,3.07v4.09c0.01,1.69-1.36,3.06-3.04,3.07H16.9z M3.05,10.24C1.36,10.23,0,8.86,0,7.17v-4.1
	C0,1.38,1.36,0.01,3.05,0H7.1c1.69,0,3.05,1.37,3.05,3.06c0,0,0,0,0,0.01v4.1c0.01,1.68-1.34,3.06-3.03,3.07L3.05,10.24L3.05,10.24z" fill="#494949"/>
  </Svg>
  );
}