import React, { useState } from "react";
import { Tab } from "../Tab/Tab";
import style from './style';

export const Tabs = ({ tabs }) => {

  const [active, setActive] = useState(0);

  const renderTabs = () => {
    return tabs.map(tab => {
      const { index, title } = tab;
      return (
        <Tab
          index={index}
          title={title}
          onTabClick={onActiveTab}
          activeIndex={active}
        />
      )
    })
  }

  const onActiveTab = activeTabIndex => {
    console.log(activeTabIndex);
    setActive(activeTabIndex);
  }

  return (
    <style.Tabs>
      {renderTabs()}
    </style.Tabs>
  );
}