import React from "react";
import Header from "../components/Header";
import CartItem from "../components/CartItem";

function ViewCart() {
  return (
    <div>
      <Header />
      {/* link home page */}
      <div
        className="w-full flex p-10 justify-between"
        style={{ height: "100px", backgroundColor: "#F2F2F2" }}
      >
        <span
          className="text-2xl tracking-tight w-4/5"
          style={{ color: "#000", fontFamily: "lato-bold" }}
        >
          Giỏ Hàng Của Bạn
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
            {" "}
            {">>"}{" "}
          </span>
          <span className="text-sm mr-3 ml-3">Giỏ hàng</span>
        </div>
      </div>
      {/* cart */}
      <div className="w-full bg-white pt-10 px-20 mb-10">
        <table className="table-fixed w-full cart">
          <thead>
            <tr>
              <th className="w-1/12 p-5"></th>
              <th className="w-2/12 p-5"></th>
              <th className="w-2/4 p-5"> Tên sản phẩm</th>
              <th className="w-3/12 p-5">Giá</th>
              <th className="w-1/12 p-2">Số lượng</th>
              <th className="w-3/12 p-5">Tổng tiền</th>
            </tr>
          </thead>
          <tbody>
            <CartItem />
            <CartItem />
            <CartItem />
            <tr>
              <td colSpan="6" className="py-5 px-4 text-right">
                <button className="w-2/12 btnViewDetail text-white font-normal text-sm py-4 rounded-none">
                  CẬP NHẬT GIỎ HÀNG
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* cart detail */}
      <div className="w-full px-20 text-right mb-32">
        <p className="w-full text-right font-semibold">Chi tiết đơn hàng</p>
        <div
          className="w-7/12 ml-auto mr-0 mt-10 flex"
          style={{ border: "1px solid #e5e5e5" }}
        >
          <div className="w-5/12" style={{ backgroundColor: "#F5F5F5" }}>
            <div
              className="w-full flex items-center text-left font-semibold pl-4 text-sm py-3"
              style={{ borderBottom: "1px solid #e5e5e5" }}
            >
              <span>Tạm tính</span>
            </div>
            <div
              className="w-full flex items-center text-left font-semibold pl-4 text-sm py-3"
              style={{ height: "100px", borderBottom: "1px solid #e5e5e5" }}
            >
              <span>Giao hàng</span>
            </div>
            <div className="w-full flex items-center text-left font-semibold pl-4 text-sm py-3">
              <span>Thành tiền</span>
            </div>
          </div>
          <div className="w-7/12" style={{ backgroundColor: "#fff" }}>
            <div
              className="w-full flex items-center pl-4 font-semibold text-sm py-3"
              style={{ borderBottom: "1px solid #e5e5e5", color: " #AF052D" }}
            >
              <span>1000.000</span> <span className="underline ml-2"> đ</span>
            </div>
            <div
              className="w-full flex flex-col text-left justify-center font-semibold pl-4 text-sm py-3"
              style={{ height: "100px", borderBottom: "1px solid #e5e5e5" }}
            >
              <div className="w-full flex text-xs">
                <span className="text-red-500 mr-2">*</span>
                <p>Chỉ giao hàng ở thành phố Hồ Chí Minh</p>{" "}
                <span className="text-gray-400 ml-1">(Miễn phí ship)</span>
              </div>
              <input
                className="border border-gray-300 mr-3 mt-2 p-2"
                placeholder="Địa chỉ giao hàng"
              />
            </div>
            <div
              className="w-full flex items-center text-left font-semibold pl-4 text-sm py-3"
              style={{ color: " #AF052D" }}
            >
              <span>1000.000</span> <span className="underline ml-2"> đ</span>
            </div>
          </div>
        </div>
        <button className="w-2/12 btnViewDetail text-white font-normal text-sm py-4 mt-5 mr-4 rounded-none">
          ĐẶT HÀNG
        </button>
      </div>
    </div>
  );
}

export default ViewCart;
