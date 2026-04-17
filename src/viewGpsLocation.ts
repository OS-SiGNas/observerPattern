import type { Observable } from "./observable.js";

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
export function getGPSData(options?: GeolocationOptions): Promise<GPSData> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocalización no soportada por este navegador.'));
      return;
    }

    const success: PositionCallback = ({ coords, timestamp }: GeolocationPosition) => resolve({
      latitude: coords.latitude,
      longitude: coords.longitude,
      accuracy: coords.accuracy,
      altitude: coords.altitude ?? null,
      altitudeAccuracy: coords.altitudeAccuracy ?? null,
      heading: coords.heading ?? null,
      speed: coords.speed ?? null,
      timestamp,
    });


    const errorHandler: PositionErrorCallback = (error: GeolocationPositionError) => {
      let message: string | undefined;
      if (error.code !== undefined) {
        if (error.PERMISSION_DENIED) message = 'El usuario denegó el permiso de geolocalización.';
        if (error.POSITION_UNAVAILABLE) message = 'La información de ubicación no está disponible.';
        if (error.TIMEOUT) message = 'Se agotó el tiempo de espera para obtener la ubicación.';
      }
      reject(new Error(message ?? 'Error desconocido al obtener la geolocalización.'));
    }

    navigator.geolocation.getCurrentPosition(success, errorHandler, {
      enableHighAccuracy: false,
      timeout: 10000,
      maximumAge: 0,
      ...options
    });
  });
}


export const viewGpsLocation = (o: Observable<null | GPSData>) => {
  const interval = setInterval(async () => {
    try {
      const data = await getGPSData()
      console.clear()
      console.log(`Latitude: ${data.latitude}`)
      console.log(`Longitude: ${data.longitude}`)
      console.log(`Timestamp: ${data.timestamp}`)
      o.state = data
    } catch (error) {
      if (!(error instanceof Error)) {
        console.log(error)
        return
      }
      console.error('Error obteniendo GPS:', error.message);
      // Aquí puedes mostrar un mensaje al usuario o reintentar
      clearInterval(interval)
    }
  }, 5000)
}
