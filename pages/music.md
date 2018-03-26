---
layout: page
title: Music
permalink: /listen/
currentPage: music
topTitle: Music
topSectionBack: top-section-music
---
<div class="col-xs-12 text-section">
	<div class="text-col">
		<p>All the Sugardrum releases are availble to buy/download from the Sugardrum page on <a href="//sugardrum.bandcamp.com" target="_blank">Bandcamp</a> in both electronic and CD format. Many of the songs are also available via Apple Music, Spotify etc.</p>
		
		<h2>Postcards</h2>	
		<p>The new album, <strong>Postcards</strong> is available to buy in a <a href="//sugardrum.bandcamp.com/album/postcards" target="_blank">limited edition CD format</a> from the Sugardrum shop. It includes a lyrics booklet and a book of short stories, each one about a song from the album. You can also buy it from <a href="https://itunes.apple.com/gb/album/postcards/id1081336392" target="_blank">Apple Music</a>, <a href="https://www.amazon.co.uk/gp/product/B01CGMKBJ4/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=nigebunn-21&creative=6738&linkCode=as2&creativeASIN=B01CGMKBJ4&linkId=901b6e5d8f9add95c7dcdd076589f0d2" target="_blank">Amazon mp3</a> and various other online stores from that date and also stream from <a href="//open.spotify.com/album/3SowuTWPQwJf2ndygPUfUv" target="_new">Spotify</a> etc.</p>
	</div>	
</div>

{% for m in site.data.music %}
{% if m.featured == 0 %}
<h2 class="ep-title">{{ m.title }}</h2>
{% endif %}	
<div class="ep_cont ep_cont--musicpage ep_cont--{{ m.embed-type }}">	
	{% if m.embed-type == 'spotify' %}	
	<div class="col-xs-12 col-sm-4">
		<iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A{{ m.spotify-id }}" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
	</div>
	<a href="{{ m.link-bandcamp }}" class="ep-cover-link" target="_blank"><img src="{{ m.cover }}" alt="{{ m.title }}" /></a>
	{% endif %}				
	{% if m.embed-type == 'bandcamp' %}	
	<div class="embed-cont">
		<iframe style="border: 0; width: 300px; height: 300px;" src="//bandcamp.com/EmbeddedPlayer/album={{ m.bandcamp-id }}/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="{{ m.link-bandcamp }}">{{ m.title }}</a></iframe>			
	</div>
	{% endif %}	
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
{% endfor %}
