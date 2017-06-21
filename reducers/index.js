import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import nav from './nav'

export default combineReducers({
    nav,
    name:'home'
})