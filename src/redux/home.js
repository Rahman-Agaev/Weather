import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import http from '../services/http';  

const initialState = {
    weather: {},
    weatherDaily: {},
    isLoading: false,
}

export const getWeatherDaily = createAsyncThunk( 
  'home/WeatherDaily', 
  async ({ city }) => { 
    const data = await http.get('/forecast', { params: { q: city }}); 
    // console.log(data);
    return data; 
  }, 
);

export const getWeather = createAsyncThunk( 
    'home/Weather', 
    async ({ city }) => { 
      const data = await http.get('/weather', { params: { q: city }}); 
  
      // console.log(data);
      return data; 
    }, 
  );



export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {

    },
    extraReducers: { 
        [getWeather.pending]: (state) => { 
          state.loading = true;
        }, 
        [getWeather.fulfilled]: (state, { payload }) => { 
          state.loading = false;
          state.weather = payload.data;
        },

        [getWeatherDaily.pending]: (state) => { 
          state.loading = true;
        }, 
        [getWeatherDaily.fulfilled]: (state, { payload }) => { 
          state.loading = false;
          state.weatherDaily = payload.data;
        },

    }
})

// export const { clearHomeReducer } = homeSlice.actions; 
export default homeSlice.reducer;