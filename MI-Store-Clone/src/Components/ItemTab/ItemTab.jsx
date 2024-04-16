import React from 'react';
import data from '../../data/data.json';
import HotAccesories from "../HotAccesories/HotAccesories";

const TabComponents = () => {
  return (
    <div>
      {/* Assuming data.json contains hotAccessories and hotAccessoriesCover */}
      <HotAccesories
        music={data.hotAccessories.music}
        musicCover={data.hotAccessoriesCover.music}
        smartDevice={data.hotAccessories.smartDevice}
        smartDeviceCover={data.hotAccessoriesCover.smartDevice}
      />
    </div>
  );
}

export default TabComponents;
