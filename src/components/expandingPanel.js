import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './_expandingPanel.scss';
const ExpandingPanel = ({ title, subtitle, isDefaultOpen, children, className = '' }) => {
    const measuredRef = useRef();
    const [isOpen, setIsOpen] = useState(isDefaultOpen);
    const [height, setHeight] = useState(0);
    const [firstRender, setFirstRender] = useState(false);
    const [getContext, setNewContext] = useState(children);
    useEffect(() => {
            setFirstRender(true);
        return;
    }, []);
    useEffect(() => {
        const { current } = measuredRef;
        // if we are adding more context to the card
        if(current.scrollHeight > current.clientHeight && firstRender) {
            setHeight(current.scrollHeight);
        }  else {
            setHeight(current.clientHeight);
        }
    })
        
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
        
    useEffect(() => {
        (isOpen) ? measuredRef.current.style.maxHeight = Math.round(height + 100) + 'px' : measuredRef.current.style.maxHeight = '0px';

    }, [isOpen, height])
        
    return (
        <React.Fragment>
            <p>total Height is: {height}</p>
            <div className={`expandingPanel ${className}`}>
                <div className="expandingPanel-header">
                    <div className="expandingPanel-intro">
                        <h2 className="expandingPanel-title">{title}</h2>
                        <p className="expandingPanel-subtitle">{subtitle}</p>
                    </div>
                    <CSSTransition in={isOpen} timeout={0} classNames="panel-btn" appear>
                        <button className="expandingPanel-toggleBtn"
                            type="button"
                            onClick={toggleOpen}>
                            ^
                    </button>
                    </CSSTransition>
                </div>
                <CSSTransition in={isOpen} timeout={0} classNames="cardDetails" appear>
                    <div className="expandingPanel-cardBody" ref={measuredRef}>
                        <div className="expandingPanel-cardBodyDivider" />
                        {getContext}
                    </div>
                </CSSTransition>
            </div>

            <div>
                <button onClick={() => setNewContext('a very long long long long thing. a very long long long long thing.a very long long long long thing.a very long long long long thing.a very long long long long thing.a very long long long long thing.a very long long long long thing.a very long long long long thing.a very long long long long thing.a very long long long long thing.a very long long long long thing.a very long long long long thing.a very long long long long thing.a very long long long long thing.a very long long long long thing.a very long long long long thing.a very long long long long thing.a very long long long long thing.a very long long long long thing.a very long long long long thing.a very long long long long thing.a very long long long long thing.a very long long long long thing.a very long long long long thing.a very long long long long thing.a very long long long long thing.a very long long long long thing.a very long long long long thing. ')}>
                    set text to longer text 
                </button>
            </div>
        </React.Fragment>
    );
};
export default ExpandingPanel;
