import "./App.css";
import Accordion from "./components/accordian";
import Modal from "./components/custom-modal-popup/modal";
import ModalTest from "./components/custom-modal-popup/modal-test";
import TabsComponent from "./components/custom-tabs/tab-test";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode/light-dark-mode";
import LoadingMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

function App() {
  return (
    <div className="App">
      {/* Accordion component */}
      {/* <Accordion /> */}

      {/* Random color component */}
      {/* <RandomColor/> */}

      {/* Star rating component */}
      {/* <StarRating noOfStars={10}/> */}

      {/* Image slider component */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* Load more products component */}
      {/* <LoadingMoreData /> */}

      {/* Tree view component/menu UI component / recursive navigation menu */}
      {/* <TreeView menus={menus} /> */}

      {/* QR Code Generator component */}
      {/* <QRCodeGenerator /> */}

      {/* Light and Dark them switch */}
      {/* <LightDarkMode /> */}

      {/* Scroll indicator component  */}
      {/* <ScrollIndicator url={`https://dummyjson.com/products?limit=100`} /> */}

      {/* Custom tabs component */}
      {/* <TabsComponent /> */}

      {/* Custom open modal component  */}
      {/* <ModalTest /> */}

      {/* Github Profile Finder */}
      <GithubProfileFinder />
    </div>
  );
}

export default App;
