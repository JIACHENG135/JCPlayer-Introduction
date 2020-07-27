import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import FeatureSection from "./FeatureSection";
import PricingSection from "./PricingSection";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';


const mytheme = createMuiTheme({
  palette: {
    primary: {
      light: '#5777ba',
      main: '#5777ba',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#f2f5fa',
      main: '#f2f5fa',
      dark: '#47536e',
      contrastText: '#000',
    },
  },
});
function Home(props) {
  const { selectHome } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome]);
  return (
    <Fragment>
      <ThemeProvider theme={mytheme}>
        <HeadSection />
      
        <FeatureSection />
        <PricingSection />
      </ThemeProvider>
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired
};

export default Home;
