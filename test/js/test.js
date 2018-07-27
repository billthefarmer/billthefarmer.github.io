// test.js
//
// Version: 0.5
// Author: Bill Farmer

// Created by Bill Farmer
// Licence MIT
// Copyright (C) 2018 Bill Farmer

jQuery(document).ready(function($) {
    /*
    let data =
        {intro: "Please answer the following questions as carefully and accurately as you can",
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
           v: [2, 4]},
          {q: "My process to make decisions is more",
           t: "B",
           a: ["Thinking", "Feeling"],
           v: [2, 4]},
          {q: "When with other people I like",
           t: "C",
           a: ["Listening to ideas", "Expressing ideas"],
           v: [2, 4]},
          {q: "I tend to choose",
           t: "D",
           a: ["Discovering new approaches",
               "Taking what has worked for others"],
           v: [2, 4]},
          {q: "My modus operandi is",
           t: "E",
           a: ["To take charge", "To build a solution"],
           v: [2, 4]},
          {q: "I'd describe myself as a",
           t: "F",
           a: ["Single tasker", "Multitasker"],
           v: [2, 4]},
          {q: "I prefer to work with",
           t: "B",
           a: ["Facts", "Intuition"],
           v: [2, 4]},
          {q: "Social interaction",
           t: "C",
           a: ["Depletes my energy", "Gives me energy"],
           v: [2, 4]},
          {q: "I want",
           t: "D",
           a: ["Tested processes", "Flexible options"],
           v: [2, 4]},
          {q: "When problems need to be solved I gravitate towards",
           t: "E",
           a: ["Getting work done to solve the problem",
               "Advising on how the problem can be solved"],
           v: [2, 4]},
          {q: "I prefer",
           t: "F",
           a: ["Having one goal", "Having lots of projects to work on"],
           v: [2, 4]}],
         last:
         {q: "Where are you on your business journey right now?",
          a: ["Deciding on my business idea/niche",
              "I know what I want to do, I haven't started",
              "Started, working towards my first clients",
              "Got my first clients, looking to grow"],
          t: "J",
          v: [2, 4, 6, 8]},
        matrix:
         {A: [["Secret Weapon", "Dynamic Pioneer"],
              ["Creative Powerhouse", "Visionary Coach"]],
          B: ["Analytical", "Strategic", "Emotive", "Intuitive"],
          C: ["Reflector", "Relator", "Engager", "Presenter"],
          D: ["Innovative", "Agile", "Pragmatic", "Trusted"],
          E: ["Producer", "Developer", "Architect", "Torch-bearer"],
          F: ["Singular", "Related", "Varied", "Diverse"]
         },
        };
    */
    // let data = {};

    // $.getJSON("js/test.json", function(json) {
    //     data = json;
    // });

    // $("#data").html(JSON.stringify(data, null, 2));

    let data = JSON.parse($("#data").html());

    // Set up buttons
    $("input[type=button]").button();
    $("input[type=submit]").button();

    // Set up radio buttons
    // $("input[type=radio]").checkboxradio();

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
        $("#progress").attr("value", 6.25);
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
            $("#progress").attr("value", progress);
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
            $("#progress").attr("value", progress);
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
                $("#progress").attr("value", progress);
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
            $("div.result").fadeIn();
            console.log(results);
            console.log(calculate(results, matrix));
        });
    });

    // Process the again button
    $("#again").click(function() {
        $(".result").fadeOut(function() {
            for (let [key, value] in results)
            {
                if (key == "A")
                    results[key] = [0, 0];

                else
                    results[key] = 0;
            }
            $(".intro").fadeIn();
        });
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
