import React, { useEffect, useState, useContext } from 'react';
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
import { CartContext } from './Context/shoppingCardStore'
import { Food } from './Interfaces/interfaces';
import PaymentPage from './PaymentPage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

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
  const { itemsImCorb } = useContext(CartContext)


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
        docs.forEach((doc) => {

          const newData: Food = {
            title: doc.data()["title"],
            description: doc.data()["description"],
            price: doc.data()["price"],
            name: doc.data()["title"],
            id: doc.id,
            quantity: 1,
            category: doc.data()["category"]
          }
          data.push(newData)
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

      <Router>
        <Switch>
          <Route exact path="/">
            <div className="mainPart">
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
              {itemsImCorb !== 0 && <div className="sticky__button disable_on_desktop sticky__button__opened" style={{ display: !drawerIsVisible ? 'block' : 'none' }}>
                <MyButton itemCount={itemsImCorb} clickHandler={openModal} />
              </div>}

            </div>
          </Route>
          <Route path="/pay">
            <PaymentPage />
          </Route>

        </Switch>
      </Router>




    </div>


  );
}

export default App;