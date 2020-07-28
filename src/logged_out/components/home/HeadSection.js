import React, { Fragment } from "react";
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
// import headerImage from "../../dummy_data/images/headerImage.jpg";
import WaveBorder from "../../../shared/components/WaveBorder";
import 'element-theme-default';
import './carousel.css';
import {
  about1,about2,details1,details2,search1,search2
} from '../../dummy_data/images/';



const styles = theme => ({
  palette: {
    primary: {
      main: '#29b6f6',
    },
    secondary: {
      main: '#00bcd4',
    },
  },
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize
    }
  },
  extraLargeButton: {
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
    href: "https://github.com/dunky11/react-saas-template"
  }
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
                            JCPlayer 免费视频播放器,全网资源,一网打尽
                          </Typography>
                        </Box>
                        <div>
                          <Box mb={2}>
                            <Typography
                              variant={isWidthUp("lg", width) ? "h6" : "body1"}
                              color="textSecondary"
                            >
                              跨平台,多端同步数据,极致简约
                            </Typography>
                          </Box>
                        </div>
                        <div>
                          <Grid container  spacing={3} justify="space-evenly" >
                            <Grid xs={6}  >
                              <Button
                                variant="contained"
                                color="secondary"
                                sizeSmall
                                iconSizeLarge
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
                                Github 下载
                              </Button>
                            </Grid>
                            <Grid xs={6} >
                              <Button
                                variant="contained"
                                color="secondary"
                                sizeSmall
                                iconSizeLarge
                                // fullWidth
                                className={classes.extraLargeButton}
                                classes={{ label: classes.extraLargeButtonLabel }}
                                href="https://github.com/dunky11/react-saas-template"
                              >
                                <IconButton
                                aria-label={socialIcon.label}
                                className={classes.socialIcon}
                                href={socialIcon.href}
                                size="medium"
                                >
                                {socialIcon.icon}
                                </IconButton>
                                Github 下载
                              </Button>
                            </Grid>

                          </Grid>
                        </div>
                        </Box>
                    </Grid>

                      <Grid item md={6} xs={12}>

                        <div className="demo-4 medium">
                          <Carousel interval="4000" type="card" height="200px">
                            {
                              [about1,about2,search1,search2,details1,details2].map((item, index) => {
                                return (
                                  <Carousel.Item key={index}>
                                    <img
                                      src={item}
                                      className={classes.image}
                                      alt="header example"
                                    />
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
