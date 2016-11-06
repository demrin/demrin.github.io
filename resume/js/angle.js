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
                {text: 'js', max: 5},
                {text: 'nodejs', max: 5},
                {text: 'jquery', max: 5}
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
                    value: [4,4,3.5,3.1,3.2]
                }
            ]
        }
    ]
};
myChart.setOption(option);

