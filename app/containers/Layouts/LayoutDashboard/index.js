import React from 'react';
import Headbar from '../Headbar';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import ContentHeader from '../ContentHeader';
import { Outlet } from 'react-router-dom';

function LayoutDashboard ({ children }) {
    return (
        <div className="hold-transition sidebar-mini layout-fixed">
            <div className="wrapper">
                <Headbar />
                <Sidebar />
                <div className="content-wrapper">
                    <ContentHeader />
                    {/* Main content */}
                    <section className="content">
                        <div className="container-fluid">
                            {children}
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default LayoutDashboard;