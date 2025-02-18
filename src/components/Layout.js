/**
 * Layout
 * @summary This component gives basic styling to the structure of the page.
 * Will help keep the site's identity consistent throughout pages.
 * Header will be present in all pages to provide navigation.
 * {props.children} is to display all other components that inside Layout.
 */

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/index.css';


const layoutStyle = {
    backgroundColor: 'whitesmoke',
    margin: 20,
    padding: 20,
    border: '1px solid #DDD',
    borderRadius: 5,
    minHeight: '45vh'
};

/**
 * @param props consists of the components between <Layout> *props* </Layout> tags
 * @returns Layout component with Header and formatted page content
 */
const Layout = props => {
    return (
        <div>
            <Header /> {/* will be displayed across all pages */}
            <div style={layoutStyle}>
                {props.children} {/* page's actual content */}
            </div>
            <Footer /> {/* will be displayed on all pages */}
        </div>
    );
};

export default Layout;