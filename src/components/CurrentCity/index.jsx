import React, { useEffect, useState } from "react";
import http from '../../services/http';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { weatherListSelector } from "../../redux/selectors/home";
import { useSelector } from "react-redux";

import VisibilityIcon from '@mui/icons-material/Visibility';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import WaterIcon from '@mui/icons-material/Water';
import AirIcon from '@mui/icons-material/Air';
import { citySx, dateSx, descSX, mainContainerSx, mainInfoSx, tempSx, weatherInfoSx, wrapperSx } from "./styles";



export default function CurrentCity() {

    const weather = useSelector(weatherListSelector)

    // console.log(weather, useSelector(ab => ab))

    const date = new Date();

    if(!weather) return null

    
    return (
        <Card sx={wrapperSx}>
            <Box sx={mainContainerSx}>
                <Box sx={citySx}>{weather.name}, {weather.sys?.country}</Box>
                <Box sx={dateSx}>{date.getUTCDate()}/{date.getUTCMonth() + 1}/{date.getUTCFullYear()}</Box>

                {weather.weather?.map((item) => (
                    <img src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`} alt=""></img>
                ))}

                <Box sx={tempSx}>{parseInt(weather.main?.temp)} °C</Box>

                {weather?.weather?.map((item) => (
                    <Box sx={descSX}>{item.description}</Box>
                ))}
                
            </Box>

            <Box sx={mainInfoSx}>

                <Box sx={weatherInfoSx}>
                    <Box>
                        <VisibilityIcon/>
                    </Box>
                    <Box>
                        Visibility <span>{weather.visibility / 1000} km</span>
                    </Box>
                </Box>
                <Box sx={weatherInfoSx}>
                    <Box>
                        <DeviceThermostatIcon/>
                    </Box>
                    <Box>
                        Feels like <span>{parseInt(weather.main?.feels_like)}°C</span>
                    </Box>
                </Box>
                <Box sx={weatherInfoSx}>
                    <Box>
                        <WaterIcon/>
                    </Box>
                    <Box>
                        Humidity <span>{weather.main?.humidity} %</span>
                    </Box>
                </Box>
                <Box sx={weatherInfoSx}>
                    <Box>
                        <AirIcon/>
                    </Box>
                    <Box>
                        Wind <span>{weather.wind?.speed} m/s</span>
                    </Box>
                </Box>

            </Box>


        </Card>
    )
}