"use client";
import React, {
  useState,
  createContext,
  useContext,
  createElement,
} from "react";

const TabsContext = createContext();

export default function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(0);

  const changeTab = (index) => {
    setActiveTab(index);
  };
  return (
    <TabsContext.Provider value={{ activeTab, changeTab }}>
      {typeof children === "function" ? children({ activeTab }) : children}
    </TabsContext.Provider>
  );
}

function Tab({ as = "button", index, children, ...props }) {
  const { activeTab, changeTab } = useContext(TabsContext);

  return createElement(
    as,
    {
      onClick: () => changeTab(index),
      className: activeTab === index ? "active" : "",
      ...props,
    },
    children,
  );
}

function TabPanel({ as = "div", index, children, className, ...props }) {
  const { activeTab } = useContext(TabsContext);

  return activeTab === index
    ? createElement(
        as,
        {
          ...props,
          className,
        },
        children,
      )
    : null;
}

Tabs.Tab = Tab;
Tabs.TabPanel = TabPanel;
