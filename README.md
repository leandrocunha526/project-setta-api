# Project Setta

## About

I want to: Know how efficient my machine is according to the current temperature and observe the trend on a line graph.
To: Make the most profitable decision according to the information presented in the software.

## Summary

The system must provide the user with a page where it is possible to view the current temperature and efficiency of the machine, as well as a line graph with the history of these two pieces of information.

## Information for calculating machine efficiency

It is possible to observe that the machine works better as the ambient temperature is warmer, and from 32° the machine's efficiency is 100%, and below 21° the machine's efficiency registers the worst efficiency index. , 23%. The efficiency behavior between these two temperatures varies linearly, in a directly proportional way.

## Home page requirements

The system must provide a home page;  
The home page must be updated every 30 seconds;  
Whenever the page loads, the system must write the values ​​to an external database:  
-Date and time;  
-Temperature (°C);  
-Machine efficiency (%);  
Whenever the page loads, the system must update the information on the screen:  
-Date and time of last consultation;  
-Temperature of the last consultation (°C);  
-Efficiency of the machine from the last consultation (%);  
Whenever the page loads, the system must update a line graph with information on the machine's temperature and efficiency over time;  

## Requirements

Querying temperature information must use the REST API;  
The registration of information in the external database must use SQL Queries;  
The page needs to present information coherently to the user;  

## Comments

Any service can be used to check temperature (OpenWeather recommended);

## Execution

```bash
docker-compose -f docker-compose.yml up
```

Wait some minutes for run with automation.
