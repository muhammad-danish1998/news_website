<?php

    include 'header.php';

?>

<html dir="rtl" lang="ar">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>اكتب مقالتك الخاصة</title>
        <link href="css/Write_Your_Own_Article.css" rel="stylesheet" type="text/css" /> </head>

    <body>
        <div class="article-heading-main">
            <div class="container">
                <div class="write-heading-inner">
                    <h3> اكتب مقالك   </h3> </div>
            </div>
        </div>
        <div class="article-from-main">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <form class="article-from-inner" id="articleform">
                            <div class="form-input-first">
                                <!-- <input type="text" id="author" placeholder="اسم الكاتب *"> -->
                                <div class="full-demo">
                                    <input type="text" id="fname" name="fname">
                                    <label>اسم الكاتب <span>*</span> </label>
                                </div>
                                <div class="select-option">
                                    <select name="category" id="category" required>
                                        <option> الفئة * </option>
                                        <option value="category-1"> Category 1 </option>
                                        <option value="category-2"> Category 2 </option>
                                        <option value="category-3"> Category 3 </option>
                                        <option value="category-4"> Category 4 </option>
                                    </select>
                                </div>
                            </div>
                            <!-- <input type="text" id="article-title" placeholder="عنوان المقال "> -->
                            <div class="full-demo demo-1">
                                <input type="text" id="fname" name="fname">
                                <label>عنوان المقال <span>*</span> </label>
                            </div>
                            <!-- <textarea type="text" id="article" name="article" rows="4" placeholder="المقال *"></textarea> -->
                            <div class="full-demo textarea">
                                <textarea type="text" id="fname" name="fname"></textarea>
                                <label>المقال <span>*</span> </label>
                            </div>
                            <div class="choose-btn-main">
                                <label class="picture-main"> إضافة صورة
                                    <input type="file" size="60"> </label>
                                <label class="image-main"> اختر صورة
                                    <input type="file" size="60"> </label>
                            </div>
                            <div class="submit-btn-main">
                                <button type="submit" form="articleform" value="Submit" class="submit-btn"> ارسل </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </body>

</html>

<?php

    include 'footer.php';

?>