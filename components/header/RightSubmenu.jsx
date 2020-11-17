import React, { useState } from 'react'

const RightSubmenu = ({ item }) => {
    const [open, setOpen] = useState(false);
    if (!item.menuAttached) return (
        <li>
            <div className="link">
                <a href={`/${item.path}`}>{item.title}</a>
            </div>
        </li>
    )
    return (
        <li>
            <div className="link">
                {item.title}
                <i className="fa fa-chevron-down"
                onClick={e => setOpen(!open)}></i>
            </div>
            <ul className="submenu" style={{
                display: open ? 'block' : 'none'
            }}>
                {item.items.map(subitem => 
                    <li><a href={`/${subitem.path}`}>{subitem.title}</a></li>
                )}
            </ul>
        </li>
    )
}

export default RightSubmenu
