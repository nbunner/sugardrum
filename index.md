---
layout: page
currentPage: home
topSectionBack: top-section-default
topSectionText: review-quotes.html	
fullWidth: full-width
topSectionBack: top-section-default
bannerImage: banner-bw-barn-guitar-w2000.jpg
---

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
