import React, { Children, useState } from 'react';
import { TabsControls } from './styles';
import Tab from './Tab';

interface Props {
  children: React.ReactElement[];
  onChangeTab?: (index: number) => void;
  tabControlsTag?: string;
}

const Tabs: React.FC<Props> = ({ children, onChangeTab, tabControlsTag }) => {
  const [activeIndex, setActive] = useState(0);
  const activeTab: any = Children.toArray(children)[activeIndex];

  return (
    <div className="tabs">
      <TabsControls className="tabs__controls">
        {Children.map(
          children,
          (tab: React.ReactElement, index: number) =>
            tab &&
            React.cloneElement(tab, {
              ...(tabControlsTag && { tag: tabControlsTag }),
              active: index === activeIndex, //FIXME: broke on hidden element
              onClick: () => {
                setActive(index);
                onChangeTab && onChangeTab(index);
              }
            })
        )}
      </TabsControls>
      <div className="tabs__content">{activeTab.props.children}</div>
    </div>
  );
};

export { Tab };
export default Tabs;
