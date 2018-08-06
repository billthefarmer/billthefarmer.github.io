// report.js
//
// Version: 0.5
// Author: Bill Farmer

// Created by Bill Farmer
// Licence MIT
// Copyright (C) 2018 Bill Farmer

jQuery(document).ready(function($) {

    // Page parameters
    let A = getURLParameter('A');
    let B = getURLParameter('B');
    let C = getURLParameter('C');
    let D = getURLParameter('D');
    let E = getURLParameter('E');
    let F = getURLParameter('F');
    let J = getURLParameter('J');

    let forename = getURLParameter('forename');
    let lastname = getURLParameter('lastname');
    let email = getURLParameter('email');

    let data = JSON.parse($("#data").html());

    let results = {A: [0, 0], B: 0, C: 0, D: 0, E: 0, F: 0, J: 0};
    let matrix = data.matrix;

    // Dimensions in points
    let pageWidth = 595;
    let pageHeight = 842;
    let margin = 36; // 0.5in
    let textWidth = pageWidth - (margin * 2);

    $("#update, #report").button();

    let doc = jsPDF({unit: 'pt',
                     compress: true});

    // Page 1
    addImage('images/EDPS-Front-Page-Image.png', 'png',
             doc, 1, margin, margin, textWidth, 435,
             function() {
                 let string = doc.output('bloburi');
	         $('#preview').attr('src', string);
             });

    if (forename == undefined)
        forename = "John";
    if (lastname == undefined)
        lastname = "Doe";

    let name = forename + " " + lastname;

    $("#name").html(name);
    doc.setFontSize(24);
    doc.setFontType('bold');
    doc.text(name, margin, 531);

    addImage('images/EDPS-Footer.png', 'png',
             doc, 1, margin, pageHeight - margin - 103, textWidth, 103,
             function() {
                 let string = doc.output('bloburi');
	         $('#preview').attr('src', string);
             });

    // Page 2
    doc.addPage();
    doc.setFontSize(18);
    doc.text("How to read your report", margin, margin + 18);

    addImage('images/EDPS-Cat.jpg', 'jpeg',
             doc, 2, pageWidth / 2, margin, textWidth / 2, textWidth / 2,
             function() {
                 let string = doc.output('bloburi');
	         $('#preview').attr('src', string);
             });

    let y = margin + textWidth / 2;
    doc.setFontSize(14);
    doc.setFontType('normal');
    y = addText("\nDear " + forename, doc, margin, y, textWidth);

    let text = "\nWe are all individuals, yet often people want to treat us as the same. We're told we have to have certain qualities as an entrepreneur, but frequently it's not that simple.\n\nWe all want meaningful work, but we also want to feel good turning up to do that work each day.\n\nIn Your Entrepreneurial Design Profile you'll gain a deeper insight into who you are and how you can build a business that is aligned with your fundamental nature as a human being.\n\n"

    y = addText(text, doc, margin, y, textWidth);

    doc.setFontType('bold');
    y = addText("Your Entrepreneurial Design Profile", doc,
                margin, y, textWidth);

    text = ["",
            "Your Entrepreneurial Design Profile is broken down into 5 Types:",
            "", "B - Type -> Brain Type",
            "C - Type -> Communication Type",
            "D - Type -> Direction Type",
            "E - Type -> Execution Type",
            "F - Type -> Focus Type"];

    doc.setFontType('normal');
    y = addText(text, doc, margin, y, textWidth);

    text = "\nYour B Type describes how you prefer to think. Are you more left-brained or right-brained? Do you lean towards logic or intuition? Neither is right or wrong but your natural type will affect how you want to run and show up in your business.\n\nYour C Type is your communication style. How do you prefer to interact with others? Does interaction with others fuel or drain you? Knowing this and working with your natural type will enable you to work better with other people and manage your own energy in a way that supports you."

    y = addText(text, doc, margin, y, textWidth);

    // Page 3
    doc.addPage();
    y = margin;

    text = "\nYour D Type describes how you prefer to draw influence in your work. Is it your natural tendency to innovate or do you prefer to rely on time-tested methods? Both are options inside of business and the same as with the other types, expecting something different of yourself will not serve you.\n\nYour E-Type is your execution style. What role do you want to take as a business owner? Do you want to implement or do you want an advisory role. It is possible to build strong, profitable businesses in either and it's important to know your natural preference.\n\nour F-Type describes your natural focus point. Do you work methodically through one project at a time or do you like to have multiple projects to work on at once? This affects how you niche and how you run your business so that it works for you.\n\nI hope you find your design to be insightful in your business building journey!\n\n";

    y = addText(text, doc, margin, y, textWidth);

    addImage('images/EDPS-Sig.png', 'png', doc, 3, margin, y, 106, 64,
             function() {
                 let string = doc.output('bloburi');
	         $('#preview').attr('src', string);
             });

        $("#update").click(function() {
        var string = doc.output('bloburi');
	$('#preview').attr('src', string);
    });

    $('#report').click(function() {
        doc.save('report.pdf');
    });

    function update() {
        let string = doc.output('bloburi');
	$('#preview').attr('src', string);
    }

    function getURLParameter(param)
    {
        let pageURL = window.location.search.substring(1);
        let URLVariables = pageURL.split('&');
        for (let i = 0; i < URLVariables.length; i++)
        {
            let parameterName = URLVariables[i].split('=');
            if (parameterName[0] == param)
                return parameterName[1];
        }
    }

    function addText(text, doc, x, y, width) {
        let textLines = doc.splitTextToSize(text, width);
        doc.text(textLines, x, y);
        return y + (textLines.length * doc.getLineHeight());
    }

    function addImage(src, type, doc, page, x, y, width, height, func) {
        let img = new Image();
        img.src = src;
        console.log(img);
        img.addEventListener('load', function(event) {
            let dataUrl = getDataUrl(event.currentTarget, type);
            doc.setPage(page);
            doc.addImage(dataUrl, type, x, y, width, height);
            if (func)
                func();
        });
    }

    function getDataUrl(img, type) {
        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        var context = canvas.getContext('2d');
        context.drawImage(img, 0, 0);
        console.log(type);
        return canvas.toDataURL('image/' + type);
    }
});
