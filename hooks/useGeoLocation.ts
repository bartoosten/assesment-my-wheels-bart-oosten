import { useState, useCallback } from 'react';

const useGeolocation = () => {
    const [location, setLocation] = useState<GeolocationPosition | null>(null);
    const [error, setError] = useState<string | null>(null);

    const getLocation = useCallback(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            setError("Geolocation is not supported by this browser.");
        }
    }, []);
    
    const showPosition = (position: GeolocationPosition) => {
        setLocation(position);
        setError(null); // Reset error on successful location fetch
    };
    
    const showError = (error: GeolocationPositionError) => {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                setError("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                setError("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                setError("The request to get user location timed out.");
                break;
            default:
                setError("An unknown error occurred.");
                break;
        }
    };

    return { location, error, getLocation };
};

export default useGeolocation;