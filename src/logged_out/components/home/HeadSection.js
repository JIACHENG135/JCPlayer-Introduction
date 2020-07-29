import React, { Fragment,useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  Card,
  Button,
  // Hidden,
  Box,
  withStyles,
  withWidth,
  isWidthUp,
  IconButton,
} from "@material-ui/core";
import { Carousel } from "element-react";
import Popover from '@material-ui/core/Popover';
// import headerImage from "../../dummy_data/images/headerImage.jpg";
import WaveBorder from "../../../shared/components/WaveBorder";
import 'element-theme-default';
import './carousel.css';
import {
  about1,about2,details1,details2,search1,search2,cow
} from '../../dummy_data/images/';

import { useTranslation, Trans, Translation } from 'react-i18next';


const styles = theme => ({
  palette: {
    primary: {
      main: '#29b6f6',
    },
    secondary: {
      main: '#00bcd4',
    },
  },
  popover: {
    pointerEvents: 'none',
  },
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize
    }
  },
  extraLargeButton: {
    height:50,
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    }
  },
  card: {
    boxShadow: theme.shadows[4],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5)
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6)
    },
    [theme.breakpoints.down("lg")]: {
      width: "auto"
    }
  },
  wrapper: {
    position: "relative",
    backgroundColor: theme.palette.secondary.main,
    paddingBottom: theme.spacing(2)
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4]
  },
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(9)
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(6)
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3)
    }
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important"
    }
  },
  waveBorder: {
    paddingTop: theme.spacing(4)
  }
});

function HeadSection(props) {
  const { classes, theme, width } = props;

  const socialIcon =   {
    icon: (
      <svg
        role="img"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>GitHub</title>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    label: "Github",
    href: "https://github.com/JIACHENG135/JCPlayer/releases"
  }
  const CowTransIcon = {
    icon:(
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" >
        <path d="M448 768a21.333333 21.333333 0 0 1 21.333333 21.333333 21.333333 21.333333 0 0 1-21.333333 21.333334 21.333333 21.333333 0 0 1-21.333333-21.333334 21.333333 21.333333 0 0 1 21.333333-21.333333m128 0a21.333333 21.333333 0 0 1 21.333333 21.333333 21.333333 21.333333 0 0 1-21.333333 21.333334 21.333333 21.333333 0 0 1-21.333333-21.333334 21.333333 21.333333 0 0 1 21.333333-21.333333M426.666667 469.333333a42.666667 42.666667 0 0 1 42.666666 42.666667 42.666667 42.666667 0 0 1-42.666666 42.666667 42.666667 42.666667 0 0 1-42.666667-42.666667 42.666667 42.666667 0 0 1 42.666667-42.666667m170.666666 0a42.666667 42.666667 0 0 1 42.666667 42.666667 42.666667 42.666667 0 0 1-42.666667 42.666667 42.666667 42.666667 0 0 1-42.666666-42.666667 42.666667 42.666667 0 0 1 42.666666-42.666667m170.666667 298.666667c0 94.293333-114.773333 170.666667-256 170.666667s-256-76.373333-256-170.666667c0-38.4 19.2-73.813333 51.2-102.4-32-42.666667-51.2-96-51.2-153.6l5.12-52.053333c-23.04 6.4-50.773333 6.4-73.386667 0-43.52-11.946667-109.226667-61.013333-99.413333-95.146667 9.813333-34.133333 91.306667-40.533333 134.826667-27.733333 25.173333 7.253333 52.053333 25.6 67.84 45.226666l24.32-34.56C289.706667 300.8 298.666667 170.666667 426.666667 128l-3.84 5.973333c-11.946667 18.773333-42.666667 78.08-10.24 142.08a256.853333 256.853333 0 0 1 198.826666 0c32.426667-64 1.706667-123.306667-10.24-142.08L597.333333 128c128 42.666667 136.96 172.8 111.36 219.733333l24.32 34.56c15.786667-19.626667 42.666667-37.973333 67.84-45.226666 43.52-12.8 125.013333-6.4 134.826667 27.733333 9.813333 34.133333-55.893333 83.2-99.413333 95.146667-22.613333 6.4-50.346667 6.4-73.386667 0L768 512c0 57.6-19.2 110.933333-51.2 153.6 32 28.586667 51.2 64 51.2 102.4m-256-85.333333c-94.293333 0-170.666667 38.4-170.666667 85.333333s76.373333 85.333333 170.666667 85.333333 170.666667-38.4 170.666667-85.333333-76.373333-85.333333-170.666667-85.333333m0-85.333334c47.786667 0 92.586667 8.96 130.986667 23.893334 24.746667-29.44 39.68-66.56 39.68-109.226667a170.666667 170.666667 0 0 0-170.666667-170.666667 170.666667 170.666667 0 0 0-170.666667 170.666667c0 42.666667 14.933333 79.786667 39.68 109.226667 38.4-14.933333 83.2-23.893333 130.986667-23.893334m89.173333-463.36z" fill="" p-id="1449">
          </path>
      </svg>
    ),
    label:"奶牛快传",
    href:"https://cowtransfer.com/s/e22e212612d240"
    
  }
  const {i18n} = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handlePopoverOpen = (event) => {
    console.log("You are hovering me")
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const images = [about1,about2,search1,search2,details1,details2,about1,about2,search1,search2,details1,details2];
  const [activate,setActivate] = useState(0);
  return (

      <Fragment>
        <div className={classNames("lg-p-top", classes.wrapper)}>
          <div className={classNames("container-fluid", classes.container)}>
            <Box display="flex" justifyContent="center" className="row">
              <Card
                className={classes.card}
                data-aos-delay="200"
                data-aos="zoom-in"
              >
                <div className={classNames(classes.containerFix, "container")}>
                  <Box justifyContent="space-between" className="row">
                    <Grid item xs={12} md={5}>
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                        height="100%"
                      >
                        <Box mb={4}>
                          <Typography
                            variant={isWidthUp("lg", width) ? "h3" : "h4"}
                          >
                            <Trans>JCPlayer 免费视频播放器,全网资源,一网打尽</Trans>
                          </Typography>
                        </Box>
                        <div>
                          <Box mb={2}>
                            <Typography
                              variant={isWidthUp("lg", width) ? "h6" : "body1"}
                              color="textSecondary"
                            >
                              
                              <Trans>跨平台,多端同步数据,极致简约</Trans>
                            </Typography>
                          </Box>
                        </div>
                        <div>
                          <Grid container  spacing={3} justify="flex-start" >
                            <Grid item xs={6}  >
                              <Button
                                variant="contained"
                                color="secondary"
                                // fullWidth
                                className={classes.extraLargeButton}
                                classes={{ label: classes.extraLargeButtonLabel }}
                                href="https://github.com/JIACHENG135/JCPlayer/releases"
                              >
                                <IconButton
                                aria-label={socialIcon.label}
                                className={classes.socialIcon}
                                href={socialIcon.href}
                                size="medium"
                                >
                                  {socialIcon.icon}
                                </IconButton>
                                <Trans>Github 下载</Trans>
                              </Button>
                            </Grid>
                            <Grid item xs={6} >
                              <Button
                                variant="contained"
                                color="secondary"
                                // fullWidth
                                className={classes.extraLargeButton}
                                classes={{ label: classes.extraLargeButtonLabel }}
                                href="https://cowtransfer.com/s/e22e212612d240"
                              >
                                <IconButton
                                aria-label={CowTransIcon.label}
                                className={classes.socialIcon}
                                href={CowTransIcon.href}
                                size="medium"
                                >
                                <img src={cow} width={30} alt="CowTransfer"></img>
                                </IconButton>
                                <Trans>奶牛快传</Trans>
                              </Button>
                            </Grid>

                          </Grid>
                        </div>
                        </Box>
                    </Grid>

                      <Grid item md={6} xs={12}>

                        <div className="demo-4 medium">
                          <Carousel 
                          interval="4000" 
                          type="card" 
                          height="200px"
                          onChange={(ind1,ind2) => {
                            setActivate(ind1)
                          }}
                          autoplay={false}
                          >
                            {
                              [about1,about2,search1,search2,details1,details2].map((item, index) => {
                                return (
                                  <Carousel.Item key={index}>
                                      <div>
                                        <Typography
                                          aria-owns={open ? 'mouse-over-popover' : undefined}
                                          aria-haspopup="true"
                                          onMouseEnter={handlePopoverOpen}
                                          onMouseLeave={handlePopoverClose}
                                        >
                                          <img
                                            src={item}
                                            className={classes.image}
                                            alt="header example"
                                          />
                                        </Typography>
                                        <Popover
                                          id="mouse-over-popover"
                                          className={classes.popover}
                                          classes={{
                                            paper: classes.paper,
                                          }}
                                          open={open}
                                          anchorEl={anchorEl}
                                          anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                          }}
                                          transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                          }}
                                          onClose={handlePopoverClose}
                                          disableRestoreFocus
                                        >
                                          {/* <span>You are hovering{activate}</span> */}
                                        <img
                                          src={images[activate]}
                                          className={classes.image}
                                          alt="header example"
                                        />
                                      </Popover>
                                    </div>
                                  </Carousel.Item>
                                )
                              })
                            }
                          </Carousel>
                        </div>
                      </Grid>
                  </Box>
                </div>
              </Card>
            </Box>
          </div>
        </div>
        <WaveBorder
          upperColor={theme.palette.secondary.main}
          lowerColor="#FFFFFF"
          className={classes.waveBorder}
          animationNegativeDelay={2}
        />
      </Fragment>

  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(HeadSection)
);
