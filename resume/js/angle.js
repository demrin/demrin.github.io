// $(function () {
//     $('#container').highcharts({
//         chart: {
//             polar: true,
//             type: 'line'
//         },
//         // title: {
//         //     text: 'Budget vs spending',
//         //     x: -80
//         // },
//         pane: {
//             size: '80%'
//         },
//         xAxis: {
//             categories: ['HTML', 'CSS', 'nodejs', 'angularjs',
//                          'express', 'Administration'],
//             tickmarkPlacement: 'on',
//             lineWidth: 0
//         },
//         yAxis: {
//             gridLineInterpolation: 'polygon',
//             lineWidth: 0,
//             min: 0
//         },
//         tooltip: {
//             shared: true,
//             pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
//         },
//         legend: {
//             align: 'right',
//             verticalAlign: 'top',
//             y: 70,
//             layout: 'vertical'
//         },
//         series: [{
//             name: 'HTML CSS',
//             data: [43000, 19000, 60000, 35000, 17000, 10000],
//             pointPlacement: 'on'
//         }]
//     });
// });

var myChart = echarts.init(document.getElementById('main'));

var option = {
    tooltip: {
        trigger: 'axis'
    },
    radar: [
        {
            indicator: [
                {text: 'HTML', max: 5},
                {text: 'CSS', max: 5},
                {text: 'nodejs', max: 5},
                {text: 'angularjs', max: 5},
                {text: 'bootstrap等', max: 5},
                {text: 'MongoDB', max: 5},
                {text: 'jquery', max: 5},
                {text: '其他', max: 5}
            ],
            center: ['25%','50%'],
            radius: 80
        }
    ],
    series: [
        {
            type: 'radar',
             tooltip: {
                trigger: 'item'
            },
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [
                {
                    value: [4,4,3.5,3.6,3.7,3.2,3,3]
                }
            ]
        }
    ]
};
myChart.setOption(option);

