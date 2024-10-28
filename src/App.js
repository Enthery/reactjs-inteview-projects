import "./App.css";
import Accordion from "./components/accordian";
import Modal from "./components/custom-modal-popup/modal";
import ModalTest from "./components/custom-modal-popup/modal-test";
import TabsComponent from "./components/custom-tabs/tab-test";
import FeatureFlags from "./components/feature-flag";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode/light-dark-mode";
import LoadingMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import ScrollTopAndBottom from "./components/scroll-to-top-and-bottom";
import ScrollToSection from "./components/scroll-to-top-and-bottom/scroll-to-section";
import SearchAutocomplete from "./components/search-autocomplete-with-api";
import StarRating from "./components/star-rating";
import TicTacToe from "./components/tic-tact-toe";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import UseFetchCustomHookTest from "./components/use-fetch/test";
import UseOnclickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";

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
      {/* <GithubProfileFinder /> */}

      {/* Search Autocomplete */}
      {/* <SearchAutocomplete /> */}

      {/* Tic Tac Toe */}
      {/* <TicTacToe /> */}

      {/* Feature Flag Component  */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      {/* useFetch - custom Hook */}
      {/* <UseFetchCustomHookTest /> */}

      {/* Use on click outside test */}
      {/* <UseOnclickOutsideTest /> */}

      {/* Use Window Resize Hook Test */}
      {/* <UseWindowResizeTest /> */}

      {/* Scroll to Top and Bottom */}
      {/* <ScrollTopAndBottom /> */}

      {/* Scroll to a Particular section */}
      <ScrollToSection />
    </div>
  );
}

export default App;
