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
            .catch((error) => {})
        }
        getDetail(id){
            axios.get(Api('Actions','get', `%22action_id%22:%22${id}%22`))
            .then((response) => {
                this.pushSharesDetail(response.data[0].result)
            })
            .catch((error) => {})
        }
        render() {
            return <ComposedComponent getDetail={this.getDetail} getList={this.getList} {...this.props} {...this.state} />;
        }
    }
    return SharesHoc
}
export default SharesHoc;