import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import category from './category'
import shares from './shares'
import user from './user'
import error from './error'

export default combineReducers({
    category,
    shares,
    user,
    error
})