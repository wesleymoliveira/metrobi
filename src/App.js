import GlobalStyles from "./styles/global";
import { CustomThemeProvider } from "./styles/CustomThemeProvider";
import { Question3 } from "./questions/Question3/Question3";


function App() {
  return (
    <>
      <CustomThemeProvider>
        <GlobalStyles />
        <Question3 />
      </CustomThemeProvider>
    </>
  );
}

export default App;
