/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

$(function () {

    "use strict";

    //Make the dashboard widgets sortable Using jquery UI
    $(".connectedSortable").sortable({
        placeholder: "sort-highlight",
        connectWith: ".connectedSortable",
        handle: ".box-header, .nav-tabs",
        forcePlaceholderSize: true,
        zIndex: 999999
    });
    $(".connectedSortable .box-header, .connectedSortable .nav-tabs-custom").css("cursor", "move");

    //jQuery UI sortable for the todo list
    $(".todo-list").sortable({
        placeholder: "sort-highlight",
        handle: ".handle",
        forcePlaceholderSize: true,
        zIndex: 999999
    });

    //bootstrap WYSIHTML5 - text editor
    $(".textarea").wysihtml5();

    $('.daterange').daterangepicker({
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        startDate: moment().subtract(29, 'days'),
        endDate: moment()
    }, function (start, end) {
        window.alert("You chose: " + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    });

    /* jQueryKnob */
    $(".knob").knob();



    //Sparkline charts
    var myvalues = [1000, 1200, 920, 927, 931, 1027, 819, 930, 1021];
    $('#sparkline-1').sparkline(myvalues, {
        type: 'line',
        lineColor: '#92c1dc',
        fillColor: "#ebf4f9",
        height: '50',
        width: '80'
    });
    myvalues = [515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921];
    $('#sparkline-2').sparkline(myvalues, {
        type: 'line',
        lineColor: '#92c1dc',
        fillColor: "#ebf4f9",
        height: '50',
        width: '80'
    });
    myvalues = [15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21];
    $('#sparkline-3').sparkline(myvalues, {
        type: 'line',
        lineColor: '#92c1dc',
        fillColor: "#ebf4f9",
        height: '50',
        width: '80'
    });

    //The Calender
    $("#calendar").datepicker();



    // /* Morris.js Charts */
    // // Sales chart
    // var area = new Morris.Area({
    //     element: 'revenue-chart',
    //     resize: true,
    //     data: [
    //         {y: '08:00', item1: 2666},
    //         {y: '09:00', item1: 2778},
    //         {y: '10:00', item1: 4912},
    //         {y: '11:00', item1: 3767},
    //         {y: '12:00', item1: 6810},
    //         {y: '13:00', item1: 5670},
    //         {y: '14:00', item1: 4820},
    //         {y: '15:00', item1: 15073},
    //         {y: '16:00', item1: 10687},
    //         {y: '17:00', item1: 8432}
    //     ],
    //     xkey: 'y',
    //     ykeys: ['item1'],
    //     labels: ['Item 1'],
    //     lineColors: ['#a0d0e0'],
    //     hideHover: 'auto'
    // });
    var line = new Morris.Line({
        element: 'line-chart',
        resize: true,
        data: [
            {y: '2012-02-24 08:00', item1: 2666},
            {y: '2012-02-24 09:00', item1: 5778},
            {y: '2012-02-24 10:00', item1: 1078},
            {y: '2012-02-24 11:00', item1: 10778},
            {y: '2012-02-24 12:00', item1: 28778},
            {y: '2012-02-24 13:00', item1: 5878},
            {y: '2012-02-24 14:00', item1: 1578},
            {y: '2012-02-24 15:00', item1: 32778},
            {y: '2012-02-24 16:00', item1: 1580}
            // {y: '2011 Q3', item1: 4912},
            // {y: '2011 Q4', item1: 3767},
            // {y: '2012 Q1', item1: 6810},
            // {y: '2012 Q2', item1: 5670},
            // {y: '2012 Q3', item1: 4820},
            // {y: '2012 Q4', item1: 15073},
            // {y: '2013 Q1', item1: 10687},
            // {y: '2013 Q2', item1: 8432}
        ],
        xkey: 'y',
        ykeys: ['item1'],
        labels: ['Pacientes'],
        lineColors: ['#efefef'],
        lineWidth: 2,
        hideHover: 'auto',
        gridTextColor: "#fff",
        gridStrokeWidth: 0.4,
        pointSize: 4,
        pointStrokeColors: ["#efefef"],
        gridLineColor: "#efefef",
        gridTextFamily: "Open Sans",
        gridTextSize: 10
    });

    //Donut Chart
    var donut = new Morris.Donut({
        element: 'sales-chart',
        resize: true,
        colors: ["#8B0000", "#EE8604", "#F0FF02", "#00CC4B", "#3188FF"],
        data: [
            {label: "EMERGENCIA", value: 108},
            {label: "MUITO URGENTE", value: 202},
            {label: "URGENTE", value: 125},
            {label: "POUCO URGENTE", value: 80},
            {label: "NAO URGENTE", value: 300}
        ],
        hideHover: 'auto'
    });

    //Fix for charts under tabs
    $('.box ul.nav a').on('shown.bs.tab', function () {
        area.redraw();
        donut.redraw();
        line.redraw();
    });

});
