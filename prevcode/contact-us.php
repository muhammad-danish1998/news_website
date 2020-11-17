<?php

	include 'header.php';

?>



<html dir="rtl" lang="ar">

<head>

    <meta charset="utf-8">

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<title>اتصل بنا</title>

	<link href="css/contact-us.css" rel="stylesheet" type="text/css" />

</head>



<body>



     <div class="advertise-with-us">

		<div class="container">

			<div class="row">

				<div class="col-12">

					<div class="advertise-info">	

						<h3 class="top-heading">تواصل معنا  </h3>

						<p class="icon-info"><a href="#"><i class="fas fa-phone"></i>759500 1 961+</a></p>
						<p class="icon-info"><a href="#"><i class="fas fa-fax"></i>759597 1 961+</a></p>
						<p class="icon-info"><a href="#"><i class="fas fa-wallet"></i> 113/5963</a></p>
						<p class="icon-info"><a href="#"><i class="fas fa-envelope"></i> ads@al-akhbar.com</a></p>
						<p class="icon-info location"><a href="#"><i class="fas fa-map-marker-alt"></i> بيروت ـ فردان، شارع دونان، سنتر كونكورد، الطابق السادس  </a></p>

						<p class="bottom-info">إذا كنت ترغب بالكتابة معنا، <span>اضغط هنا. </span></p>

						<h3> أو ارسل رسالة  </h3>

						<form>
							<div class="form-input-1">
								<!-- <input type="text" id="fname" name="fname" placeholder=" الاسم الكامل* "> -->
								<div class="full-demo"><input type="text" id="fname" name="fname">
    								<label>الاسم الكامل<span>*</span> </label>
    							</div>
								<!-- <input type="text" id="cname" name="cname" placeholder=" الاسم الكامل  "> -->
								<div class="full-demo"><input type="text" id="fname" name="fname">
    								<label>البريد الالكتروني<span>*</span> </label>
    							</div>
							</div>
							<div class="form-input-1">
								<!-- <input type="text" id="email" name="email" placeholder="البريد الالكتروني* "> -->
								<div class="full-demo"><input type="text" id="email" name="email">
    								<label>أكيد البريد الالكتروني<span>*</span> </label>
    							</div>
								<!-- <input type="text" id="email-confirm" name="email-confirm" placeholder="تأكيد البريد الالكتروني* "> -->
								<div class="full-demo"><input type="text" id="email-confirm" name="email-confirm">
    								<label>تأكيد البريد الالكتروني  <span>*</span> </label>
    							</div>
							</div>
							<!-- <textarea type="text" id="topic" name="topic" rows="4" placeholder="الموضوع* "></textarea> -->
							<div class="full-demo textarea"><textarea id="topic" name="topic" rows="4"></textarea>
    								<label>الموضوع  <span>*</span> </label>
    							</div>
							<div class="submit-btn">
								<input type="submit" value="اارسل ">
							</div>
						</form> 
	
					</div>

				</div>

			</div>

		</div>

	</div>
 
<!-- <script>
$( document ).ready(function() {
    jQuery("form input[type='text']").on("keyup",function(){

        if(jQuery(this).val() != ''){
           jQuery(this).addClass("typing");
        } else {
               jQuery(this).removeClass("typing");
        };
	});
});
	
</script> -->

</body>

</html>



<?php

	include 'footer.php';

?>