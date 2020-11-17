import React from 'react'
import ArticleBox from '../ArticleBox'
import FormSection from '../categoryPage/FormSection'
import FormSidebar from '../FormSidebar'
import ProfileContent from '../mainPage/ProfileContent'
import ProfileContent3 from '../ProfileContent3'

const VideoSection = () => {
    const styles = {
        part1: {
            display: 'block'
        },
        article: {
            border: 'none'
        },
        sidebarArticle: {
            borderTop: '1px solid #d7d7d7',
            padding: '12px 0',
            marginRight: '0px',
        },
        sidebarMain: {
            width: '100%',
            maxWidth: '100%',
        },
        sidebarText: {
            margin: '20px 0'
        },
        sidebarImg: {
            width: '100%'
        },
    }
    const texts = {
        man: 'حسن علّيق',
        part31: 'مؤازرة عسكرية، ارتأى رئيس الجامعة الأميركية في بيروت، فضلو خوري، أن يواجه أهل الجامعة. وكما تفعل السلطة السياسية مع مواطنيها، فعل خوري مع 650 من العاملين والموظفين، فأبلغهم بقرارات صرفهم من أعمالهم، في حضرة العسكر. فعل خوري بالعلن ما كان يفعله في الإدارة بالسر. اللافت هنا أن هذا الأخير الذي سار على نهج سلطة كان حتى وقت غير بعيد «يثور» ضدها في الساحات. بدم بارد، ارتكب فضلو خوري «مجزرة» بحق مئات الموظفين في مؤسسة هي من الأكثر ثراء في لبنان',
        part32: 'ليل أوّل من أمس، تبلّغ الموظفون والعاملون في الجامعة الأميركية في بيروت، عبر البريد الإلكتروني، بضرورة الحضور إلى عملهم باكراً. لم تحمل تلك الرسالة أية تفاصيل تُذكر، باستثناء التشديد على الحضور، ولكن فهم «أهل» الجامعة ما الذي ينتظرهم صباح اليوم التالي. فهم، أصلاً، يترقبون وصول تلك الرسالة منذ ما يقرب شهراً ونصف شهر. تحديداً، منذ اللحظة التي أعلن فيها رئيس الجامعة، فضلو خوري، عن «أسوأ الأزمات» التي تعانيها المؤسسة. وما زادهم يقيناً بأن ما كان ينتظرهم هو إبلاغهم بقرارات صرفهم، البريد المتأخر والذي أعلن فيه مدير المركز الطبي في الجامعة، جوزف عتيق، عن «استقالة» ستة مدراء من مناصبهم، مرحباً في الوقت نفسه بالمدراء الجدد الذين جرى تعيينهم في المراكز الشاغرة.',
        articlesTitle: 'مقالات ذات صلة ',
        postTitle: 'استقالة ألان بيفاني: نهاية انتفاضة مدير عام ',
        other1: 'صباح أمس، حضر الموظفون إلى مكاتبهم، فكانت في استقبالهم... كتيبة عسكرية استدعتها إدارة الجامعة لمواجهة أي سيناريو قد يقبل عليه المصروفون! هذا ما ارتآه خوري في مواجهة تداعيات مجزرة الصرف التي نفّذها أمس بحق 650 موظفاً وعاملاً في الجامعة الأميركية. استدعى العسكر في مواجهة موظّفين عزّل، منتهجاً خطاً كان حتى وقتٍ غير بعيد «يثور» ضده في الساحات. تماماً، كما تفعل السلطة السياسية في مواجهة مواطنيها، فعل خوري مع «أهل» الجامعة، فكان «عهده» أول عهدٍ «سيذكر في ما بعد التاريخ أنه واجه أهله مدجّجاً بالعسكر». هذا ما يقوله الناس هناك.',
        other2: 'هكذا، استحال محيط الجامعة، أمس، ساحة حرب. عسكريون في حالة تأهب. آليات عسكرية تسدّ المداخل، فيما الموظفون يدخلون مكاتبهم بلا حولٍ ولا قوة ينتظرون مغلّفات ستُرسل من «فوق». مع ذلك، لم يكن ثمة حاجة إلى التبليغ الرسمي، فقد علم المصروفون بأمر صرفهم من «أجهزة الكمبيوتر الخاصة بهم التي فُصلت عن شبكة الإنترنت». فكل من كانت أجهزتهم مفصولة عن الشبكة علموا أنهم ضحايا، على ما قال أحد الذين صُرفوا، ثم مع ساعات الظهر صارت هذه الإشارة أمراً واقعاً. وبحلول الثالثة عصراً، كان الكل قد تبلّغ. كان المشهد «مأساوياً»، على ما يروي جورج الجردي، رئيس نقابة العمال والمستخدمين في الجامعة. بكاء وعناق. كان هذا أقصى ما فعله المصروفون. لم يحطّموا ولم يشتموا، بل «ظلّوا أوفياء للمكان الذي بذلوا فيه جلّ أعمارهم»، على ما يقول الجردي. أما خوري، فقد ارتأى أن يترجم عبارة أسوأ الأزمات التي تمر بها الجامعة بصرف المئات من أهلها. لم يأبه لما يمكن أن يكون مصير هؤلاء في عزّ الأزمة المالية التي تضرب البلاد. فكل ما كان «يهمه في تلك اللحظة التغطية على سوء إدارته للجامعة». هذا ما يجمع عليه الكثير من العاملين هناك. أكثر من ذلك يقول هؤلاء بأنه «إذا كان خوري يعتبر أن الحكومة الحالية هي أسوأ حكومة مرّت في تاريخ لبنان، فإدارة خوري هي أسوأ إدارة مرّت على الجامعة». إدارة تجلى عنفها أمس مع المصروفين الذين رُحّلوا من مكاتبهم «بأغراضهم الشخصية أمس، يعني كيف بنحضر بالأفلام الأميركية كيف بضبوا كلاكيشهن بعلبة صغيرة، هيك صار مبارح».',
        btn1: 'أطبّاء',
        btn2: 'كورونا',
        btn3: 'الجامعة الأميركية',
        btn4: 'طلاب',
        sidebarTitle: 'الأكثر قراءة',
        sidebarPostTitle: 'فلسطين',
        sidebarPostInfo: 'في انتظار الخراب الكبير: تآمر وتواطؤ... وصمت!',
    }
    return (
        <section className="section-3">
            <div className="container">
                <div className="row">
                    <div className="col-8 main-1" style={{
                        width: '100%'
                    }}>
                        <div className="part-1"
                        style={styles.part1}>
                            <video width="100%" height="480" 
                            poster="/images/video.png" controls>
                                <source src="/images/videoplayback.mp4"
                                type="video/mp4"/>
                            </video>
                        </div>
                        <div className="part-2">
                            <img src="/images/man.png"/>
                            <h3>{texts.man}</h3>
                        </div>
                        <div className="mobile-main-sec">
                            <div className="a-main-mobile">
                                <a href="#">A-</a>
                                <a href="#">A+</a>
                            </div>
                        </div>
                        <div className="part-3 other-text">
                            <p>
                                {texts.part31}
                            </p>
                            <p>
                                {texts.part32}
                            </p>
                        </div>
                        <div className="featured-product">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="blog-bg-btn">
                                        <a href="#">
                                            {texts.articlesTitle}
                                        </a>
                                    </div>
                                </div>
                                {[1, 2, 3].map((_, i) => 
                                <div className="col-md-4 col-sm-12">
                                    <ArticleBox
                                    style={styles.article}
                                    titleFontSize="12px"
                                    imgSrc="/images/blog-12.jpg"
                                    title={'استقالة ألان بيفاني: نهاية انتفاضة مدير عام '}/>
                                </div>)}
                            </div>
                        </div>
                        <div className="part-5 text-other">
                            <p>{texts.other1}</p>
                            <p>{texts.other2}</p>
                        </div>
                        <div className="part-6 social">
                            <a href="#" className="social-icon">
                                <img src="/images/link.png"/>
                            </a>
                            <a href="#" className="social-icon">
                                <img src="/images/whatsapp.png"/>
                            </a>
                            <a href="#" className="social-icon">
                                <img src="/images/messenger.png"/>
                            </a>
                            <a href="#" className="social-icon">
                                <img src="/images/linkedin.png"/>
                            </a>
                            <a href="#" className="social-icon">
                                <img src="/images/twitter.png"/>
                            </a>
                            <a href="#" className="social-icon">
                                <img src="/images/facebook.png"/>
                            </a>
                        </div>
                        <div className="part-7 all-btn">
                            <a href="#">
                                <h3>{texts.btn1}</h3>
                            </a>
                            <a href="#">
                                <h3>{texts.btn2}</h3>
                            </a>
                            <a href="#">
                                <h3>{texts.btn3}</h3>
                            </a>
                            <a href="#">
                                <h3>{texts.btn4}</h3>
                            </a>
                        </div>
                    </div>
                    <div className="col-4 sidebar-main-col"
                    style={{
                        width: '100%'
                    }}>
                        <div className="part-1-video sidebar">
                            <h2>{texts.sidebarTitle}</h2>
                            {[1, 2, 3, 4, 5, 6].map((_, i) => 
                            <ProfileContent3 
                            title={texts.sidebarPostInfo}
                            text={texts.sidebarPostTitle}
                            imgSrc={`/images/sidebar-img-${i+1}.jpg`}/>
                            // <div className="row img-center">
                            //     <div className="img-src" style={styles.sidebarMain}>
                            //         <a href="#">
                            //             <img src={`/images/sidebar-img-${i+1}.jpg`}
                            //             style={styles.sidebarImg}/>
                            //         </a>
                            //     </div>
                            //     <div className="col-8 side-detail">
                            //         <a href="#">
                            //             <h4
                            //             style={styles.sidebarText}>{texts.sidebarPostTitle}</h4>
                            //         </a>
                            //         <a href="#">
                            //             <h3>{texts.sidebarPostInfo}</h3>
                            //         </a>
                            //     </div>
                            // </div>
                            )}
                            <div className="row img-center"></div>
                        </div>
                        <FormSidebar />
                        <FormSection />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoSection
