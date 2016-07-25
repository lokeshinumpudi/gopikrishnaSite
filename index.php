<!DOCTYPE html>
<html dir=ltr lang=en-US xmlns=http://www.w3.org/1999/xhtml>

<head>
	<title>Gopi krishna,Project Management Consultant</title>
	<meta http-equiv=content-type content="text/html; charset=utf-8">
	<meta http-equiv=X-UA-Compatible content="IE=edge,chrome=1">
	<meta name=viewport content="width=device-width,initial-scale=1,maximum-scale=1">

	<meta name="description" content="I am a project management consultant from Hyderabad who looks after design and execution of Interiors ( Residential ,Office ,Hospitals...).We are a one stop solution for all your needs be it False ceiling ,electricals ,kitchens ,wardrobes ,furniture,Home theater and the list goes on">
	<meta name="description" content="Previous role was  General Manager at (Elevate-khazanagroup)">
	<meta name="description" content="Currently executing Interior projects in  My home Abhra , Lodha , Aparna , Lanco Hills , Vijayawada & Visakhapatnam">
	<meta name="description" content=" Some of my recent Interior Projects are from My Home Abhra,Lanco Hills,Lodha,Aparna,Casarouge,Vesella,legend chimes,and many more">
	<link rel=stylesheet href=styles/bundle.min.css media=screen title=styles charset=utf-8>

	<!--<link rel="stylesheet" href="styles/reset.css">
    <link rel="stylesheet" href="styles/flickity.css">-->
	<!--<link rel="stylesheet" href="styles/styles.min.css">-->


	<!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->

	<body>
		<section id=container>
			<header>
				<div id=logo>
					<h2>GOPI KRISHNA</h2>
					<h4>Project Management Consultant</h4></div>
			</header>
			<section id=content>
				<div id=profile>
					<div class=about>
						<div class=photo-inner>
							<ul>
								<li><img src=images/gopi.jpg height=228 width=173></li>
							</ul>
						</div>
						<h1>GOPI KRISHNA</h1>
						<h3>Project Management Consultant</h3>
						<p><strong>I am a project management consultant from Hyderabad who looks after design and execution of Interiors ( Residential ,Office ,Hospitals...) .</strong></p>
						<p><strong>We are a one stop solution for all your needs be it False ceiling ,electricals ,kitchens ,wardrobes ,furniture,Home theater and the list goes on</strong></p>
					</div>
					<ul class=personal-info>
						<li>
							<label>Name</label><span><strong>GOPI KRISHNA</strong></span></li>
						<li>
							<label>Interior Projects Executed</label><span><strong>My Home Abhra,Lanco Hills,Lodha,Aparna,Casarouge,Vesella,legend chimes,and many more..</strong></span></li>
						<li>
							<label for="">Phone</label><span><strong>9000082412</strong></span></li>
						<li>
							<label for="">Email</label><span><strong>gk@gopikrishna.work</strong></span></li>
					</ul>
				</div>
				<nav class=menu>
					<ul class=tabs>
						<li class=tmenu><a href=#profile class=tab-profile><i class=icon-user></i>Profile</a></li>
						<li class=tmenu><a href=#portfolio><i class=icon-sphere></i>Projects</a></li>
						<li class=tmenu><a href=#resume><i class=icon-briefcase></i>Resume</a></li>
						<li class=tmenu><a href=#contact><i class=icon-mail4></i>Contact</a></li>
					</ul><a class=prev id=menu-prev href=#>&#xe073;</a> <a class=next id=menu-next href=#>&#xe076;</a></nav>
				<section id=resume>
					<div class=timeline-section>
						<h3 class=main-heading>Previous Employment</h3>
						<ul class=timeline>
							<li>
								<div class=timelineUnit>
									<h4>General Manager <span class=timelineDate></span></h4>
									<h5>Elevate-khazanagroup</h5></div>
							</li>
							<div class=clear></div>
						</ul>
						<h3 class=main-heading>Education</h3>
						<ul class=timeline>
							<li>
								<div class=timelineUnit>
									<h4>M.B.A<span class=timelineDate></span></h4>
									<h5>Queen Mary University of London</h5></div>
							</li>
							<li>
								<div class=timelineUnit>
									<h4>B.TECH <span class=timelineDate></span></h4>
									<h5>RMK university,Chennai</h5></div>
							</li>
							<div class=clear></div>
						</ul>
					</div>
					<div class=clear></div>
					<a href=# class="button transition"></a>
				</section>
				<section id=portfolio>
					<ul class=cats-filter id=portfolio-filter>
						<li><a href="" id=all class="current transition" data-filter=all>Executing projects</a></li>
						<li>
							<p class=current-projects>Currently executing Interior projects in My home Abhra , Lodha , Aparna , Lanco Hills , Vijayawada & Visakhapatnam</p>
						</li>
					</ul>
					<div class=extra-text>Some of the projects i'm proud of</div>
					<ul id=portfolio-list></ul>
				</section>
				<section id=contact>
					<div class=contact-info>
						<h3 class=main-heading><span>Contact info</span></h3>
						<ul>
							<li>Hyderabad
								<br>
								<br>
							</li>
							<li>Email: gk@gopikrishna.work</li>
							<li>Phone: 9000082412</li>
							<li>Website: www.gopikrishna.work</li>
						</ul>
					</div>
					<div class=contact-form>
						<h3 class=main-heading><span>Let's keep in touch</span></h3>
						<div id=contact-status></div>
						<form action=http://formspree.io/gk@gopikrishna.work method=POST>
							<p>
								<label for=name>Your Name</label>
								<input name=name required class=input>
							</p>
							<p>
								<label for=email>Your Email</label>
								<input type=email required name=_replyto class=input>
							</p>
							<p>
								<label for=message>Your Message</label>
								<textarea required name=message cols=88 rows=6 class=textarea></textarea>
							</p>
							<input type=hidden name=_subject value="Interiors Enquiry!">
							<input type=hidden name=_next value=./thanks.html>
							<input name=_gotcha style=display:none>
							<input type=submit name=submit value="Send your message" class="button transition">
						</form>
					</div>
				</section>
			</section>
			<footer>
				<div class=copyright>Copyright © 2016 gopi krishna</div>
			</footer>
		</section>
		<script id=image-template type=text/x-handlebars-template>{{#each data}}

			<li class="grid-item {{this.imageCategory}}">
				<a href={{this.imgSrc}} rel=portfolio class=gallery>
					<img src={{this.imgSrc}} alt={{this.text}}>
					<h2 class=title>{{this.title}}</h2><span class=categorie>{{this.text}}</span></a>
			</li>


			{{/each}}</script>
		<script id=carousalImages-template type=text/x-handlebars-template>
			<div class="main-gallery">
				{{#each data}}
				<div class="gallery-cell">
					<img src="images/bg.jpg" data-flickity-lazyload={{this.imgSrc}} alt={{this.title}} />
					<span>{{this.title}}</span>
				</div>
				{{/each}}
			</div>
		</script>

		<script type=text/javascript src=lib/bundle.js></script>
		<script src=js/handlebars.js charset=utf-8></script>
		<script src=lib/flickity.js charset=utf-8></script>
		<script type=text/javascript src=js/app.js></script>