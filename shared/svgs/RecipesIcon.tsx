import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export default function SvgComponent(props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> & Readonly<SvgProps> & Readonly<{ children?: React.ReactNode; }>) {
  return (
       <Svg width='33' height='33' viewBox="0 0 24 24" {...props}>

<Path d="M11.47,0.64C11.46,0.29,11.06,0,10.6,0c-0.46,0-0.88,0.29-0.89,0.64l0,0V5.3H9.12V0.64
	C9.12,0.29,8.71,0,8.25,0C7.78,0,7.36,0.29,7.36,0.64V5.3H6.77V0.64C6.77,0.29,6.36,0,5.89,0S5.01,0.29,5.01,0.64
	c0,1.78,0,3.56,0,5.34v0.1l0,0l0,0c0.06,1.34,1.03,2.47,2.35,2.73v4.35c0,0.09,0.07,0.16,0.16,0.16h1.43c0.09,0,0.16-0.07,0.16-0.16
	V8.81c1.28-0.26,2.24-1.33,2.35-2.63v-0.6L11.47,0.64L11.47,0.64z" fill="#494949"/>
<Path d="M9.25,13.96H7.23C6.76,14,6.41,14.4,6.45,14.87v7.04c-0.15,0.99,0.53,1.92,1.52,2.07
	c0.99,0.15,1.92-0.53,2.07-1.52c0.03-0.18,0.03-0.37,0-0.55v-7.04C10.07,14.4,9.72,14,9.25,13.96z" fill="#494949"/>
<Path d="M18.28,0c-2.33,0-4.21,1.89-4.21,4.21v9.11h4.83c0.04,0,0.08-0.04,0.08-0.08V0.7c0,0,0,0,0,0
	C18.97,0.31,18.66,0,18.28,0L18.28,0l-0.09,13.96h-2.02c-0.47,0.04-0.82,0.45-0.78,0.91v7.04c-0.15,0.99,0.53,1.92,1.52,2.07
	c0.99,0.15,1.92-0.53,2.07-1.52c0.03-0.18,0.03-0.37,0-0.55v-7.04C19,14.4,18.65,14,18.19,13.96" fill="#494949"/>
  </Svg>
  );
}