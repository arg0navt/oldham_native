import React, { Component } from 'react';
import axios  from 'axios';
import { Api } from '../config'

const SharesHoc = (ComposedComponent) => {
    class SharesHoc extends Component{
        getList(){
            axios.get(Api('Actions','get'))
            .then((response) => {
                this.pushShares(response.data[0].result)
            })
            .catch((error) => {console.log(error)})
        }
        render() {
            return <ComposedComponent getList={this.getList} {...this.props} {...this.state} />;
        }
    }
    return SharesHoc
}
export default SharesHoc;