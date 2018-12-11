# SabalTest


Please look here for the unit test project https://github.com/mkiruba/SabalTest/releases/tag/0.01

For some reason, the folders are messed up and the test project was created in a folder outside the solution.

![Image of folder structure](https://user-images.githubusercontent.com/8323702/49639234-653a5380-fa02-11e8-9086-9d3edb9a5b2b.png)

If you get the project from the github and drop this SabalTest.Tests folder after extracting at the same level as SabalTest folder.

# UI Project

UI project has been developed with Angular 7 and it is hosted over here.

http://sabalui.azurewebsites.net/

Note: Please dont use https, in the above link. The api been hosted in http it doesnt allow to access https to http.

Source code for UI project is over here.
https://github.com/mkiruba/SabalTest/tree/master/UI/bitstamp-ui

use Visual Studio code and open the equivalent workspace folder path for https://github.com/mkiruba/SabalTest/tree/master/UI and open the terminal inside the VS Code.

`run npm update` to get all the required npm packages.
`ng serve -o` Opens in the browser.

# API Project
Here is the api project developed using Asp.Net Web api. I have used dependency injection and unit tested completely.

## Ticker

http://sabal.azurewebsites.net/api/bitstamp/ticker/btcusd

## Order Book

http://sabal.azurewebsites.net/api/bitstamp/orderbook/btcusd

## Orderbook Estimator

http://sabal.azurewebsites.net/api/bitstamp/orderbookestimator/btcusd/0.11

## Transactions

http://sabal.azurewebsites.net/api/bitstamp/transactions/btcusd

Source code for Api project is over here.
https://github.com/mkiruba/SabalTest

