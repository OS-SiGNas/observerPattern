interface GeolocationOptions {
  enableHighAccuracy?: boolean; // Mayor precisión (puede consumir más batería)
  timeout?: number;             // Tiempo máximo de espera en ms
  maximumAge?: number;          // Edad máxima aceptable de una posición en caché
}

export interface GPSData {
  latitude: number;
  longitude: number;
  accuracy: number;             // Precisión en metros
  altitude: number | null;
  altitudeAccuracy: number | null;
  heading: number | null;       // Dirección en grados (0 = norte)
  speed: number | null;         // Velocidad en m/s
  timestamp: number;            // Momento de la captura (epoch)
}

/**
 * Obtiene la posición GPS actual del dispositivo utilizando la API de geolocalización.
 * @param options Opciones de configuración (opcional).
 * @returns Promesa que se resuelve con los datos GPS o se rechaza con un error descriptivo. */
export const getGPSData = (options?: GeolocationOptions): Promise<GPSData> => new Promise((resolve, reject) => {
  const _gps = navigator.geolocation
  const _getError = (m: string): void => reject(new (class GeoLocationError extends Error { })(m))
  if (_gps === undefined) return _getError('Geolocalización no soportada por este navegador.');
  const _success: PositionCallback = ({ coords, timestamp }) => {
    const data: GPSData = {
      latitude: coords.latitude,
      longitude: coords.longitude,
      accuracy: coords.accuracy,
      altitude: coords.altitude ?? null,
      altitudeAccuracy: coords.altitudeAccuracy ?? null,
      heading: coords.heading ?? null,
      speed: coords.speed ?? null,
      timestamp,
    }
    resolve(data)
  };
  const _errorHandler: PositionErrorCallback = (err) => {
    if (err.PERMISSION_DENIED) return _getError('El usuario denegó el permiso de geolocalización.');
    if (err.POSITION_UNAVAILABLE) return _getError('La información de ubicación no está disponible.');
    if (err.TIMEOUT) return _getError('Se agotó el tiempo de espera para obtener la ubicación.');
    if (err.code === undefined) return _getError('Error desconocido al obtener la geolocalización.')
  }

  _gps.watchPosition(_success, _errorHandler, {
    enableHighAccuracy: false, timeout: 10000, maximumAge: 0, ...options
  });
});
