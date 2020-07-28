import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import FeatureSection from "./FeatureSection";
import PricingSection from "./PricingSection";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';


export const mytheme = createMuiTheme({
  palette: {
    primary: {
      light: '#ff867c',
      main: '#ef5350',
      dark: '#b61827',
      contrastText: '#fff',
    },
    secondary: {
      light: '#73e8ff',
      main: '#29b6f6',
      dark: '#0086c3',
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
        {/* <PricingSection /> */}
      </ThemeProvider>
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired
};

export default Home;
