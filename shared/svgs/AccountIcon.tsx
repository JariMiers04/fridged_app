import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export default function SvgComponent(props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> & Readonly<SvgProps> & Readonly<{ children?: React.ReactNode; }>) {
  return (
       <Svg width='33' height='33' viewBox="0 0 24 24" {...props}>

<Path d="M5.64,6.32v0.04c0.01,3.48,2.83,6.31,6.32,6.32c3.5,0.01,6.35-2.82,6.36-6.32
	C18.33,2.86,15.5,0.01,12,0C8.5-0.01,5.65,2.82,5.64,6.32L2.38,19.88c0-3.27,4.43-4.09,9.62-4.09c5.22,0,9.62,0.85,9.62,4.12
	S17.19,24,12,24c-5.22,0.01-9.62-0.84-9.62-4.12" fill="#494949"/>
  </Svg>
  );
}