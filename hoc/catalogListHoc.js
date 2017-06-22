import React, { Component } from 'react';
import axios  from 'axios';
import { Api } from '../config'

const CataloListHoc = (ComposedComponent) => {
    class CataloListHoc extends Component{
        getType(){
            axios.get(Api('Pwa','getCategories'))
            .then((response) => {
                this.pushCategory(response.data[0].result)
            })
            .catch((error) => {console.log(error)})
        }
        render() {
            return <ComposedComponent getType={this.getType} {...this.props} {...this.state} />;
        }
    }
    return CataloListHoc
}
export default CataloListHoc;