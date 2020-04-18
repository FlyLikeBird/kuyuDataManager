import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Menu, Table, Tag } from 'antd';
import { actions } from '../../actions/productActions'


const { get_products } = actions;
const { SubMenu } = Menu;

class ProductManager extends PureComponent {
    componentDidMount(){
        this.props.onFetchProducts();
    }

    render(){
        var { products, columns, isLoading } = this.props;
        return (
            <div >
                <Table columns={columns} dataSource={products} scroll={{ y: 240 }}/>
                <div 
            </div>
        )
    }
}

ProductManager.propTypes = {
    products:PropTypes.array.isRequired,
    columns:PropTypes.array,isRequired,
    isLoading:PropTypes.bool.isRequired,
    onFetchProducts:PropTypes.func.isRequired
};

function mapStateToProps(state) {
    console.log(state);
    return {
        products:state.products.data,
        columns:state.products.columns,
        isLoading:state.products.isLoading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onFetchProducts:bindActionCreators(get_products, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductManager);