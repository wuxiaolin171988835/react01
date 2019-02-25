import React, { Component } from "react";
function Cart(props) {
  return (
    <table>
      <tbody>
        {props.cart.map(item => (
          <tr key={item.id}>
            <td>{item.text}</td>
            <td>
              {/* 有指定参数需要添加箭头函数，无指定参数可以直接调用addGood */}
              <button onClick={() => props.minusCount(item)}>-</button>
              {item.num}
              <button onClick={() => props.addCount(item)}>+</button>
            </td>
            <td>{item.price}</td>
            <td>￥{item.num * item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
class CartSample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goods: [
        {
          id: 1,
          text: "web全栈工程师",
          price: 666,
          num: 1
        },
        {
          id: 2,
          text: "php工程师",
          price: 888,
          num: 1
        }
      ],
      text: "",
      cart: []
    };
  }
  changeHandler(e) {
    this.setState({
      text: e.target.value
    });
  }
  /**
   * 新增商品
   */
  addGood = () => {
    this.setState(prevState => ({
      goods: [
        ...prevState.goods,
        {
          id: 3,
          text: prevState.text,
          price: 999,
          num: 1
        }
      ]
    }));
  };
  /**
   * 添加至购物车
   */
  addToCart = good => {
    const newCart = [...this.state.cart];
    const index = newCart.findIndex(item => item.text === good.text);
    const item = newCart[index];
    if (item) {
      item.num++;
      // newCart.splice(index, 1, { ...item, num: item.num + 1 });
    } else {
      newCart.push(good);
    }
    this.setState({
      cart: newCart
    });
  };
  /**
   * 增加商品数量
   */
  addCount = good => {
    const newCart = [...this.state.cart];
    const index = newCart.findIndex(item => item.text === good.text);
    const item = newCart[index];
    newCart.splice(index, 1, { ...good, num: good.num + 1 });
    this.setState({
      cart: newCart
    });
  };
  /**
   * 减少商品
   */
  minusCount = good => {
    const newCart = [...this.state.cart];
    const index = newCart.findIndex(item => item.text === good.text);
    const item = newCart[index];
    if (good.num > 1) {
      newCart.splice(index, 1, { ...good, num: good.num - 1 });
      this.setState({
        cart: newCart
      });
    }
  };
  render() {
    const { goods, cart } = this.state;
    const goodsList = goods.map(item => {
      return (
        <li key={item.id}>
          <span>
            {item.text}
            <button onClick={() => this.addToCart(item)}>加入购物车</button>
          </span>
        </li>
      );
    });
    return (
      <div>
        <input onChange={e => this.changeHandler(e)} />
        <button onClick={this.addGood}>添加商品</button>
        <ul>{goodsList}</ul>
        {this.props.title && <h1>{this.props.title}</h1>}
        {
          <Cart
            cart={cart}
            addCount={this.addCount}
            minusCount={this.minusCount}
          />
        }
      </div>
    );
  }
}

export default CartSample;
