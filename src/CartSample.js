import React, { Component } from "react";

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
        <table>
          <tbody>
            {cart.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.text}</td>
                  <td>{item.num}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CartSample;
