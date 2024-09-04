import React, { ReactNode } from 'react';

import "./TransparentBorderBox.scss";

interface ContainerProps {
    children: ReactNode;
    className: string;
    borderRadius: string;
}


const TransparentBorderBox: React.FC<ContainerProps> = ({ children, className, borderRadius }) => {
    return (
        <div className={`coffie-label-border ${className}`} style={{borderRadius: borderRadius}}>
            {children}
            <div className="border" style={{borderRadius: borderRadius}}></div>
        </div>
    );
}

export default TransparentBorderBox;