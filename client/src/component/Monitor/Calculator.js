import React, { Component } from 'react';


class Calculator extends Component {

    showProduct(orders) {
        if (!orders || orders.lenght === 0) {
            
            return (<li className="text-right text-muted title">ไม่มีสินค้าค่ะ</li>)
            
        }
        else {
           return  orders.map(
                order => {
                    return (<li className="text-right text-success title">
                        {order.product.productName} x {order.quantity} = {order.product.unitPrice * order.quantity}
                        <button className="btn btn-light btn-sm">ลบ</button> </li>)
                }
            )
        }
    }

    render() {
        return (
            <div>
                <h1 className='text-right'>{this.props.totalPrice}</h1>
                <hr />
                <ul className="list-unstyled">
                    {this.showProduct(this.props.orders)}
                </ul>
                <hr />
                <button className="btn btn-block btn-danger title">ยืนยัน</button>
                <button className="btn btn-block btn-secondary title">ยกเลิก</button>
            </div>
        )
    }
}
export default Calculator;