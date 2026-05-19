document.getElementById('videoFile').addEventListener('change', function(e) {
    if(e.target.files.length > 0) {
        document.getElementById('fileInfo').innerText = e.target.files[0].name;
    } else {
        document.getElementById('fileInfo').innerText = 'No file selected';
    }
});
document.getElementById('thumbFile').addEventListener('change', function(e) {
    if(e.target.files.length > 0) {
        document.getElementById('thumbInfo').innerText = e.target.files[0].name;
    } else {
        document.getElementById('thumbInfo').innerText = 'No thumbnail selected';
    }
});