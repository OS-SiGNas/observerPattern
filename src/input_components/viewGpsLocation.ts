import { getGPSData, type GPSData } from "../utils/getGpsData.js"
import type { Observable } from "../observable.js";

export const viewGpsLocation = (o: Observable<null | GPSData>) => {
  const interval = setInterval(async () => {
    try {
      const data = await getGPSData()
      console.log(data)
      console.log(`Latitude: ${data.latitude}`)
      console.log(`Longitude: ${data.longitude}`)
      console.log(`Timestamp: ${data.timestamp}`)
      o.state = data
    } catch (error) {
      console.error('Error obteniendo GPS:', error);
      clearInterval(interval)
    }
  }, 5000)
}
