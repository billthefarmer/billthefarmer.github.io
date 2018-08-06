jQuery(document).ready(function($) {

    let report = jsPDF({unit: 'pt'});

    addImage('images/EDPS-Front-Page-Image.png', 'png',
             report, 1, 36, 36, 523, 435);

    let text = 'You are a deeply intuitive person. You make decisions by feeling into them. You are in tune with your heart and gut brain. You often sense the right direction to take without needing to think through the pros and cons.';

    let textLines = report.splitTextToSize(text, 523);
    report.text(textLines, 36, 503);

    $('#report, #update').button();
    $('#report').click(function() {
        report.save('report.pdf');
    });
    $('#update').click(function() {
        var string = report.output('bloburi');
	$('#preview').attr('src', string);
    });
    

    function addImage(src, type, doc, page, x, y, width, height) {
        let img = new Image();
        img.src = src;
        img.addEventListener('load', function(event) {
            let dataUrl = getDataUrl(event.currentTarget);
            doc.setPage(page);
            doc.addImage(dataUrl, type, x, y, width, height);
        });
    }

    function getDataUrl(img) {
        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        var context = canvas.getContext('2d');
        context.drawImage(img, 0, 0); 
        return canvas.toDataURL();
    }
});
