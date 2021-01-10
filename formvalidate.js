var _URL = window.URL || window.webkitURL;

$("#photo").change(function(e) {
    var file, img;

    if ((file = this.files[0])) {
        img = new Image();
        img.onload = function() {
            if(this.width <=1000 || this.height <= 500){
              $('.indicator').attr('style', 'color:red');
              $('.indicator').text(this.width + 'image width must be greater than 1000px');
            }
            else{
              $('.indicator').text('');
            }
        };
        img.onerror = function() {
            alert( "not a valid file: " + file.type);
        };
        img.src = _URL.createObjectURL(file);


    }

});