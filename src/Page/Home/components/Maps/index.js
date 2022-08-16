import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDgQr0nvAMh0aGxfqQzhI5spvth3YKeLvk',
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};
function Map() {
  return (
    <GoogleMap
      zoom={13}
      center={{ lat: 10.790197, lng: 106.758509 }}
      mapContainerClassName='map_container'
    >
      <Marker position={{ lat: 10.790197, lng: 106.758509 }} />
      Map
    </GoogleMap>
  );
}
export default index;
