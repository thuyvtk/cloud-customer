import React from 'react'

function Item({ name, price, linkBg, link }) {
    return (
        <div className="w-1/4 px-4 mb-10 mt-3">
            <div className="w-full bg-cover item" style={{ backgroundImage: `url(${linkBg})`, height: '250px' }}>
                {/* hover */}
                <div className="w-full invisible addtocart flex content-end flex-wrap px-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', height: '100%' }}>
                    <button className="w-full btnViewDetail text-white font-normal text-sm py-2 px-2 rounded-none">
                            Xem Chi Tiết
                      </button>
                </div>
            </div>
            {/* detail so so */}
            <p className="text-black text-sm font-semibold mt-4 ml-2 name">{name}</p>
            <div className="flex mt-2 ml-2 items-center">
                <img src={require("../assets/item/price.png")} style={{ height: '15px', width: '15px' }} alt="th shoes" />
                <p className="font-bold ml-3" style={{ color: '#AF052D' }}>{price} đ</p>
            </div>
        </div>
    )
}

export default Item
