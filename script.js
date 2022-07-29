const maxApi = require("max-api");

maxApi.outlet("start");

maxApi. addHandler("test", () => {
maxApi.outlet("yes nice test good job")
maxApi.post("yes nice test good job")
}
);

maxApi. addHandler("add", (a, b) => {
    maxApi.outlet(a+b+23)
    maxApi.post(a+b+23)
    }
    );

const weather = require('openweather-apis');

weather.setLang('en');
var coords = [45.413535, 106.661390];
weather.setCoordinate(coords[0], coords[1]);


 weather.setUnits('metric');

 weather.setAPPID("0c245619043fb0eb90381b21bff53d10");


maxApi.addHandler("getWeather", () => {
    weather.setCoordinate(coords[0], coords[1]);
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
}
);


maxApi.addHandler("setCoords", (lat, lon) => {
    coords[0] = lat;
    coords[1] = lon;
}
);
