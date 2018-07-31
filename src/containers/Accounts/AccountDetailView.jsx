import React, { Component } from 'react';

class AccountDetailView extends Component {
  state = {
    accountId: this.props.account.accountId,
    discount: this.props.account.discount,
  };

  onUpdateDiscount = (discount) => {
    this.setState({ discount: discount });
  };

  onSubmit = () => {
    const {accountId, discount} = this.state;
    this.props.onSubmit(accountId, Number(discount));
  };

  render() {
    const {accountId, discount} = this.state;
    return (
      <div className="entry">
        <p>Detail</p>
        {accountId && <p>Account id: {accountId}</p>}
        <p>Discount: <input type="text" onChange={(ev) => this.onUpdateDiscount(ev.target.value) } value={discount} /></p>
        <p>
          <button onClick={this.props.onBack}>Go Back</button>
          <button onClick={this.onSubmit}>Save</button>
        </p>
      </div>
    );
  }
}

export default AccountDetailView;
