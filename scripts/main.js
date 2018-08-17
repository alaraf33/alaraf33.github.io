(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(function () {
  // Scrollspy
  var sidebarEl = $('.sidebar'),
      sidebarWidth = sidebarEl.width(),
      navEl = $('.sidebar .nav');

  // navEl.css('width', sidebarWidth);
  // $(window).resize(function () {
  //   sidebarWidth = sidebarEl.width();
  //   navEl.css('width', sidebarWidth);
  // });


  // Smooth scrolling when clicking an anchor link
  var $root = $('html, body');
  $('.nav a, .navbar a').click(function () {
    var href = $.attr(this, 'href');
    $root.animate({
      scrollTop: $(href).offset().top - 106
    }, 500, function () {
      window.location.hash = href;
    });
    return false;
  });

  $(".sidebar").stick_in_parent({
    offset_top: 100
  });

  $('.tooltip-init').tooltip();
  // $('.tooltip-init').tooltip('show');
});

},{}]},{},[1])

//# sourceMappingURL=main.js.map
