import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

import Header from "../../components/Header";
import CurrentCity from "../../components/CurrentCity";
import WeatherToday from "../../components/WeatherToday";
import WeatherWeekly from "../../components/WeatherWeekly";
import { debounce } from "@mui/material";
import { getWeather, getWeatherDaily } from "../../redux/home";


import { citySx, todaySx, wrapperSx } from "./styles";
import { weatherTodaySx } from "../../components/WeatherToday/styles";



export default function Home() {
    const [search, setSearch] = useState('London');

    const dispatch = useDispatch();

    const getData = (city) => {
        dispatch(getWeather({ city }))
        dispatch(getWeatherDaily({ city }))

    }



    const handleDebounce = useCallback(debounce(getData, 500), []);

    const handleDebounceToday = useCallback(debounce(getWeatherDaily, 500), []);




    const onChange = (e) => {
        setSearch(e.target.value)
        handleDebounce(e.target.value)
        handleDebounceToday(e.target.value)
    }

    useEffect(() => {
        dispatch(getWeather({ city: search }))

        dispatch(getWeatherDaily({ city: search }))

    }, [])


    return (
        <Box sx={wrapperSx}>
            <Header 
            onChange={onChange}
            />
            <Box sx={citySx}>
                <CurrentCity/>
            </Box>
            <Box sx={todaySx}>
                <WeatherToday/>
            </Box>
            <Box>
                <WeatherWeekly/>
            </Box>
        </Box>
    )
}