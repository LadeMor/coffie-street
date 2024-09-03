import React, {ReactNode} from 'react';

import "./Container.scss";

interface ContainerProps {
    children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({children}) => {
    return(
    <div className='container'>
        <div className='main-wrapper'>
            {children}
        </div>
    </div>
    );
}

export default Container;