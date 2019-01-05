import React, { Component } from 'react'

class ProductItem extends Component {
    
    
    render() {

        
        return (
            <div className="card" style={{ width: '14rem'}}>
                <img className="card-img-top" src={this.props.product.thumbnail} alt="CardImage" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.product.productName}</h5>
                    <p className="card-text">ราคา : {this.props.product.unitPrice}</p>
                    <button type="button" className="btn btn-success btn-block" onClick={() => this.props.onAddOrder(this.props.product)}>ซื้อ</button>
                    
                </div>
            </div>
        )
    }
}
export default ProductItem;