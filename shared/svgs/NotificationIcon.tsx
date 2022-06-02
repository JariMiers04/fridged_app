import * as React from 'react';
import Svg, { Defs, Path, SvgProps } from 'react-native-svg';

export default function SvgComponent(props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> & Readonly<SvgProps> & Readonly<{ children?: React.ReactNode; }>){
    return(
        <Svg width='24' height='24' viewBox="0 0 50 50" {...props}>
    <Defs>
    </Defs>
    <Path id="Icon_awesome-exclamation-circle" data-name="Icon awesome-exclamation-circle" fill="#fc704d"
        d="M48.72,24.36A24.36,24.36,0,1,1,24.36,0h0A24.36,24.36,0,0,1,48.72,24.36ZM24.36,29.27a4.52,4.52,0,1,0,4.52,4.52,4.52,4.52,0,0,0-4.52-4.52ZM20.07,13l.73,13.36A1.17,1.17,0,0,0,22,27.49h4.77a1.18,1.18,0,0,0,1.18-1.11L28.65,13a1.18,1.18,0,0,0-1.11-1.24H21.25A1.18,1.18,0,0,0,20.07,13V13Z" />
    </Svg>
    );
}