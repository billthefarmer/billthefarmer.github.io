// test.js
//
// Version: 0.5
// Author: Bill Farmer

// Created by Bill Farmer
// Licence MIT
// Copyright (C) 2018 Bill Farmer

jQuery(document).ready(function($) {

    // let data = {};

    // $.getJSON("js/test.json", function(json) {
    //     data = json;
    // });

    // $("#data").html(JSON.stringify(data, null, 2));

    let data = JSON.parse($("#data").html());

    // Set up buttons
    $("input[type=button]").button();
    $("input[type=submit]").button();

    // Set up progress bars
    $("#progress").progressbar({value: 6.25});
    $("#max").progressbar({value: 100});

    // Set up radio buttons
    $("input[type=radio]").checkboxradio();

    $("#intro").html(data.intro);

    let question = 0;
    let value = 0;
    
    let questions = data.questions;
    let last = data.last;
    let results = {A: [0, 0], B: 0, C: 0, D: 0, E: 0, F: 0, J: 0};
    let matrix = data.matrix;

    // Process the start button
    $("#start").click(function() {
        question = 0;
        $("#data").css("display", "none");
        $(".intro").fadeOut(function(){$(".question").fadeIn()});
        $("#progress").progressbar("option", "value", 6.25);
        $("#question").html(questions[question].q);
        if (Math.round(Math.random()))
        {
            $("#label-1").html(questions[question].a[0]);
            $("#radio-1").attr("value", questions[question].v[0]);
            $("#label-2").html(questions[question].a[1]);
            $("#radio-2").attr("value", questions[question].v[1]);
        }

        else
        {
            $("#label-2").html(questions[question].a[0]);
            $("#radio-2").attr("value", questions[question].v[0]);
            $("#label-1").html(questions[question].a[1]);
            $("#radio-1").attr("value", questions[question].v[1]);
        }
        $("input[type=radio]").prop("checked", false);
        $("input[type=radio]").checkboxradio("refresh");
    });

    // Process the back button
    $("#back").click(function() {
        question--;
        let type = questions[question].t;
        results[type] -= value;
        if (question == 0)
            $("input.back").css("display", "none");
        $(".question").fadeOut(function() {
            let progress = (question + 1) * 6.25;
            $("#progress").progressbar("option", "value", progress);
            $("#question").html(questions[question].q);
            if (Math.round(Math.random()))
            {
                $("#label-1").html(questions[question].a[0]);
                $("#radio-1").attr("value", questions[question].v[0]);
                $("#label-2").html(questions[question].a[1]);
                $("#radio-2").attr("value", questions[question].v[1]);
            }

            else
            {
                $("#label-2").html(questions[question].a[0]);
                $("#radio-2").attr("value", questions[question].v[0]);
                $("#label-1").html(questions[question].a[1]);
                $("#radio-1").attr("value", questions[question].v[1]);
            }
            $("input[type=radio]").prop("checked", false);
            $("input[type=radio]").checkboxradio("refresh");
            $(".question").fadeIn();
        });
    });

    // Process the prev button
    $("#prev").click(function() {
        question--;
        let type = questions[question].t;
        results[type] -= value;
        $("div.last").fadeOut(function() {
            let progress = (question + 1) * 6.25;
            $("#progress").progressbar("option", "value", progress);
            $("#question").html(questions[question].q);
            if (Math.round(Math.random()))
            {
                $("#label-1").html(questions[question].a[0]);
                $("#radio-1").attr("value", questions[question].v[0]);
                $("#label-2").html(questions[question].a[1]);
                $("#radio-2").attr("value", questions[question].v[1]);
            }

            else
            {
                $("#label-2").html(questions[question].a[0]);
                $("#radio-2").attr("value", questions[question].v[0]);
                $("#label-1").html(questions[question].a[1]);
                $("#radio-1").attr("value", questions[question].v[1]);
            }
            $("input[type=radio]").prop("checked", false);
            $("input[type=radio]").checkboxradio("refresh");
            $(".question").fadeIn();
        });
    });

    // Process the radio buttons
    $("input[type=radio].answer").click(function() {
        let type = questions[question].t;
        value = +$(this).attr("value");
        results[type] += value;
        question++;
        if (question < questions.length)
        {
            let type = questions[question].t;
            $("div.question").fadeOut(function() {
                let progress = (question + 1) * 6.25;
                $("#progress").progressbar("option", "value", progress);
                $("#question").html(questions[question].q);
                if (Math.round(Math.random()))
                {
                    $("#label-1").html(questions[question].a[0]);
                    $("#radio-1").attr("value", questions[question].v[0]);
                    $("#label-2").html(questions[question].a[1]);
                    $("#radio-2").attr("value", questions[question].v[1]);
                }

                else
                {
                    $("#label-2").html(questions[question].a[0]);
                    $("#radio-2").attr("value", questions[question].v[0]);
                    $("#label-1").html(questions[question].a[1]);
                    $("#radio-1").attr("value", questions[question].v[1]);
                }
                $("input[type=radio]").prop("checked", false);
                $("input[type=radio]").checkboxradio("refresh");
                $("input.back").css("display", "block");
                $("div.question").fadeIn();
            });
        }

        else
        {
            $("div.question").fadeOut(function() {
                $("#last").html(last.q);
                $("#label-3").html(last.a[0]);
                $("#radio-3").attr("value", last.v[0]);
                $("#label-4").html(last.a[1]);
                $("#radio-4").attr("value", last.v[1]);
                $("#label-5").html(last.a[2]);
                $("#radio-5").attr("value", last.v[2]);
                $("#label-6").html(last.a[3]);
                $("#radio-6").attr("value", last.v[3]);
                $("#label-7").html(last.a[4]);
                $("#radio-7").attr("value", last.v[4]);
                $("input[type=radio]").checkboxradio("refresh");
                $("input[type=radio]").prop("checked", false);
                $("div.last").fadeIn();
            });
        }
    });

    //Process the last radio buttons
    $("input[type=radio].last").click(function() {
        let type = last.t;
        value = +$(this).attr("value");
        results[type] += value;
        $("div.last").fadeOut(function() {
            results.A[0] = results.B;
            results.A[1] = results.E;
            let result = calculate(results, matrix);
            $("#arch").attr("value", result.A);
            $("#brain").attr("value", result.B);
            $("#comm").attr("value", result.C);
            $("#direct").attr("value", result.D);
            $("#exec").attr("value", result.E);
            $("#focus").attr("value", result.F);
            $("#journey").attr("value", result.J);
            $("#A").attr("value", results.A);
            $("#B").attr("value", results.B);
            $("#C").attr("value", results.C);
            $("#D").attr("value", results.D);
            $("#E").attr("value", results.E);
            $("#F").attr("value", results.F);
            $("#J").attr("value", results.J);
            $("div.result").fadeIn();
            console.log(results);
            console.log(calculate(results, matrix));
        });
    });

    // Process the again button
    $("#again").click(function() {
        $("div.result").fadeOut(function() {
            for (let [key, value] in results)
            {
                if (key == "A")
                    results[key] = [0, 0];

                else
                    results[key] = 0;
            }
            $("input.back").css("display", "none");
            $("div.intro").fadeIn();
        });
    });

    function calculate(results, matrix) {
        let b = (results.B / 2) - 3;
        let c = (results.C / 2) - 3;
        let d = (results.D / 2) - 3;
        let e = (results.E / 2) - 3;
        let f = (results.F / 2) - 3;
        let j = (results.J / 2) - 1;

        let result = {A: matrix.A[Math.trunc(b / 2)][Math.trunc(e / 2)],
                      B: matrix.B[b],
                      C: matrix.C[c],
                      D: matrix.D[d],
                      E: matrix.E[e],
                      F: matrix.F[f],
                      J: matrix.J[j]};

        return result;
    }
});
