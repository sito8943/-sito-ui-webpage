// Utilities for the Sito Greet UI and related pages

// Map Open-Meteo weather codes to a friendly description and emoji
export function describeWeather(code) {
  const map = {
    0: { text: 'Clear sky', icon: '☀️' },
    1: { text: 'Mainly clear', icon: '🌤' },
    2: { text: 'Partly cloudy', icon: '⛅️' },
    3: { text: 'Overcast', icon: '☁️' },
    45: { text: 'Fog', icon: '🌫️' },
    48: { text: 'Depositing rime fog', icon: '🌫️' },
    51: { text: 'Light drizzle', icon: '🌦' },
    53: { text: 'Drizzle', icon: '🌦' },
    55: { text: 'Dense drizzle', icon: '🌧' },
    56: { text: 'Freezing drizzle', icon: '🌧' },
    57: { text: 'Dense freezing drizzle', icon: '🌧' },
    61: { text: 'Light rain', icon: '🌧' },
    63: { text: 'Rain', icon: '🌧' },
    65: { text: 'Heavy rain', icon: '🌧' },
    66: { text: 'Freezing rain', icon: '🌧' },
    67: { text: 'Heavy freezing rain', icon: '🌧' },
    71: { text: 'Light snow', icon: '❄️' },
    73: { text: 'Snow', icon: '❄️' },
    75: { text: 'Heavy snow', icon: '❄️' },
    77: { text: 'Snow grains', icon: '❄️' },
    80: { text: 'Light showers', icon: '🌦' },
    81: { text: 'Showers', icon: '🌦' },
    82: { text: 'Heavy showers', icon: '🌧' },
    85: { text: 'Light snow showers', icon: '🌨' },
    86: { text: 'Snow showers', icon: '🌨' },
    95: { text: 'Thunderstorm', icon: '⛈️' },
    96: { text: 'Thunderstorm w/ hail', icon: '⛈️' },
    99: { text: 'Thunderstorm w/ hail', icon: '⛈️' },
  };
  return map[code] || { text: '—', icon: '🌥' };
}

// Fetch current temperature and weather code from Open-Meteo.
// Returns a small object: { tempC, code }
export async function loadWeather({ lat, lon }) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&timezone=auto`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Weather fetch failed');
  const data = await res.json();
  const tempC = Math.round(data?.current?.temperature_2m ?? 6);
  const code = Number(data?.current?.weather_code ?? 61);
  return { tempC, code };
}

