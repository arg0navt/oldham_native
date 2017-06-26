import React, { Component } from 'react';
import Home from '../pages/Home';
import ComeIn from '../pages/ComeIn';
import Login from '../pages/Login';
import Registration from '../pages/Registration';

export default routes = [
    {name: 'Home', component: Home, index: 0},
    {name: 'ComeIn', component: ComeIn, index: 1},
    {name: 'Login', component: Login, index: 2},
    {name: 'Registration', component: Registration, index: 3},
];
