import { useContext } from "react";
import Accordion from "../accordian";
import LightDarkMode from "../light-dark-mode/light-dark-mode";
import RandomColor from "../random-color";
import TicTacToe from "../tic-tact-toe";
import TreeView from "../tree-view";
import { FeatureFlagsContext } from "./context";
import menus from "../tree-view/data";
import TabsComponent from "../custom-tabs/tab-test";

export default function FeatureFlags() {
  const { loading, enableFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToe",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColor",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordion />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus} />,
    },
    {
      key: "showTabs",
      component: <TabsComponent />,
    },
  ];

  function checkEnableFlags(getCurrenKey) {
    return enableFlags[getCurrenKey];
  }

  if (loading) return <h1>Loading data! Please wait</h1>;

  return (
    <div>
      <h1>Feature Flags.</h1>
      {componentsToRender.map((componentItem) =>
        checkEnableFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
