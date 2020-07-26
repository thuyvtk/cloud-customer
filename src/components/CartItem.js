import React from 'react'

function CartItem() {
    return (
        <tr>
            <td className="font-semibold delete text-center">Xóa</td>
            <td className="px-8 py-4">
                <div className="w-full bg-cover" style={{ height: '60px', backgroundColor: '#F3F3F3', backgroundImage: 'url(http://capricathemes.com/wordpress/WCM01/WCM010020/WP2/wp-content/uploads/2020/02/3.jpg)' }} />
            </td>
            <td className="text-center">Yzy Stastic 350</td>
            <td className="text-center">
                <p className="font-semibold" style={{ color: '#AF052D' }}>1.000.000 đ</p>
            </td>
            <td className="px-4 py-2">
                <input value="1" className="w-full text-center" style={{ height: '50px', backgroundColor: '#F2F2F2' }} />
            </td>
            <td className="text-center">
                <p className="font-semibold" style={{ color: '#AF052D' }}>1.000.000 đ</p>
            </td>
        </tr>
    )
}

export default CartItem
