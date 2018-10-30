import React from "react";
import "../index.scss";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Admin = () => (
    <div className="admin">
        <Header />
        <Sidebar />
        <main></main>   
    </div>
);

export default Admin;