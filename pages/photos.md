---
layout: page
title: Photos
permalink: /photos/
currentPage: photos
topTitle: Photos
topSectionBack: top-section-photos
---
<p class="col-xs-12">Click on a photo to make it bigger</p>
<ul class="photos list-unstyled col-xs-12">

{% for photo in site.data.photos %}
  <li>
    <a 
        class="group fresco" 
        data-fresco-group="sugardrum_photos" 
        data-fresco-group-options="ui: 'inside'" 
        title="{{ photo.caption }}" 
        href="//files.sugardrum.com/images/photos/{{ photo.url }}" 
        rel="group">
            <img 
                src="//files.sugardrum.com/images/photos/thumbnails/{{ photo.url }}" 
                alt="{{ photo.caption }}" 
                width="120" 
                height="120" />
    </a>

  </li>
{% endfor %}
</ul>



<p class="col-xs-12">Some photos from the recording sessions for the new album, &quot;Postcards&quot;</p>

<ul class="photos list-unstyled col-xs-12">
{% for photo in site.data.photos-recording-postcards %}
  <li>
    <a 
        class="group fresco" 
        data-fresco-group="sugardrum_photos" 
        data-fresco-group-options="ui: 'inside'" 
        title="{{ photo.caption }}" 
        href="//files.sugardrum.com/images/photos/{{ photo.url }}" 
        rel="group">
            <img 
                src="//files.sugardrum.com/images/photos/thumbnails/{{ photo.url }}" 
                alt="{{ photo.caption }}" 
                width="120" 
                height="120" />
    </a>

  </li>
{% endfor %}
</ul>
