import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import category from './category'
import shares from './shares'
import user from './user'

export default combineReducers({
    category,
    shares,
    user,
})