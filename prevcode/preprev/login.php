<?php

	include 'header.php';

?>



<html dir="rtl" lang="ar">

<head>

    <meta charset="utf-8">

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<title>تسجيل الدخول</title>

	<link href="css/login.css" rel="stylesheet" type="text/css" />

</head>



<body>



     <div class="login-form">

		<div class="container">

			<div class="row">

				<div class="col-md-12 heading">
					<h4>تسجيل الدخول  </h4>
				</div>

				<div class="col-md-2"></div>

				<div class="col-md-8">

				  <div class="login-info">	

					<p>تسجيل الدخول  </p>
					<p>عبر حساباتك على وسائل التواصل الإجتماعي   </p>

					<div class="main-icon">
						<a href="#" class="twitter-icon"><i class="fab fa-twitter"></i><span>تسجيل الدخول عبر تويتر  </span></a>
						<a href="#" class="facebook-icon"><i class="fab fa-facebook-f"></i><span>تسجيل الدخول عبر فيسبوك   </span></a>
					</div>

					<div class="left-right-border">
						<p> أو  </p>
					</div>

					<div class="login-form">
						<!-- <input id="user" type="text" name="username" placeholder="المستعمل " required> -->
						<div class="full-demo user"><input type="text" id="fname" name="fname">
    								<label>الاسم  <span>*</span> </label>
    							</div>
				        <!-- <input id="password" type="password" name="password" placeholder="كلمه السر " required> -->
				        <div class="full-demo lock"><input type="text" id="fname" name="fname">
    								<label>كلمة المرور  <span>*</span> </label>
    							</div>
				        <input id="submit-btn" type="submit" value="دخول  ">
					</div>

					<div class="register-here">
						<span>ليس لديك حساب؟  </span><a href="#">سجّل هنا  </a> .
						<span>نسيت كلمة المرور؟  </span><a href="#"> اضغط هنا  </a>
					</div>
					
				  </div>

				</div>

				<div class="col-md-2"></div>

			</div>

		</div>

	</div>
 

	

</body>

</html>



<?php

	include 'footer.php';

?>