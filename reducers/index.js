import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import {Router, routerReducer, Route, Container, Animations, Schema} from 'react-native-redux-router'
import category from './category'
import shares from './shares'
import user from './user'

export default combineReducers({
    routerReducer,
    category,
    shares,
    user,
})