"use strict";

bars.addEventListener('click',() => {
    document.querySelector('.sideBar').classList.toggle('ml--100')
})


//sideBar
console.log(document.querySelector('.sideBar').clientWidth)
homePageButton.addEventListener('click',(e) => {
    notificationsButton.classList.remove('active');
    settingsButton.classList.remove('active');
    e.target.classList.add('active');

    document.querySelector('.homePage').style.display = 'block';
    document.querySelector('.notifications').style.display = 'none';
    document.querySelector('.settings').style.display = 'none';

    document.querySelector('.sideBar').classList.toggle('ml--100')
});

notificationsButton.addEventListener('click',(e) => {
    homePageButton.classList.remove('active');
    settingsButton.classList.remove('active');
    e.target.classList.add('active');

    document.querySelector('.homePage').style.display = 'none';
    document.querySelector('.settings').style.display = 'none';
    document.querySelector('.notifications').style.display = 'block';

    document.querySelector('.sideBar').classList.toggle('ml--100')
});

settingsButton.addEventListener('click',(e) => {
    homePageButton.classList.remove('active');
    notificationsButton.classList.remove('active');
    e.target.classList.add('active');

    document.querySelector('.homePage').style.display = 'none';
    document.querySelector('.notifications').style.display = 'none';
    document.querySelector('.settings').style.display = 'block';

    document.querySelector('.sideBar').classList.toggle('ml--100')
});



//PH chart
var phChartOptions = {
    chart: {
      type: 'bar'
    },
    series: [{
      name: 'PH Scale',
      data: [30,40,45,50,49,60,80]
    }],
    xaxis: {
      categories: ['Mon','Tues','Wed','Thurs','Fri','Sat','Sun']
    }
  }
  
  var chartForPh = new ApexCharts(document.querySelector("#chartForPh"), phChartOptions);
  chartForPh.render();



  
  var thempreatureChartOptions = {
    chart: {
        type: 'bar'
      },
      series: [{
        name: 'Thempreaute',
        data: [30,40,45,50,49,60,80]
      }],
      xaxis: {
        categories: ['Mon','Tues','Wed','Thurs','Fri','Sat','Sun']
      }
    }
    
  var chartForThempreature = new ApexCharts(document.querySelector("#chartForThempreature"), thempreatureChartOptions);
  chartForThempreature.render();



  var options = {
    chart: {
        type: 'bar'
      },
      series: [{
        name: 'Wetness',
        data: [30,40,45,50,49,60,80]
      }],
      xaxis: {
        categories: ['Mon','Tues','Wed','Thurs','Fri','Sat','Sun']
      }
    }

  var chartForWetness = new ApexCharts(document.querySelector("#chartForWetness"), options);
  chartForWetness.render();