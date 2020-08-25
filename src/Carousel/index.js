import React, { useRef } from 'react';
import './index.css'
import Doener from '../assets/test.jpeg'
import {
  SnapList,
  SnapItem,
  useVisibleElements,
  useScroll,


} from 'react-snaplist-carousel';

const Logo = <img className="item__img" src={Doener}  alt="" />

const MyItem = ({ onClick, children, visible }) => (
  <div
    className="carusel__item"
    onClick={onClick}
  >
   {Logo}
    {children}
 
  </div>
);

export const Carousel = () => {
  const snapList = useRef(null);

  const visible = useVisibleElements(
    { debounce: 10, ref: snapList },
    ([element]) => element,
  );
  const goToSnapItem = useScroll({ ref: snapList });
  return (
    <SnapList direction="horizontal" ref={snapList}>
      <SnapItem margin={{ left: '0', right: '15px' }} snapAlign="center">
        <MyItem onClick={() => goToSnapItem(0)} visible={visible === 0}>
          Item 0
          
        </MyItem>
      </SnapItem>
      <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
        <MyItem onClick={() => goToSnapItem(1)} visible={visible === 1}>
          Item 1
        </MyItem>
      </SnapItem>
      <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
        <MyItem onClick={() => goToSnapItem(2)} visible={visible === 2}>
          Item 2
        </MyItem>
      </SnapItem>
      <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
        <MyItem onClick={() => goToSnapItem(3)} visible={visible === 3}>
          Item 3
        </MyItem>
      </SnapItem>
      <SnapItem margin={{ left: '15px', right: '10vw' }} snapAlign="center">
        <MyItem onClick={() => goToSnapItem(4)} visible={visible === 4}>
          Item 4
        </MyItem>
      </SnapItem>
    </SnapList>
  );
};