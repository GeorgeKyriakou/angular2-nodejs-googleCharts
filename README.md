# angular2-nodejs-googleCharts
Web service for logging Motion Detection events from an AXIS Communications camera.

This is part of an assignment on Web Services, in which we are required to log motion detection events that are generated from an AXIS 
Communications camera. It is also one of my first attempts on Angular 2 and NodeJS applications, following the Traversy Media tutorials 
(https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA - credit where credit is due!!)

The end result is shown in the picture bellow (figure 1.)

![alt tag](https://writelatex.s3.amazonaws.com/rnntgzsmskcn/uploads/157/11496079/1.png)
figure 1.

Functionality:
When the page is loaded all of the logs are displayed on the google chart, and then we can select a specific timframe to view on the chart with the show logs button. A request is sent to the server whith the specific hours that are selected and responds with all the logs within said timeframe. If the button is pressed an empty request is sent to the server which responds with all of the logs.

