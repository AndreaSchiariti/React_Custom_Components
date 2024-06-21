import { useEffect, useState } from "react";

export function useCurrentLocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function success(position) {
    setLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  }

  useEffect(() => {
    setLoading(false)
  }, [location, error])

  function failed() {
    setError(new Error("Couldn't retrieve your location"))
    console.log("error")
  }

  async function handleCurrentLocation() {
    setLoading(true)

    if (!navigator.geolocation) {
      setError(new Error("Localization is not supported"))
      console.log("unable")
    } else {
      try {
        navigator.geolocation.getCurrentPosition(success, failed)
      } catch (error) {
        setError(error)
        setLocation(null)
      }
    }
  }

  return {
    location: location,
    error: error,
    loading: loading,
    toLocate: handleCurrentLocation,
  }
}
