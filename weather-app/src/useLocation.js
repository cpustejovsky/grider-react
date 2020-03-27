import { useState, useEffect } from "react";

const useLocation = () => {
  const [latitude, setLatitude] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const getLatitude = () => {
    const success = pos => {
      console.log(pos);
      setLatitude(pos.coords.latitude);
    };
    const error = err => setErrorMsg(err.message);
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    window.navigator.geolocation.getCurrentPosition(success, error, options);
  };
  useEffect(() => {
    getLatitude();
  }, [latitude, errorMsg]);
  return {latitude, errorMsg};
};

export default useLocation;
