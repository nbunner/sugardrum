---
layout: page
currentPage: home
topSectionBack: top-section-default
topSectionText: review-quotes.html	
fullWidth: full-width
topSectionBack: top-section-default
bannerImage: banner-bw-barn-guitar-w2000.jpg
---

<div class="col-cont text-section">
	<h2 class="h1 col-xs-12">New album: Postcards</h2>
	<!-- <img src="//files.sugardrum.com/img/record-covers/postcards.jpg" /> -->
	
	
	{% for m in site.data.music %}
		{% if m.featured == 1 %}			
		<div class="ep_cont">
			{% if m.embed-type == 'spotify' %}
			<div class="embed-cont embed-cont--spotify">
				<iframe src="//embed.spotify.com/?uri=spotify%3Aalbum%3A{{ m.spotify-id }}" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
			</div>
			{% endif %}
			{% if m.embed-type == 'bandcamp' %}
			<div class="embed-cont embed-cont--bandcamp">
				<iframe style="border: 0; width: 100%; height: 120px;" src="//bandcamp.com/EmbeddedPlayer/album={{ m.bandcamp-id }}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=none/transparent=true/" seamless><a href="{{ m.link-bandcamp }}">{{ m.title }}</a></iframe>	
			</div>	
			{% endif %}
			<a href="{{ m.link-bandcamp }}" class="ep-cover-link" target="_blank"><img src="{{ m.cover }}" alt="{{ m.title }}" /></a>
			<div class="music-link-cont">
				<a href="{{ m.link-bandcamp }}" class="music-link" target="_blank">
					<span><i class="fa fa-bandcamp music-logo music-logo--bandcamp"></i> Bandcamp</span> 
					<span><span class="btn btn--play">Download</span></span>
				</a>		
				{% if m.link-itunes %}
					<a href="{{ m.link-itunes }}" class="music-link" target="_blank">
						<span><i class="fa fa-apple music-logo music-logo--itunes"></i> Music</span> 
						<span><span class="btn btn--play">Play</span></span>
					</a>
				{% endif %}
				{% if m.link-amazon %}
					<a href="{{ m.link-amazon }}" class="music-link" target="_blank">
						<span><i class="fa fa-amazon music-logo music-logo--amazon"></i> Amazon</span> 
						<span><span class="btn btn--play">Play</span></span>
					</a>
				{% endif %}	
				{% if m.link-spotify %}
					<a href="{{ m.link-spotify }}" class="music-link" target="_blank">
						<span><i class="fa fa-spotify music-logo music-logo--spotify"></i> Spotify</span> 
						<span><span class="btn btn--play">Play</span></span>
					</a>
				{% endif %}
			</div>
		</div>
		{% endif %}
	{% endfor %}

	
	<div class="col-xs-12">		
		<blockquote><p>&#8220;From the whispered wonder of ‘Under the Stairs’ to the finally acoustic springs of chipper sounds of album closer ‘True Nature of Cats’, Nigel manages to instil a pure, and relatively unadulterated sense of calm and joy&hellip;. It’s lead single ‘Choccy Rolls’ that shines as the standout anthem; a heartfelt account of watching a loved one lose words and memories as they succumb to dementia.&#8221; &#8211; <a href="//www.anthemreview.net/post/142444734980/sugardrum-postcards-sugardrum-is-the-moniker-of" target="_blank">Anthem Review</a></p></blockquote>
	</div>	
</div>



<section class="videos-section">
	<div class="col-cont">
		<h2 class="h1 col-xs-12">Featured video</h2>
		<div class="youtube-container home-youtube-container embed-responsive embed-responsive-16by9 embed-responsive-item" id="videoPlayer">
			<div class="homeVideoThumbnail home-videoplayer" id="vid-jt9BeiRDwJI"><img src="//img.youtube.com/vi/jt9BeiRDwJI/0.jpg" /></div>
			<i class="fa fa-youtube-play homeVideoPlayButton"></i>	
		</div>
		<p class="col-xs-12">The Smiths - There is a light that never goes out - Acoustic Cover by Sugardrum.</p>
	</div>
</section>

<div class="col-cont text-section">
	<h2 class="h1 col-xs-12">Latest news</h2>
	{% for post in site.posts offset: 0 limit: 5 %}
	<article class="col-xs-12 post post--snippet">	
		<header>			
			<h2><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>		
			<date>{{ post.date | date: "%b %-d, %Y" }}</date>
		</header>
		<div class="text-col"><p>{{ post.excerpt }}</p></div>
	</article>  
	{% endfor %}
	<p class="col-xs-12"><a href="/blog/">More news&hellip;</a></p>
</div>
