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
  const [drawerIsVisible, setdrawerIsVisible] = useState(false);
  const [foodList, setfoodList] = useState([])
  const [foodListFilter, setFilterFoodlist] = useState([])
  const [categories, setCategories] = useState([])
  const [activeCategorie, setactiveCategorie] = useState(-1)

  const onClose = React.useCallback(() => {
    setdrawerIsVisible(false);
  }, []);

  const openModal = () => setdrawerIsVisible(true)

  // filter rezept data if categories change
  useEffect(() => {
    if (activeCategorie === -1) {
      setFilterFoodlist(foodList)
    } else {
      const filteredList = foodList.filter(food => food["category"] === categories[activeCategorie]["name"])
      setFilterFoodlist(filteredList)
    }

  }, [activeCategorie, foodList, categories])


  // fetch rezept data
  useEffect(() => {
    const fetchFoodList = async () => {
      try {
        const docs = await db.collection("rezepts").where("restaurant", "==", "Kali").get()
        let data: any = []
        docs.forEach(doc => {
          data.push(doc.data())
        })
        setfoodList(data)
      } catch (error) {
        console.log(error, "Error")
      }
    }
    fetchFoodList()
  }, [])

  // get categories
  useEffect(() => {
    const fetchCategorieList = async () => {
      try {
        const docs = await db.collection("category").where("restaurant", "==", "Kali").get()
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
            <FilterCarousel onActiveChange={setactiveCategorie} filterList={categories} key="2" />,
            <FoodList foodList={foodListFilter} key="3" />
          ]}
          rightItems={[
            <ShoppingCard key="1" />
          ]}
        />

        <Drawer
          isVisible={drawerIsVisible}
          onClose={onClose}
        >
          <ShoppingCard />

        </Drawer>
        <div className="sticky__button disable_on_desktop sticky__button__opened" style={{ display: !drawerIsVisible ? 'block' : 'none' }}>
          <MyButton clickHandler={openModal} />
        </div>

      </div>

    </div>
  );
}

export default App;