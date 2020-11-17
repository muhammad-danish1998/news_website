import React from 'react';
import { useFetch } from '../../hooks/useFetch';

const HeaderMenu = () => {
    const texts = {
        text1: ' أخبار ',
        text2: ' سياسة ',
        text3: 'مجتمع ',
        text4: 'اقتصاد ',
        text5: 'ثقافة وناس ',
        text6: 'ملفات ',
        text7: 'رأي '
    }
    const { loading, texts: res } = useFetch(
        'https://akhbar.thewickfirm.com/navigation/5fab9ffd09fffc974679c663');
    if (loading) return <div></div>
    return (
        <div className="header-menu">
            <ul>
                {res.items.map(item => 
                <li><a href={`/${item.path}`}>{item.title}</a></li>)}
            </ul>
	    </div>
    )
}

export default HeaderMenu;
