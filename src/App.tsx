import React, { useEffect, useState } from 'react';
import { NavBar } from './Nav'
import logo from './assets/logo/logoOrange.png'
import { MainSection } from './MainSection'
import { Carousel } from './Carousel'
import { FilterCarousel } from './FilterCarousel'
import { FoodList } from './FoodList'
import { ShoppingCard } from './ShoppingCard'
import { MyButton } from './Button'
import Drawer from "react-bottom-drawer";
import { db } from './firebase'


function App() {
  const Logo = <img src={logo} className="logo" alt="" />
  const [isVisible, setIsVisible] = useState(false);
  const [foodList, setfoodList] = useState([])
  const [categories, setCategories] = useState([])

  const onClose = React.useCallback(() => {
    setIsVisible(false);
  }, []);

  const openModal = () => setIsVisible(true)



// fetch data if filter changes
  useEffect(() => {

    const fetchFoodList = async () => {

      try {
        const docs = await db.collection("rezepts").where("restaurant","==","Kali").get()
        let data: any = []
        docs.forEach(doc => {

          data.push(doc.data())
          console.log("Food fetched")

        })
        setfoodList(data)

      } catch (error) {
        console.log(error, "Error")
      }
    }

    fetchFoodList()

    // return () => {
    //   cleanup
    // }
  }, [])

// get categories
  useEffect(() => {

    const fetchCategorieList = async () => {

      try {
        const docs = await db.collection("category").where("restaurant","==","Kali").get()
        let data: any = []
        docs.forEach(doc => {

          data.push(doc.data())

        })
        setCategories(data)

      } catch (error) {
        console.log(error, "Error")
      }
    }

    fetchCategorieList()


  }, [])


  return (
    <div className="App">
      <NavBar itemLeft={Logo} itemRight="..." />
      {/* <div className="spacer"></div> */}
      <div className="">
        <MainSection
          leftItems={[
            <Carousel key="1" />,
            <FilterCarousel filterList={categories} key="2" />,
            <FoodList foodList={foodList} key="3" />
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