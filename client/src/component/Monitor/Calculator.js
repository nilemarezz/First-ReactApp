import React, { Component } from 'react';


class Calculator extends Component {

    showProduct(orders) {
        if (!orders || orders.lenght === 0) {
            console.log("no order")
            return (<li className="text-right text-muted title">ไม่มีสินค้าค่ะ</li>)
            
        }
        else {
           return  orders.map(
                order => {
                    return (<li className="text-right text-success title" key={order.product.id}>
                        {order.product.productName} x {order.quantity} = {order.product.unitPrice * order.quantity}
                        <button className="btn btn-light btn-sm" onClick={() => this.props.onDelOrder(order.product)}>ลบ</button> </li>)
                }
            )
        }
    }

    render() {
        return (
            <div >
                <h1 className='text-right' style={{marginTop:'80px;'}}>{this.props.totalPrice}</h1>
                <hr />
                <ul className="list-unstyled">
                    {this.showProduct(this.props.orders)}
                </ul>
                <hr />
                <button className="btn btn-block btn-danger title" onClick={()=>this.props.onConfirm()}>ยืนยัน</button>
                <button className="btn btn-block btn-secondary title" onClick={() => this.props.onCancelOrder()}>ยกเลิก</button>
            </div>
        )
    }
}
export default Calculator;