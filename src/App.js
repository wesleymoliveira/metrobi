import GlobalStyles from "./styles/global";
import { CustomThemeProvider } from "./styles/CustomThemeProvider";
import { Question3 } from "./questions/Question3/Question3";


function App() {
  return (
    <div>
      <CustomThemeProvider>
        <head>
          <title>Wesley - Metrobi</title>
          <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
          <meta name="description" content="Challenge" />
        </head>
        <GlobalStyles />
        <Question3 />
      </CustomThemeProvider>
    </div>
  );
}

export default App;
