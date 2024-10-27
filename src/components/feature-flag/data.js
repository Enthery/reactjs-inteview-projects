const dummyApiResponse = {
  showLightDarkMode: true,
  showTicTacToe: true,
  showRandomColor: true,
  showAccordian: true,
  showTreeView: true,
  showTabs: true,
};

function featureFlagsDataServiseCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    else reject("Some error occured! Please try again");
  });
}

export default featureFlagsDataServiseCall;
