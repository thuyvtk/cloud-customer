import React from "react";

function OrderItem() {
  return (
    <tr>
      <td className="text-left p-5">Yzy Stastic 350</td>
      <td className="p-5">1</td>
      <td className="text-center">
        <p
          className="font-semibold text-right p-5"
          style={{ color: "#AF052D" }}
        >
          1.000.000 đ
        </p>
      </td>
    </tr>
  );
}

export default OrderItem;
