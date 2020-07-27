import React from "react";
import Header from "../components/Header";
import Item from "../components/Item";

function Shoes() {
  return (
    <div className="pb-20">
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
          Giày Nam
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
      <div className="flex flex-col">
        <p className="text-center mt-20 text-2xl font-semibold">Sản Phẩm</p>
        <div
          className="self-center mt-3 mb-5"
          style={{
            backgroundColor: "#AF052D",
            height: "2px",
            width: "70px",
          }}
        />
      </div>
      <div className="flex flex-col">
        <div className="mt-10 w-11/12 self-center flex flex-wrap">
          <Item
            name="GIÀY CONTINENTAL 80"
            price="2.500.000"
            linkBg="https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/3bbecbdf584e40398446a8bf0117cf62_9366/Giay_Samba_OG_Mau_trang_B75806_01_standard.jpg"
          />
          <Item
            name="GIÀY SAMBA OG"
            price="1.000.000"
            linkBg="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/4c70105150234ac4b948a8bf01187e0c_9366/Giay_Samba_OG_Mau_djen_B75807_01_standard.jpg"
          />
          <Item
            name="STAN SMITH"
            price="2.400.000"
            linkBg="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/420ea90ae16a4238a276ab9f009b26f9_9366/STAN_SMITH_Mau_djen_FU9614_01_standard.jpg"
          />
          <Item
            name="GIÀY SWIFT RUN RF"
            price="2.400.000"
            linkBg="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/5980b0f1527f4cafa211ab090124a45b_9366/Giay_Swift_Run_RF_Mau_djen_FV5361_01_standard.jpg"
          />
          <Item
            name="NMD_R1.V2"
            price="2.900.000"
            linkBg="https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/98062b6d66a9403ab50aabde015140e0_9366/NMD_R1.V2_Mau_trang_FY5921_01_standard.jpg"
          />
          <Item
            name="NMD_R1.V2"
            price="3.400.000"
            linkBg="https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/0cd7174defc64166860fabce0116164e_9366/NMD_R1.V2_Mau_djen_FY5913_01_standard.jpg"
          />
          <Item
            name="ZX 2K 4D"
            price="5.500.000"
            linkBg="https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/dbaab509e5444426b9f6ab65012dc367_9366/ZX_2K_4D_Mau_trang_FW2002_01_standard.jpg"
          />
          <Item
            name="GIÀY 3MC X DISNEY SPORT GOOFY"
            price="1.800.000"
            linkBg="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/7e78f6ca102a4ba8a2e8ab9d013e9870_9366/Giay_3MC_x_Disney_Sport_Goofy_Mau_djo_FV9881_01_standard.jpg"
          />
          <Item
            name="JONAH HILL SUPERSTAR"
            price="3.200.000"
            linkBg="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/a895902bd74746679550ab0b01612fd5_9366/JONAH_HILL_SUPERSTAR_Mau_trang_FW7577_01_standard.jpg"
          />
          <Item
            name="ZX 2K 4D"
            price="5.500.000"
            linkBg="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/026e17d17eba44a2910fab6600edf20c_9366/ZX_2K_4D_Mau_trang_FW2003_01_standard.jpg"
          />
          <Item
            name="GIÀY NMD_R1"
            price="3.400.000"
            linkBg="https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/459ff194c35e45ea91b1a8ba00fc4876_9366/Giay_NMD_R1_Mau_djen_B42200_01_standard.jpg"
          />
          <Item
            name="GIÀY NMD_R1"
            price="3.600.000"
            linkBg="https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/0e965d18402c4f7fb65dab3b0142bb63_9366/Giay_NMD_R1_Mau_bac_FV5344_01_standard.jpg "
          />
        </div>
        <button className="w-1/6 self-center btnViewMore text-white font-medium text-sm py-2 px-2 rounded-sm">
          XEM THÊM
        </button>
      </div>
    </div>
  );
}

export default Shoes;
