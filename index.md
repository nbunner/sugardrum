---
layout: page
currentPage: home
topSectionBack: top-section-default
topSectionText: review-quotes.html	
fullWidth: full-width
topSectionBack: top-section-home
---

<section class="new-album-section">
	<div class="col-cont">
		<div class="col-xs-12 col-sm-6 col-md-6 album-text">			
			<h2>New album postcards</h2>
			<p>Free download or buy the limited edition CD including paperback book of original short stories.</p>
			<div class="text-center clearfix"><a href="/listen/" class="btn btn-info">Find out more</a></div>
		</div>
		<!-- <a href="/listen/"><img src="http://files.sugardrum.com/img/record-covers/postcards.jpg" alt="Postcards by Sugardrum" /></a> -->
		<div class="section-photo"></div>		
	</div>
</section>

<section class="videos-section">
	<div class="col-cont">
		<div class="youtube-container home-youtube-container embed-responsive embed-responsive-16by9 embed-responsive-item" id="videoPlayer">
			<div class="homeVideoThumbnail home-videoplayer" id="vid-4pM6WphmRhQ"><img src="http://img.youtube.com/vi/4pM6WphmRhQ/0.jpg" /></div>
			<i class="fa fa-youtube-play homeVideoPlayButton"></i>	
		</div>
		<p class="col-xs-12">Postcard (Official Video) by Sugardrum</p>
	</div>
</section>

<div class="col-cont text-section">
	<h2 class="h1 col-xs-12 col-sm-10 col-sm-offset-1">Latest news</h2>
	{% for post in site.posts offset: 0 limit: 5 %}
	<article class="col-xs-12 col-sm-10 col-sm-offset-1 post">	
		<header>			
			<h2><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>		
			<date>{{ post.date | date: "%b %-d, %Y" }}</date>
		</header>
		<p class="text-col">{{ post.excerpt }}</p>
	</article>  
	{% endfor %}
	<p class="col-xs-12 col-sm-10 col-sm-offset-1"><a href="/blog/">More news&hellip;</a></p>
</div>
