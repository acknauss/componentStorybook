import React, { useState, useRef, useEffect } from 'react';
import { SwitchTransition, CSSTransition } from "react-transition-group";

import './_interactiveSlider.scss';

const InteractiveSlider = () => {
    const [loggedin, setLoggedin] = useState(true);
    const [page, setPage] = useState(0);
    const LoginPage = () => {
        return (<button onClick={() => { setLoggedin(false); setPage(1) }}>login</button>)
    }

    const PageOne = () => {
        return (
            <div>
                <p>page one</p>
                <button className="next-btn" onClick={() => setPage(2)}>next</button>
            </div>

        )
    }

    const PageTwo = () => {
        return (
            <div>
                <p>page two</p>
                <button className="back-btn" onClick={() => setPage(1)}>back</button>
            </div>

        )
    }

    return (
        <React.Fragment>
            <div className="frame-parent">
                <React.Fragment>
                        <SwitchTransition>
                            <CSSTransition
                                key={page}
                                timeout={750}
                                classNames={'fade'}>
                            <div className="main">
                                <div className="hidden-gray"></div>
                                    <div className="mainContent">
                                        {loggedin ? (
                                            <LoginPage />
                                        ) : (
                                            <div className={`pages page-`+page}>

                                               {page === 1 ? (
                                                    <PageOne />
                                                ) : (
                                                        <PageTwo />
                                                    )}
                                            </div>
                                            )}
                                    </div>        
                            </div>
                            </CSSTransition>
                        </SwitchTransition>
                        </React.Fragment>
                       
            </div>
        </React.Fragment >
    )
    
}

export default InteractiveSlider;