import axios from "axios";

const API_KEY = 'c4def50daecaa73af6b1494a54c35182'
const city = '3454783'  //Patos de Minas

export async function getTemperature(): Promise <number> {
    const response = await axios.
        get(`https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${API_KEY}&lang=pt_br&units=metric`)
    return response.data.main.temp;
}
