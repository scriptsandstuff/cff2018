$(function() {
    $('.selectpicker').on('change', function(){
        // var selected = $(this).find("option:selected").val(); 
        // why is val empty??
        // https://stackoverflow.com/questions/25720986/bootstrap-select-how-to-fire-event-on-change#28073479
        var selected = $(this).find("option:selected")[0].firstChild.data;
        
        for (var i = 0; i < markers.length; i++) {
            if (markers[i].venue === selected) {
                markers[i].openPopup();
                break;
            }
        }
        
    });
});
