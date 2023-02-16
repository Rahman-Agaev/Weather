import React from "react";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { weatherDailyListSelector } from "../../redux/selectors/home";
import { useSelector } from "react-redux";
import moment from "moment";
import { dataSx, tempSx, weeklyBlockSx, wrapperSx } from "./styles";

export default function WeatherWeekly() {

    const weather = useSelector(weatherDailyListSelector)

    const weatherToday = weather.list?.filter((item) => moment(moment.unix(item.dt).format('YYYY-MM-DD')).isSame(moment().format('YYYY-MM-DD')))

    const weatherWeekly = [];
    
    weather.list?.forEach((day) => {
        if(!weatherWeekly.includes(moment(day.dt_txt).format('YYYY-MM-DD'))) {
            weatherWeekly.push(moment(day.dt_txt).format('YYYY-MM-DD'))
        }
    })

    return (
        <Box sx={wrapperSx}>
           {weatherWeekly
            .map(date => weather.list.find(item => moment(item.dt_txt).format('YYYY-MM-DD') === date))
            ?.map(item =>(
                <Box sx={weeklyBlockSx}>
                    <Box sx={dataSx}>
                        {moment(item.dt_txt).format('dddd MMMM Do')}
                    </Box>
                    <Box>
                    <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt=""></img>
                    </Box>
                    <Box sx={tempSx}>
                        {parseInt(item.main.temp_max)} °C  /  {parseInt(item.main.temp_min)} °C
                    </Box>
                </Box>
            ))}
        </Box>
    )
}