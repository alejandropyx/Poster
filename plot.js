

function loadPlot() {

    if(nightMode){
        dataSeries.color="#ff5555" 

        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            zoomEnabled: true,
            backgroundColor: "rgba(255,12,32,0)",
            axisX:{
                title: "t",
                gridThickness: 0,
                fontColor: "#FAFAFA",
                titleFontColor: "#FAFAFA",
                labelFontColor: "#FAFAFA"
            },
            axisY: {
                title: "v(t)",
                gridThickness: 0,
                fontColor: "#FAFAFA",
                titleFontColor: "#FAFAFA",
                labelFontColor: "#FAFAFA"
            },
            title:{
                text: "Cell voltage on time" ,
                fontColor: "#FAFAFA",
                fontFamily: "Roboto", 
                fontWeight:"normal"
            },
            data: data  // random generator below
        });
        chart.render();

    }else{

        dataSeries.color="red" 

        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            zoomEnabled: true,
            backgroundColor: "rgba(255,12,32,0)",
            axisX:{
                title: "t",
                gridThickness: 0,
                fontColor: "#121212",
                titleFontColor: "#121212",
                labelFontColor: "#121212"
            },
            axisY: {
                title: "v(t)",
                gridThickness: 0,
                fontColor: "#121212",
                titleFontColor: "#121212",
                labelFontColor: "#121212"
            },
            title:{
                text: "Cell voltage on time" ,
                fontColor: "#121212",
                fontFamily: "Roboto", 
                fontWeight:"normal"
            },
            data: data  // random generator below
        });
        chart.render();

    }

    console.log(nightMode)
    
    }

    
    var limit = 1000;
    
    var y = 0;
    var data = [];
    var dataSeries = { type: "line",color:"red" };
    
        
    var dataPoints = [];
    for (var i = 0; i < limit; i += 1) {
        y = (Math.sin(i/100) );
        dataPoints.push({
            x: i /10,
            y: y                
        });
    }
    dataSeries.dataPoints = dataPoints;
    data.push(dataSeries);   

    window.onload = loadPlot()