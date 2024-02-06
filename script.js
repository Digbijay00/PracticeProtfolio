document.getElementById('downloadcv').addEventListener('click', function() {
    var link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1-74_SjnVV55gVYno2taAvhWEPrEM2fkF/view?usp=sharing';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});