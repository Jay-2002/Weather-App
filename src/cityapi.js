// We use the GeoDB Cities APi for this
export const geoDbUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
export const geoDbOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '584f503e20mshb138260cf9fe369p1725d7jsnc46deba027d3',
		'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const WEATHER_API_URL = 'http://api.openweathermap.org/data/2.5';

export const WEATHER_API_KEY = '4be31a356a5b617cdc15bf59e60bc9d2';