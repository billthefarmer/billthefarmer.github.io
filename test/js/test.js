// test.js
//
// Version: 0.5
// Author: Bill Farmer

// Created by Bill Farmer
// Licence MIT
// Copyright (C) 2018 Bill Farmer

jQuery(document).ready(function($) {

    let data =
        {intro:
         "Please answer the following questions as carefully and accurately as you can",
         questions:
         [{q: "I prefer dealing with",
           t: "B",
           a: ["Numbers", "Images"],
           v: [2, 4]},
          {q: "I have more fun",
           t: "C",
           a: ["Talking one on one with one person",
               "Meeting lots of people"],
           v: [2, 4]},
          {q: "I like options to be",
           t: "D",
           a: ["Cutting edge", "Proven"],
           v: [2, 4]},
          {q: "I prefer to",
           t: "E",
           a: ["Be guided", "Guide"],
           v: [2, 4]},
          {q: "I look at",
           t: "F",
           a: ["The details", "The big picture"],
           v: [2, 4]}],
         results:
         {A: 0,
          B: 0,
          C: 0,
          D: 0,
          E: 0,
          F: 0}};

    // Set up buttons
    $("input[type=button]").button();

    // Set up radio buttons
    // $("input[type=radio]").checkboxradio();

    $("#intro").html(data.intro);

    let question = 0;
    let questions = data.questions;

    // Process the start button
    $("#start").click(function() {
        $(".intro").fadeOut(function(){$(".question").fadeIn()});
        $("#question").html(questions[question].q);
        $("#label-1").html(questions[question].a[0]);
        $("#radio-1").attr("value", questions[question].v[0]);
        $("#label-2").html(questions[question].a[1]);
        $("#radio-2").attr("value", questions[question].v[1]);
        $("input[type=radio]").prop("checked", false);
    });

    // Process the radio buttons
    $("input[type=radio]").click(function() {
        let type = questions[question].t;
        data.results[type] += +$(this).attr("value");
        question++;
        if (question < questions.length)
        {
            let type = questions[question].t;
            $(".question").fadeOut(function() {
                $("#question").html(questions[question].q);
                $("#label-1").html(questions[question].a[0]);
                $("#radio-1").attr("value", questions[question].v[0]);
                $("#label-2").html(questions[question].a[1]);
                $("#radio-2").attr("value", questions[question].v[1]);
                $("input[type=radio]").prop("checked", false);
                $(".question").fadeIn()});
        }

        else
        {
            $(".question").fadeOut(function(){$(".result").fadeIn()});
            $("#result").html(JSON.stringify(data.results, null, 4));
            console.log(data.results);
        }
    });
});
