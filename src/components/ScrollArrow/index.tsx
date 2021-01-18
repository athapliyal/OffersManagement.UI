import React, { useState } from 'react';

import './scroll.scss';

export const ScrollArrow = () => {
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop)

    return (
        <div className="scrollTop" onClick={scrollTop}>
            <i className="fas fa-arrow-up fa-2x"></i>
        </div>
    );
}

export default ScrollArrow;