<html dir="rtl" lang="ar">

<head>
	<title>Footer</title>
	<script src="https://kit.fontawesome.com/d9b27382bd.js" crossorigin="anonymous"></script>
	<link href="css/style.css" rel="stylesheet" type="text/css" />
</head>

<body>

	<div class="main-footer">
		<div class="container">

			<div class="footer-logo">
				<a href="https://al-akhbar.dev.pythagore.net/"><img src="images/logo.png" /></a>
			</div>

			<div class="footer-menu">
				<ul>
					<li><a class="active" href="#"> أخبار </a></li>
					<li><a href="#"> سياسة </a></li>
					<li><a href="#">مجتمع </a></li>
					<li><a href="#">اقتصاد </a></li>
					<li><a href="#">ثقافة وناس </a></li>
					<li><a href="#">ملفات </a></li>
					<li><a href="#">رأي </a></li>
				</ul>
			</div>

			<div class="social-icon">
				<a href="#"><i class="fab fa-youtube"></i></a>
				<a href="#"><i class="fab fa-instagram"></i></a>
				<a href="#"><i class="fab fa-linkedin-in"></i></a>
				<a href="#"><i class="fab fa-facebook-f"></i></a>
				<a href="#"><i class="fab fa-twitter"></i></a>
			</div>

			<div class="download-section">
				<a href="#">حمّل تطبيق </a>
				<a href="#">«الأخبار»</a>
			</div>

			<div class="footer-icon">
				<a href="#"><img src="images/footer-icon-2.png" /></a>
				<a href="#"><img src="images/footer-icon-1.png" /></a>
			</div>

			<div class="footer-main-icon">
				<div class="footer-bottom-icon">
					<button class="open-button" onclick="openForm()"> تواصل معنا </button>

					<div class="chat-popup" id="myForm">
						<form action="/action_page.php" class="form-container">
							<h1>تواصل معنا </h1>

							<label for="msg"><b>رسالة </b></label>
							<textarea placeholder="اكتب رسالة ..." name="msg" required></textarea>

							<button type="submit" class="btn">إرسال </button>
							<button type="button" class="btn cancel" onclick="closeForm()">قريب </button>
						</form>
					</div>

					<script>
						function openForm() {
							document.getElementById("myForm").style.display = "block";
						}

						function closeForm() {
							document.getElementById("myForm").style.display = "none";
						}
					</script>
				</div>
			</div>

		</div>
	</div>

	<div class="quotes-text">
		<div class="inner-text">
			<span>تواصل معنا </span>
		</div>
	</div>
	<div class="bottom-footer">
		<div class="container">
			<div class="row">

				<div class="col-md-2">
					<i class="fas fa-chart-line"></i>
					<p> الأبرز </p>
				</div>
				<div class="col-md-2">
					<i class="fas fa-circle"></i>
					<p>مباشر </p>
				</div>

				<div class="col-md-4">
					<div class="quote-img">
						<img style="width:50%;" src="images/quotes-1.png" />
					</div>
				</div>

				<div class="col-md-2">
					<i class="fas fa-podcast"></i>
					<p>بودكاست </p>
				</div>
				<div class="col-md-2">
					<i class="fas fa-play"></i>
					<p>فيديو </p>
				</div>

			</div>
		</div>
	</div>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script type="text/javascript">
		$(window).load(function() {
			setTimeout(function() {
				jQuery('div#hlsjsvod .fp-player .fp-ui .fp-play.fp-visible').find('svg').html('<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class=" fp-play-rounded-fill svg-inline--fa fa-play-circle fa-w-16 fa-3x"><path fill="#cb051a" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z" class=""></path></svg>')
			}, 3000);
		});
	</script>
	<script type="text/javascript">
		jQuery(document).ready(function() {
			if (navigator.userAgent.indexOf('Mac') > 0) {
				jQuery('body').addClass('mac-os');
			} else {
				jQuery("body").addClass("pc");
			}
		});
		jQuery(document).ready(function() {

			/ Get browser /
			// jQuery.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase());
			var is_opera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
			var is_Edge = navigator.userAgent.indexOf("Edge") > -1;
			var is_chrome = !!window.chrome && !is_opera && !is_Edge;
			var is_explorer = typeof document !== 'undefined' && !!document.documentMode && !is_Edge;
			var is_firefox = typeof window.InstallTrigger !== 'undefined';
			var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

			/ Detect Chrome /
			if (is_chrome) {
				jQuery('body').addClass('chrome');
			} else if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
				jQuery('body').addClass('safari');
			}

		});
	</script>

	<script>
		$(document).ready(function() {
			jQuery("form input[type='text']").on("keyup", function() {

				if (jQuery(this).val() != '') {
					jQuery(this).addClass("typing");
				} else {
					jQuery(this).removeClass("typing");
				};
			});
			jQuery("form textarea").on("keyup", function() {

				if (jQuery(this).val() != '') {
					jQuery(this).addClass("typing");
				} else {
					jQuery(this).removeClass("typing");
				};
			});
		});
	</script>

	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="js/bootstrap.bundle.min.js"></script>

</body>

</html>