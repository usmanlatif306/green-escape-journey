import React from 'react';
import Typed from "react-typed";


const Header = () => {
    return (<>
        <div className="header-wraper">
            <div className="header-overlay">
                <div className="main-info">
                    <h1>Wellcom To Green Escape Journey</h1>
                    <Typed
                        className="typed-text"
                        strings={["For Entertainment", "For Relaxation", "For Pleasure", "For Refreshment"]}
                        typeSpeed={60}
                        backSpeed={80}
                        loop
                    />
                </div>
            </div>
        </div>
    </>
    )
}

export default Header
