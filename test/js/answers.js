// answers.js
//
// Version: 0.5
// Author: Cat LeBlanc
// Copyright (c) 2018 Cat LeBlanc, all rights reserved
//
let data =
    {pages:
     [{pageno: 1,
       images:
       [{src: 'images/EDPS-Front-Page-Image.png',
         type: 'png'},
        {src: 'images/EDPS-Footer.png',
         type: 'png',
         y: -1}],
       text:
       [{text: "~forename~ ~lastname~",
         size: 24,
         type: 'bold',
         y: 532}]},
      {pageno: 2,
       images:
       [{src: 'images/EDPS-Cat.jpg',
         type: 'jpeg',
         x: -1,
         width: 225}],
       text:
       [{text: "\nHow to read your report",
         size: 18,
         type: 'bold'},
        {text: "Dear ~forename~",
         size: 14,
         type: 'normal',
         y: 340},
        {text: "\nWe are all individuals, yet often people want to treat us as the same. We're told we have to have certain qualities as an entrepreneur, but frequently it's not that simple.\n\nWe all want meaningful work, but we also want to feel good turning up to do that work each day.\n\nIn Your Entrepreneurial Design Profile you'll gain a deeper insight into who you are and how you can build a business that is aligned with your fundamental nature as a human being.\n\n\n\n"},
        {text: "Your Entrepreneurial Design Profile",
         type: 'bold'},
        {text: "\nYour Entrepreneurial Design Profile is broken down into 5 Types:\n\nB Type => Brain Type\nC Type => Communication Type\nD Type => Direction Type\nE Type => Execution Type\nF Type => Focus Type",
         type: 'normal'}]},
      {pageno: 3,
       text:
       [{text: "\nYour B Type describes how you prefer to think. Are you more left-brained or right-brained? Do you lean towards logic or intuition? Neither is right or wrong but your natural type will affect how you want to run and show up in your business.\n\nYour C Type is your communication style. How do you prefer to interact with others? Does interaction with others fuel or drain you? Knowing this and working with your natural type will enable you to work better with other people and manage your own energy in a way that supports you.\n\nYour D Type describes how you prefer to draw influence in your work. Is it your natural tendency to innovate or do you prefer to rely on time-tested methods? Both are options inside of business and the same as with the other types, expecting something different of yourself will not serve you.\n\nYour E Type is your execution style. What role do you want to take as a business owner? Do you want to implement or do you want an advisory role. It is possible to build strong, profitable businesses in either and it's important to know your natural preference.\n\nYour F Type describes your natural focus point. Do you work methodically through one project at a time or do you like to have multiple projects to work on at once? This affects how you niche and how you run your business so that it works for you.\n\nI hope you find your design to be insightful in your business building journey!\n\n"}],
       images:
       [{src: 'images/EDPS-Sig.png',
         type: 'png',
         y: 560,
         width: 106,
         height: 64}]}
     ],
     last:
     {images:
      [{src: 'images/EDPS-Masterclass.jpg',
        type: 'jpeg'}],
      text:
      [{text: "Copyright © 2018 Cat LeBlanc\n\nAll rights reserved. No part of this report may be reproduced, stored in a retrieval system, communicated or transmitted in any form or by any means without prior written permission. All enquires should be made to hello@catleblanc.com.\n\n\nDisclaimer\n\nThe material in this report is of the nature of general comment only, and does not represent professional advice. It is not intended to provide specific guidance for particular circumstances and it should not be relied on as a basis for decision to take action or not take action on any matter which it covers. Readers should obtain professional, individual advice where appropriate, before making any such decision.\n\nTo the maximum extent permitted by law the author disclaims all responsibility and liability to any person, arising directly or indirectly from any person taking or not taking action based on the information in this report.",
        size: 12,
        color: 150,
        y: 425}]
     },
     answers:
     {B:
      {12:
       {type: "Your B Type is Intuitive.",
        text: "You are a deeply intuitive person. You make decisions by feeling into them. You are in tune with your heart and gut brain. You often sense the right direction to take without needing to think through the pros and cons.\n\nYou may be highly creative and outside the box and enjoy doing things differently from the norm.\n\nYou will be happiest in a business where you are able to exercise this creativity and intuition. While business will always require dealing with numbers so your job is to balance where you can feel into the business and where more pragmatic decisions can be made.\n\nYou will need to make sure to protect your creative flow as well as maintain good boundaries to keep your energy high.\n\nWhen it comes to spreading the word about your business you may want to harness your creativity and visual talents. The more visual of the social media platforms are likely a good choice for you to gain exposure."},
       10:
       {type: "Your B Type is Emotive.",
        text: "You are in touch with your emotions when it comes to the direction in life. While you are also have a more pragmatic side you rely strongly on your emotions when it comes to your direction in life and prefer not to get bogged down in the tactical details.\n\nYou will be happiest in a business that allows for this balance of feeling and thinking. While business will at times involve dealing with strategy and hard facts so your job is to balance where you can feel into the business and where more pragmatic decisions can be made.\n\nYou will need to put boundaries in place to protect your emotional energy and to make sure to stay in creative flow in your business. That may be boundaries around your working time and space or may be in how others interact with you."},
       8:
       {type: "Your B Type is Strategic.",
        text: "You like to think through all the options when it comes to making decisions. You like the security of having a mapped out plan alongside with checking in your feelings or intuition.\n\nYou weigh up the ins and outs (make this more left brain/right brain) and choose the best way to hit your goals. While you are creative and in connection with your emotions you use a strong dose of logic to enable you to make decisions and get things done.\n\nYour business idea is likely to reflect your strategic nature and you will enjoy the tactical nature of business."},
       6:
       {type: "Your B Type is Analytical.",
        text: "You are highly analytical. You like to analyse all the data when it comes to making decisions. You like to work with solid facts and specifics.\n\nYour business idea is likely to reflect your analytical nature and critical thinking skills as these abilities are in extremely valuable to those who don't possess them."}},
      C:
      {12:
       {type: "Your C Type is Presenter.",
        text: "You love to be around people. You get energy from a crowded room.\n\nYou may consider having communication and other people as a core part of your business.\n\nGiven your highly sociable personality you will likely prefer to work in a sociable environment like a co-working hub or to have an office where other people are also moving around.\n\nWhen it comes to promoting your business and finding clients you may like to do speaking gigs or run workshops. Anything that harnesses your love of connecting with people will enable you to flow more.\n\nYou may like to get yourself interviewed or run an interview series to grow your business and get your work in front of more people."},
       10:
       {type: "Your C Type is Engager.",
        text: "You enjoy meeting people and like regular interaction with a range of people.\n\nWorking solely by yourself at home or in a purely online form is likely to become frustrating for you after time. You will likely work best in a more engaging environment.\n\nWhen it comes to promoting your business you'll probably want to take actions that involve interaction with other people. Perhaps strategic partners, joint ventures, interview series or events that bring people together."},
       8:
       {type: "Your C Type is Relater.",
        text: "You enjoy quality time with people you know well and are not generally a fan of dealing with large groups of people at once.\n\nYou will likely prefer working mainly by yourself or with a small supportive team. You may well be attracted to the idea of online business because of the fact it removes you from a busy office environment.\n\nWhen it comes to promoting your business you'll likely want to choose options that don't have you in placed in crowded environments. You may lean towards lead generation choices like automated webinars so that you don't need to constantly show up personally which taxes your energy."},
       6:
       {type: "Your C Type is Reflector.",
        text: "You enjoy quality one on one time with people you know well and are generally not a fan of situations that involve dealing with lots of people at once. You like deep engrossing conversation and are a great listener.\n\nYou will likely prefer working mainly by yourself or with a small supportive team. You may well be attracted to the idea of online business because of the fact it removes you from a busy office environment.\n\nWhen it comes to promoting your business you'll likely want to choose options that don't have you in placed in crowded environments. You may lean towards more choices like automated webinars so that you don't need to constantly show up personally which taxes your energy or building strong partnerships with a small number of key people that can help you grow your business."}},
      D:
      {12:
       {type: "Your D Type is Trusted.",
        text: "You prefer trusted, proven methods that are established as winners. You prefer to have a high level of certainty in your work methods.\n\nYou may prefer using another expert's system to start off with, at least while finding your feet. \n\nThis could mean certifying under another expert or it could mean using a franchise, or multilevel marketing system."},
       10:
       {type: "Your D Type is Pragmatic.",
        text: "You like the reassurance of well-tested approaches but you also like to be able to add in your own expertise or a touch of what's happening now.\n\nYou take a pragmatic approach, respecting what has come before but also bringing in some new elements."},
       8:
       {type: "Your D Type is Agile.",
        text: "You prefer to stay flexible. While you respect your predecessors in your field you know there is much to be developed and improved. You feel excited about finding new ways for progress to be made.\n\nYou bring a fresh, yet measured approach to the marketplace."},
       6:
       {type: "Your D Type is Innovative.",
        text: "You love to operate at the cutting edge and uncover new exciting approaches and techniques. You would love your work to at the forefront of its field and it breaking new ground.\n\nYou enjoy bringing completely new, innovative approaches to the marketplace."}},
      E:
      {12:
       {type: "Your E Type is Torch-bearer.",
        text: "You are a leader. You prefer guiding people on how tasks should be done as opposed to doing the work. You natural tendency is to take charge.\n\nThe business idea that suits you best will center around being an advisor as opposed to implementing work for other people. This could be in the field of coaching or consulting."},
       10:
       {type: "Your E Type is Architect.",
        text: "You are a hands-on leader. You lay down the framework and lead others using practical methods how to get results.\n\nThe business idea that suits you best will center around being an advisor but also getting down to earth and showing how the practicalities work."},
       8:
       {type: "Your E Type is Developer.",
        text: "Your preferred style of work is guided implementation. You like to get your teeth into a solution but you also want to have an element of control over what gets done. Your role is a strategic implementer, you create solutions but you also take part in developing the strategy behind the solution.\n\nThe business idea that suits you best will be a form of done for you work, where you deliver solutions for other people with an advisory element included."},
       6:
       {type: "Your E Type is Producer.",
        text: "Your preferred style of work is production. You like to build solutions and prefer to be given a really clear brief. You don't want to take charge of the direction, you prefer to lose yourself in the flow of the actual work.\n\nThe business idea that suits you best will be a form of done for you work, where you are given a solid information on what is needed and you produce the finished work."}},
      F:
      {12:
       {type: "Your F Type is Diverse.",
        text: "You are the ultimate multitasker and the definition of multipassionate. You have diverse interests, you are always thinking of the next thing and you love big picture thinking.\n\nYou have almost certainly found it hard to take the traditional advice of 'choose one thing and stick with it'. While it is true that energy flows where attention goes this does not necessarily mean you have to choose one interest and give up all the others to be successful in business.\n\nThe good news is there is likely an overarching theme that can be used to tie many of your interests together. In many cases your interests tie back to one key vision for the future or belief that you are wanting to bring to the world.\n\nYour challenge in terms of day to day in the business will be making sure that there is enough attention on one idea at a time to bring it to life. You may well enjoy the idea phase but not have as much passion for the implementation.\n\nThe key for you will be putting systems in place so that projects come to life. That may well be hiring implementation support or in the beginning taking focussed time to get the detail work done so the big picture can come to life.\n\nIn terms of marketing your business you will likely enjoy using lots of different strategies to keep it interesting and get your big vision out to the world. You will probably have fun experimenting with new methods to see what works for you."},
       10:
       {type: "Your F Type is Varied.",
        text: "You like to keep a relatively broad focus. You get frustrated if you have to work on one thing at a time and may at times find it hard to bring your big ideas to life.\n\nYou may find it hard to choose 'one thing' and have this constant feeling that you are giving up your other passions. The good news is there is likely a thread between your varied interests that can be used to tie at least some of them together. Look for common themes and look at the reasons why they are important to you.\n\nYour challenge will be making sure that everything you want to bring into the world actually get done. You may well enjoy the idea phase but not have as much passion for the implementation.\n\nThe key for you will be putting systems in place so that projects come to life. That may well be hiring implementation support or in the beginning taking focussed time to get the detail work done so the big picture can come to life.\n\nIn terms of marketing your business you will likely enjoy using a few different strategies to keep it interesting and spread your attention across those. You will probably have fun experimenting with new methods to see what works for you."},
       8:
       {type: "Your F Type is Related.",
        text: "You like to keep a relatively narrow focus. You don't like trying to juggle lots of different priorities and like to have a couple of things you are concentrating on without taking on too much at once in order to hit your goals.\n\nYou will likely prefer to have a business that has a small number of areas you can bring together. Even if your main few focusses seem unrelated initially it may be possible to draw them together under one umbrella to create one cohesive niche.\n\nYou likely have a good mix of keeping your eye on the big goal while at the same time getting the work done to move you forward.\n\nIn terms of marketing your business you can best utilize your type by choosing a small number of marketing methods and doing them really well.Trying to do everything at once is likely not going to be a good approach for you and you should stick with what works for you best."},
       6:
       {type: "Your F Type is Singular.",
        text: "You like to work on one thing at a time. You don't like trying to juggle lots of different priorities and prefer to put your head down and focus on one major project before taking on a new one.\n\nYou will likely prefer having a relatively specialised business idea, at least in the beginning, so that you can feel comfortable building up one area of expertise.\n\nYou will benefit from streamlining your business operations as much as possible so you can minimise the number of hats you need to wear as a new or growing business owner. You may well want to take on a support person early in your journey so you can focus purely on the areas that you enjoy and drive the business forward.\n\nYou may experience difficulty drawing your focus away from your current favourite project so it would be a great help for you to have someone in your environment who reminds you of the bigger picture and you can bounce ideas off of to make sure that the project you are working on is indeed the best use of your time.\n\nIn terms of marketing your business you can best utilize your natural single-tasker focus by choosing one or two core marketing methods and doing them really well.\n\nTrying to be everywhere at once, or using what I call The Visibility Fallacy will cause you to burn out because it goes against your natural tendency to focus in."}}
     }};
