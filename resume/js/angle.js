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
                    value: [4,4,3.5,3.3,3.7,3.2,3,3]
                }
            ]
        }
    ]
};
myChart.setOption(option);

