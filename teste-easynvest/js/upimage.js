function handleFileSelect(evt) {
    var files = evt.target.files;
    var f = files[0];
    var reader = new FileReader();
     
  	reader.onload = (function(theFile) {
        return function(e) {
			document.getElementById('divThumbImg').innerHTML = ['<img src="', e.target.result,'" title="', theFile.name, '" />'].join('');
        };
	})(f);
	   
	reader.readAsDataURL(f);
}

document.getElementById('uplImage').addEventListener('change', handleFileSelect, false);