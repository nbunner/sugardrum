videoUrl = str_replace("vid-", "", $_REQUEST['id']);
title = $_REQUEST['title'];
descrip = $_REQUEST['descrip'];
echo "<iframe src=\"http://www.youtube.com/embed/".$videoUrl."?autoplay=1\" width=\"280\" height=\"210\" frameborder=\"0\" allowfullscreen></iframe>";
echo "<p>".$title." &mdash; <em>".$descrip."</em></p>";