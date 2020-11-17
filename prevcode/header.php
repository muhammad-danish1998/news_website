<html dir="rtl" lang="ar">

<head>
	<script src="https://kit.fontawesome.com/d9b27382bd.js" crossorigin="anonymous"></script>
	<link href="css/style.css" rel="stylesheet" type="text/css" />
	<link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
	<script type="text/javascript">
		$(function() {
			var Accordion = function(el, multiple) {
				this.el = el || {};
				this.multiple = multiple || false;

				// Variables privadas
				var links = this.el.find('.link');
				// Evento
				links.on('click', {
					el: this.el,
					multiple: this.multiple
				}, this.dropdown)
			}

			Accordion.prototype.dropdown = function(e) {
				var $el = e.data.el;
				$this = $(this),
					$next = $this.next();

				$next.slideToggle();
				$this.parent().toggleClass('open');

				if (!e.data.multiple) {
					$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
				};
			}

			var accordion = new Accordion($('#accordion'), false);
		});
	</script>



</head>

<body>

	<div class="top-bar-mobile">
		<div class="mobile-top-btn">
			<a href="https://al-akhbar.dev.pythagore.net/"><span style="color: #fff;">تابع </span><span style="color: #cb051a;">«الأخبار» </span></a>
		</div>
		<div class="social-icon">
			<a href="#"><i class="fab fa-youtube" aria-hidden="true"></i></a>
			<a href="#"><i class="fab fa-instagram" aria-hidden="true"></i></a>
			<a href="#"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a>
			<a href="#"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>
			<a href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a>
		</div>
	</div>

	<div class="top-menu">
		<div class="container">
			<div class="main-header">
				<div class="row">
					<div class="col-md-4">
						<div class="right-header">

							<div class="hamburger-menu">
								<input id="menu__toggle" type="checkbox" />
								<label class="menu__btn" for="menu__toggle">
									<span></span>
								</label>

								<ul class="menu__box">

									<form action="/action_page.php">
										<button type="submit"><i class="fa fa-search"></i></button>
										<input type="text" placeholder="ابحث هنا " name="search">
									</form>

									<div class="bottom-footer burger-mobile-menu">
										<div class="container">
											<div class="row">
												<div class="col-md-2">
													<i class="far fa-newspaper"></i>
													<p>أخبار </p>
												</div>
												<div class="col-md-2">
													<i class="fas fa-play"></i>
													<p>فيديو </p>
												</div>

												<div class="col-md-2">
													<i class="fas fa-podcast" aria-hidden="true"></i>
													<p>بودكاست </p>
												</div>
												<div class="col-md-2">
													<i class="fas fa-circle-notch"></i>
													<p>الأكثر قراءة </p>
												</div>
											</div>
										</div>
									</div>

									<ul id="accordion" class="accordion">
										<li>
											<div class="link">لبنان <i class="fa fa-chevron-down"></i></div>
											<ul class="submenu">
												<li><a href="#">سياسة </a></li>
												<li><a href="#">اقتصاد </a></li>
												<li><a href="#">مجتمع </a></li>
												<li><a href="#">تربية وتعليم </a></li>
											</ul>
										</li>
										<li>
											<div class="link"><i class="fa fa-chevron-down"></i>عرب </div>
											<ul class="submenu">
												<li><a href="#">فلسطين </a></li>
												<li><a href="#">سوريا </a></li>
												<li><a href="#">العراق </a></li>
												<li><a href="#">اليمن </a></li>
												<li><a href="#">مصر </a></li>
												<li><a href="#">الجزيرة العربية </a></li>
												<li><a href="#">المغرب العربي </a></li>
											</ul>
										</li>
										<li>
											<div class="link"><i class="fa fa-chevron-down"></i>عالم </div>
											<ul class="submenu">
												<li><a href="#">اوروبا </a></li>
												<li><a href="#">آسيا </a></li>
												<li><a href="#">افريقيا </a></li>
												<li><a href="#">اميركا </a></li>
											</ul>
										</li>
										<li>
											<div class="link"><a hre="#"> رأي </a></div>
										</li>
										<li>
											<div class="link link-1"><i class="fa fa-chevron-down"></i>ثقافة وناس </div>
											<ul class="submenu">
												<li><a href="#">آداب وفنون </a></li>
												<li><a href="#">ميديا </a></li>
												<li><a href="#">Yahoo</a></li>
											</ul>
										</li>
										<li>
											<div class="link"><i class="fa fa-chevron-down"></i>رياضة </div>
											<ul class="submenu">
												<li><a href="#">رياضة محلية </a></li>
												<li><a href="#">كرة قدم </a></li>
											</ul>
										</li>
										<li>
											<div class="link"><a hre="#"> بيئة وصحة </a></div>
										</li>
										<li>
											<div class="link"><a hre="#"> تكنولوجيا وعلوم </a></div>
										</li>
										<li>
											<div class="link"><a hre="#"> أعمال </a></div>
										</li>
										<li>
											<div class="link"><a hre="#"> رأس المال </a></div>
										</li>
										<li>
											<div class="link"><a hre="#"> مرأة </a></div>
										</li>
										<li>
											<div class="link"><a hre="#">تجربة </a></div>
										</li>
										<li>
											<div class="link"><a hre="#"> مدوّنات مصوّرة </a></div>
										</li>
										<li>
											<div class="link"><a hre="#"> جريدة اليوم </a></div>
										</li>
										<li>
											<div class="link"><a hre="#"> الأرشيف </a></div>
										</li>
									</ul>
									<div class="test-icon">
										<img src="images/Vector-Smart-Object.jpg" /><span>اختبارات </span>
									</div>
									<div class="social-icon">
										<a href="#"><i class="fab fa-youtube" aria-hidden="true"></i></a>
										<a href="#"><i class="fab fa-instagram" aria-hidden="true"></i></a>
										<a href="#"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a>
										<a href="#"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>
										<a href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a>
									</div>
									<div class="download-section">
										<a href="#">حمّل تطبيق الأخبار </a>
									</div>
									<div class="footer-icon">
										<a href="#"><img src="images/footer-icon-2.png"></a>
										<a href="#"><img src="images/footer-icon-1.png"></a>
									</div>
								</ul>

							</div>
							<div class="search">
								<a href="#">
									<i class="fas fa-search"></i>
								</a>
							</div>
						</div>
					</div>

					<div class="col-md-4">
						<div class="header-logo">
							<a href="https://al-akhbar.dev.pythagore.net/"><img src="images/logo.png" /></a>
						</div>
					</div>
					<div class="col-md-4">
						<div class="left-header">
							<a href="#">
								<i class="fas fa-bell"></i>
							</a>
							<a href="#">اشترك </a>
							<img src="images/newspaper.png" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="header-menu">
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

</body>

</html>