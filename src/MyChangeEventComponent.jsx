import React, { useState } from "react";

function MyChangeEventComponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState();
  const [payment, setPayment] = useState("visa");
  const [shipping, setShipping] = useState();

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const onCommentChange = (event) => {
    setComment(event.target.value);
  };

  const onPaymentChange = (event) => {
    setPayment(event.target.value);
  };

  const onShippingChange = (event) => {
    setShipping(event.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={onNameChange} />
      <p>Name: {name}</p>

      <input type="text" value={quantity} onChange={onQuantityChange} />
      <p>Quantity: {quantity}</p>

      <textarea
        value={comment}
        onChange={onCommentChange}
        placeholder="Type comment here:"
      />
      <p>Comment: {comment}</p>

      <select name="" id="" value={payment} onChange={onPaymentChange}>
        <option value="">Select an option</option>
        <option value="visa">Visa</option>
        <option value="mastercard">Mastercard</option>
        <option value="giftcard">Gift card</option>
      </select>

      <p>Chosen payment method: {payment}</p>

      <p>Choose shipping method:</p>
      <label>
        <input type="radio" value="pick-up" checked={shipping == "pick-up"} onChange={onShippingChange}/>
        Pick up
      </label><br/>
      <label>
        <input type="radio" value="delivery" checked={shipping == "delivery"} onChange={onShippingChange}/>
        Delivery
      </label>

      <p>Chosen shipping method: {shipping}</p>
    </div>
  );
}

export default MyChangeEventComponent;
