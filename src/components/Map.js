import React, { useEffect } from 'react';

const { kakao } = window;

const Map = () => {

   useEffect(() => {
      const container = document.getElementById("map");
      const options = {
         center: new kakao.maps.LatLng(37.50853067810729, 126.98685749073951),
         level: 6
      };

      const map = new kakao.maps.Map(container, options);
      }, [])

   return (
      <div id="map" style={{width: '976px', height: '767px'}}>
         
      </div>
   );
}

export default Map;