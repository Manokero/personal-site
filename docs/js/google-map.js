function init(){for(var e=new google.maps.LatLng(40.69847032728747,-73.9514422416687),o={zoom:7,center:e,scrollwheel:!1,styles:[{featureType:"administrative.country",elementType:"geometry",stylers:[{visibility:"simplified"},{hue:"#ff0000"}]}]},n=document.getElementById("map"),t=new google.maps.Map(n,o),a=["New York"],s=0;s<a.length;s++)$.getJSON("http://maps.googleapis.com/maps/api/geocode/json?address="+a[s]+"&sensor=false",null,function(e){var o=e.results[0].geometry.location,n=new google.maps.LatLng(o.lat,o.lng);new google.maps.Marker({position:n,map:t,icon:"images/loc.png"})})}var google;google.maps.event.addDomListener(window,"load",init);