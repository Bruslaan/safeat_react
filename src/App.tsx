import React from 'react';
import { NavBar } from './Nav'
import logo from './assets/logo/logoOrange.png'
import { MainSection } from './MainSection'
import { Carousel } from './Carousel'
import { FilterCarousel } from './FilterCarousel'
import { FoodList } from './FoodList'
import { ShoppingCard } from './ShoppingCard'
import { MyButton } from './Button'

function App() {
  const Logo = <img src={logo} className="logo" alt="" />

  return (
    <div className="App">
      <NavBar itemLeft={Logo} itemRight="..." />
      {/* <div className="spacer"></div> */}
      <div className="">
        <MainSection
          leftItems={[
            <Carousel key="1" />,
            <FilterCarousel key="2" />,
            <FoodList key="3" />
          ]}
          rightItems={[
            <ShoppingCard key="1" />
          ]}
        />

        <div className="sticky__button disable_on_desktop">
          <MyButton />
        </div>

      </div>

    </div>
  );
}

export default App;