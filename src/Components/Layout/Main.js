import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet><h1>Default page text from main component</h1></Outlet>

        </div>
    );
};

export default Main;