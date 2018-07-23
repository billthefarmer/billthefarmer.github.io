// quiz.js
//
// Version: 0.5
// Author: Bill Farmer

// Created by Bill Farmer
// Licence MIT
// Copyright (C) 2018 Bill Farmer

jQuery(document).ready(function($) {

    // Set up buttons
    $("input[type=button]").button();

    // Set up radio buttons
    $("input[type=radio]").checkboxradio();

    let panel = 0;

    // Process the start button
    $("#start").click(function() {
        $("#first").slideUp();

        panel++;

        $("#panel-" + panel).slideDown();
    });
});
