function iniciarMap() {
    var coord = {lat: 4.788279,lng:-75.730043};  
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 15,
        center: coord,
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
    
}