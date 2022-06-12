import React from 'react';
import style from './style';

export const Tab = ({ onTabClick, index, title, activeIndex }) => {

  const onActiveTab = () => {
    onTabClick(index)
  }
  return (
    <style.Tab key={title} active={activeIndex === index}>
      <div onClick={() => onActiveTab(index)}>
        {title}
      </div>
    </style.Tab>
  )
}