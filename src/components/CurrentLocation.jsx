import { useCurrentLocation } from "../custom_hooks/useCurrentLocation";
import disappointed from "../assets/disappointed_ghostface.jpg";
import wazzup from "../assets/wazzup.png"

export function CurrentLocation() {
  const { location, error, loading, toLocate } = useCurrentLocation();

  return (
    <div className="location">
      <button onClick={toLocate}><p>I'll find you</p></button>
      {loading && <h3>Locating...</h3>}
      {error && (
        <div>
          <h3>{error.message}</h3>
          <img src={disappointed} alt="disappointed ghostface" />
        </div>
      )}
      {location && !error && (
        <div>
          <h3>Your location is latitude {location.latitude} longitude {location.longitude}</h3>
          <img src={wazzup} alt="wazzup" />
        </div>
      )}
    </div>
  );
}
