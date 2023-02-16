import React from "react";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { weatherDailyListSelector } from "../../redux/selectors/home";
import { useSelector } from "react-redux";
import moment from "moment";
import { tempSx, timeSx, weatherTodaySx, wrapperSx } from "./styles";

export default function WeatherToday() {

    const weather = useSelector(weatherDailyListSelector)

    const weatherToday = weather.list?.filter((item) => moment(moment.unix(item.dt).format('YYYY-MM-DD')).isSame(moment().format('YYYY-MM-DD')))

    // const F = weather.list?.filter((item) => moment(moment.unix(item.dt).format('YYYY-MM-DD')).isSame(moment().format('YYYY-MM-DD')))


    return (
        <Card sx={wrapperSx}>
            {weatherToday?.map(item =>(
                <Box sx={weatherTodaySx}> 
                    <Box sx={timeSx}>
                        {moment(item.dt_txt).format('HH:mm')}
                    </Box>
                    <Box>
                        <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt=""></img>
                    </Box>
                    <Box sx={tempSx}>
                        {parseInt(item.main.temp)} °C
                    </Box>
                </Box>
            ))}
     
        </Card>
    )
}