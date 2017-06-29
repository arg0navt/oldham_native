import React, { Component } from 'react';
import axios  from 'axios';
import { Api } from '../config'

const CatalogHoc = (ComposedComponent) => {
    class CatalogHoc extends Component{
        getType(){
            axios.get(Api('Pwa','getCategories'))
            .then((response) => {
                this.pushCategory(response.data[0].result)
            })
            .catch((error) => {})
        }
        getItems(id){
            axios.get(Api('Pwa','getItems',`%22categoryId%22:${id}`))
            .then((response) => {
                this.pushItems(response.data[0].result)
            })
            .catch((error) => {})
        }
        getDetail(id){
            axios.get(Api('Pwa', 'getItem', `%22itemId%22:${id}`))
            .then((response) => {
                this.pushDetail(response.data[0].result)
            })
            .catch((error) => {})
        }
        render() {
            return <ComposedComponent getDetail={this.getDetail} getItems={this.getItems} getType={this.getType} {...this.props} {...this.state} />;
        }
    }
    return CatalogHoc
}
export default CatalogHoc;