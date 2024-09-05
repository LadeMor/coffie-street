import React, { ReactNode } from 'react';

import "./TransparentBorderBox.scss";

interface ContainerProps {
    children: ReactNode;
    className: string;
    borderRadius: string;
}


const TransparentBorderBox: React.FC<ContainerProps> = ({ children, className, borderRadius }) => {

    const addPixelsToBorderRadius = () => {
        return parseInt(borderRadius.substring(0, borderRadius.length - 2)) + 6;
    }
  
    return (
        <div className={`coffie-label-border ${className}`} style={{borderRadius: borderRadius}}>
            {children}
            <div className="border" style={{borderRadius: `${addPixelsToBorderRadius()}px`}}></div>
        </div>
    );
}

export default TransparentBorderBox;