import React from "react";
import Header from "../components/Header";
import OrderItem from "../components/OrderItem";

function Orders() {
  return (
    <div>
      <Header />
      {/* link home page */}
      <div
        className="w-full flex items-center px-10 justify-between"
        style={{ height: "100px", backgroundColor: "#F2F2F2" }}
      >
        <span
          className="text-2xl tracking-tight w-4/5"
          style={{ color: "#000", fontFamily: "lato-bold" }}
        >
          Đơn Hàng Của Bạn
        </span>
        <div className="w-1/5 text-right category">
          <a href="http://localhost:3000/">
            <span className="text-sm mr-3">Trang chủ</span>
          </a>
          <span
            style={{
              fontSize: "10px",
              fontStyle: "bold",
              letterSpacing: "-0.5",
            }}
          >
            >>
          </span>
          <span className="text-sm mr-3 ml-3">Đơn hàng</span>
        </div>
      </div>
      {/* Orders */}
      <div className="w-full p-10">
        <table className="table-fixed w-2/3 cart">
          <thead>
            <tr>
              <th colSpan="2" className="font-normal p-3">
                Mã đơn hàng: 5 (26/07/2020)
              </th>
              <th className="text-green-500 font-medium text-right p-3">
                Trạng thái: Đang giao
              </th>
            </tr>
            <tr>
              <th className="w-2/4 p-5"> Tên sản phẩm</th>
              <th className="w-1/12 p-5">Số lượng</th>
              <th className="w-3/12 p-5 text-right">Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            <OrderItem />
            <tr>
              <td colSpan="2" className="text-right p-5 font-bold">
                TỔNG TIỀN
              </td>
              <td
                className="text-right p-5 font-bold"
                style={{ color: "#AF052D" }}
              >
                1.000.000 đ
              </td>
            </tr>
            {/* <CartItem />
            <CartItem />
            <CartItem />
            <tr>
              <td colSpan="6" className="py-5 px-4 text-right">
                <button className="w-2/12 btnViewDetail text-white font-normal text-sm py-4 rounded-none">
                  CẬP NHẬT GIỎ HÀNG
                </button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
