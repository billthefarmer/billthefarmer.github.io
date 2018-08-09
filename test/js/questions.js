// questions.js
//
// Version: 0.5
// Author: Cat LeBlanc
// Copyright (c) 2018 Cat LeBlanc, all rights reserved
//
let data =
    {
        intro: "Please answer the following questions as carefully and accurately as you can",
        questions:
        [{q: "I prefer dealing with",
          t: "B",
          a: ["Numbers",
              "Images"],
          v: [2, 4]},
         {q: "I have more fun",
          t: "C",
          a: ["Talking at length with one person",
              "Meeting lots of people"],
          v: [2, 4]},
         {q: "I like options to be",
          t: "D",
          a: ["Cutting edge",
              "Proven"],
          v: [2, 4]},
         {q: "I prefer to",
          t: "E",
          a: ["Be guided",
              "Guide"],
          v: [2, 4]},
         {q: "I look at",
          t: "F",
          a: ["The details",
              "The big picture"],
          v: [2, 4]},
         {q: "My process to make decisions is more",
          t: "B",
          a: ["Thinking",
              "Feeling"],
          v: [2, 4]},
         {q: "When with other people I like",
          t: "C",
          a: ["Listening to ideas",
              "Expressing ideas"],
          v: [2, 4]},
         {q: "I tend to choose",
          t: "D",
          a: ["Developing new approaches",
              "Taking what has worked for others"],
          v: [2, 4]},
         {q: "My modus operandi is",
          t: "E",
          a: ["To take charge",
              "To build a solution"],
          v: [2, 4]},
         {q: "I'd describe myself as a",
          t: "F",
          a: ["Single tasker",
              "Multitasker"],
          v: [2, 4]},
         {q: "I prefer to work with",
          t: "B",
          a: ["Facts",
              "Intuition"],
          v: [2, 4]},
         {q: "Social interaction",
          t: "C",
          a: ["Depletes my energy",
              "Gives me energy"],
          v: [2, 4]},
         {q: "I want to be given",
          t: "D",
          a: ["Tested processes",
              "Flexible options"],
          v: [2, 4]},
         {q: "When problems need to be solved I gravitate towards",
          t: "E",
          a: ["Getting work done to solve the problem",
              "Advising on how the problem can be solved"],
          v: [2, 4]},
         {q: "I prefer",
          t: "F",
          a: ["Having one goal",
              "Having lots of projects to work on"],
          v: [2, 4]}],
        last: {
            q: "Where are you on your business journey right now?",
            a: ["Deciding on my business idea or niche",
                "I have my business idea, I'm preparing to start",
                "I've started but haven't had paying clients yet",
                "I've had a few paying clients but it's inconsistent",
                "I've had a good number of paying clients and am focused on growth"],
            t: "J",
            v: [2, 4, 6, 8, 10]},
        matrix: {
            A: [["Growth Engine",
                 "Dynamic Pioneer"],
                ["Creative Powerhouse",
                 "Visionary Guide"]],
            B: ["Analytical",
                "Strategic",
                "Emotive",
                "Intuitive"],
            C: ["Reflector",
                "Relater",
                "Engager",
                "Presenter"],
            D: ["Innovative",
                "Agile",
                "Pragmatic",
                "Trusted"],
            E: ["Producer",
                "Developer",
                "Architect",
                "Torch-bearer"],
            F: ["Singular",
                "Related",
                "Varied",
                "Diverse"],
            J: ["Deciding",
                "Decided",
                "Started",
                "Expanding"]}
    };