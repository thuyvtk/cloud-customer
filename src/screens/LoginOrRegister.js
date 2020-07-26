import React, { useState } from "react";
import Header from "../components/Header";

function LoginOrRegister() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    console.log(phone, password);
  }

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
          Tài Khoản
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
          ></span>
          <span className="text-sm mr-3 ml-3">Tài khoản</span>
        </div>
      </div>
      {/* accout */}
      <div className="bg-white p-20 flex" style={{ height: "500px" }}>
        <div className="w-1/2 bg-white mr-20" style={{ height: "400px" }}>
          <p
            className="text-xl font-sans font-medium"
            style={{ color: " #AF052D" }}
          >
            Đăng nhập
          </p>
          {/* phone */}
          <div className="w-full flex text-sm font-semibold mt-6">
            <p>Số điện thoại</p> <span className="text-red-500 ml-2">*</span>
          </div>
          <input
            type="number"
            className="input-phone w-full border border-gray-500 mr-3 mt-3 p-1"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {/* password */}
          <div className="w-full flex text-sm font-semibold mt-6">
            <p>Mật khẩu</p> <span className="text-red-500 ml-2">*</span>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-500 mr-5 mt-3 p-1"
          />
          <a
            className="text-xs italic underline hover:text-green-500"
            href="http://localhost:3000/account"
          >
            Quên mật khẩu
          </a>
          <br />
          <button
            onClick={handleLogin}
            className="w-1/4 btnViewDetail text-white font-normal text-sm py-2 mt-5 rounded-sm"
          >
            ĐĂNG NHẬP
          </button>
        </div>
        <div className="w-1/2 bg-white" style={{ height: "500px" }}>
          <p
            className="text-xl font-sans font-medium"
            style={{ color: " #AF052D" }}
          >
            Đăng ký
          </p>
          {/* phone */}
          <div className="w-full flex text-sm font-semibold mt-6">
            <p>Số điện thoại</p> <span className="text-red-500 ml-2">*</span>
          </div>
          <input
            type="number"
            className="input-phone w-full border border-gray-500 mr-3 mt-3 p-1"
          />
          {/* password */}
          <div className="w-full flex text-sm font-semibold mt-6">
            <p>Mật khẩu</p> <span className="text-red-500 ml-2">*</span>
          </div>
          <input
            type="password"
            className="w-full border border-gray-500 mr-3 mt-3 p-1"
          />
          <button className="w-1/4 btnViewDetail text-white font-normal text-sm py-2 mt-10 rounded-sm">
            ĐĂNG KÝ
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginOrRegister;
