import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import {Router, routerReducer, Route, Container, Animations, Schema} from 'react-native-redux-router'
import nav from './nav'
import category from './category'
import shares from './shares'

export default combineReducers({
    routerReducer,
    category,
    shares,
    nav,
})