import React, {useEffect, useState} from 'react'
import Spinner from '../components/Spinner';
import { useFetch } from '../hooks/useFetch';

const AboutPage = () => {
    // const texts = {
    //     title: 'عن  ',
    //     titleSpan: ' «الأخبار» ',
    //     info1: 'صدر العدد الأوّل من «الأخبار» في 14 آب 2006 بعد 33 يوماً من العدوان الاسرائيلي على لبنان. إنطلاقة صعبة لكنها «مغامرة محسوبة» كما قال مؤسسها جوزف سماحة في افتتاحيته الأولى . مغامرة «الأخبار» في القرن الواحد والعشرين هي في تميّزها سياسياً ومهنياً. في السياسة، هي جريدة تميل إلى اليسار وتنتمي الى معسكر رافضي الهيمنة من قلب الولايات المتحدة الاميركية الى أقاصي الشرق وأفريقيا وأميركا الجنوبية وأوروبا. ',
    //     info2: ' مهنياً، تعتمد «الأخبار» على مجموعة من صحافييها الشباب لإنتاج جريدة يومية عصرية تكسر النهج التقليدي في العمل الصحافي، وتعطي أولوية للتحقيقات الخاصة التي تمسّ الحياة اليومية وقضايا المجتمع دون أن تكون محصورة بالضرورة في الإطار السياسي للحدث. تتميّز «الأخبار» بتصميمها وشكلها وموقعها الإلكتروني الذي يواكب المعايير الحديثة في صناعة الصحافة وتولي اهتماماً خاصاً بالصورة والرسوم الكاريكاتورية. ',
    //     info3: ' تصدر «الأخبار» عن شركة «أخبار بيروت» وفق رخصة لجريدة «الأخبار» التي تأسست عام 1953. ',
    //     bottomInfo1: ' رئيس التحرير، رئيس مجلس الإدارة: ',
    //     bottomRed1: '  إبراهيم الأمين  ',
    //     bottomInfo2: 'رئيس تحريرها المؤسس (2006 – 2007): ',
    //     bottomRed2: ' جوزف سماحة  ',
    // }

    const { loading, texts } = useFetch('https://akhbar.thewickfirm.com/about');

    if (loading) return (
        <Spinner />
    )

    return (
        <div className="about-info">
            <h4>
                <span>{texts.Header}</span>
            </h4>
            <p>{texts.Body}</p>
            <p className="bottom-info">
                {texts.Personnel[0].Designation}
            </p>
            <h5>{texts.Personnel[0].Name}</h5>
            <p className="bottom-info">
                {texts.Personnel[1].Designation}
            </p>
            <h5>{texts.Personnel[1].Name}</h5>
        </div>
    )
}

export default AboutPage
