---
layout: page
currentPage: home
---

<p>Postcard (Official Video) by Sugardrum</p>
<div class="youtube-container home-youtube-container embed-responsive embed-responsive-16by9" id="videoPlayer">
	<div class="videoThumbnail home-videoplayer" id="vid-4pM6WphmRhQ"><img src="http://img.youtube.com/vi/4pM6WphmRhQ/0.jpg" /></div>
	<i class="fa fa-play-circle-o videoPlayButton"></i>	
</div>

{% for post in site.posts offset: 0 limit: 5 %}
<div class="h_post">	
	{% if post.thumb %}
	<a href="{{ post.url | prepend: site.baseurl }}" rel="nofollow" title="Permanent Link to {{ post.title }}" class="post_thumbnail"><img src="{{ post.thumb | prepend: site.mediaurl }}" alt="{{ post.title }}" /></a>  
	{% endif %}  
	<h2><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>
	<div class="post-meta-top"><div class="date"><span><strong>{{ post.date | date: "%b %-d, %Y" }}</strong></span></div></div>
	{{ post.excerpt }}
</div>  
{% endfor %}
