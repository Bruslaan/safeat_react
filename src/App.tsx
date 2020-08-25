import React from 'react';
import { NavBar } from './Nav'
import logo from './assets/logo/logoOrange.png'
import { MainSection } from './MainSection'
import { Carousel } from './Carousel'
import { FilterCarousel } from './FilterCarousel'
import { FoodList } from './FoodList'
import { ShoppingCard } from './ShoppingCard'
import { MyButton } from './Button'
import Drawer from "react-bottom-drawer";


function App() {
  const Logo = <img src={logo} className="logo" alt="" />
  const [isVisible, setIsVisible] = React.useState(false);

  const onClose = React.useCallback(() => {
    setIsVisible(false);
  }, []);

  const openModal = () => setIsVisible(true)



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

        <Drawer
          isVisible={isVisible}
          onClose={onClose}
        >
          <ShoppingCard />

        </Drawer>
        <div className="sticky__button disable_on_desktop sticky__button__opened" style={{ display: !isVisible ? 'block' : 'none' }}>
          <MyButton clickHandler={openModal} />
        </div>

      </div>

    </div>
  );
}

export default App;