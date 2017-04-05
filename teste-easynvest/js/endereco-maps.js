var autocomplete;

function initAutocomplete() {

    autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */
        (document.getElementById('txtAddress')), {
            types: ['geocode']
        });

    google.maps.event.addListener(autocomplete, 'place_changed', function() {
        var localizacaoAC = autocomplete.getPlace();
        var latitude = localizacaoAC.geometry.location.lat();
        var longitude = localizacaoAC.geometry.location.lng();

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            draggable: true,
            center: new google.maps.LatLng(latitude, longitude),
            zoomControl: true,
            scrollwheel: false
        });

        var marker = new google.maps.Marker({
            position:  {lat: latitude, lng: longitude},
            map: map
        });

        //console.log(geolocation.lat+", "+geolocation.lng)

        //var map = new google.maps.Map(document.getElementById('map'), marker);
        document.getElementById('map').style.display = 'block';

        var seta = '<div class="seta" style="position: absolute;right: 10px;top: 10px;border-bottom-color: #000;content: &quot;&quot;;width: 0;height: 0;border-left: 6px solid transparent;                    border-right: 6px solid transparent;/* border-top: 8px solid #000; */z-index: 1;                    border-bottom: 8px solid #000;"></div>';            
    });        
}    