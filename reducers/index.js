import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import category from './category'
import shares from './shares'
import user from './user'
import basket from './basket'
import price from './price'
import error from './error'

export default combineReducers({
    category,
    shares,
    user,
    basket,
    price,
    error
})