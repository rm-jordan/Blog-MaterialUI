
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import CardActions from '@material-ui/core/CardActions'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';



const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#8e9775"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/913215/pexels-photo-913215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    font: "limelight",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)

  },
  blogTitle: {
    fontWeight: 500,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary" >
            ✈️
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box>Wanderlust: Travel Blog</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles:
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/784707/pexels-photo-784707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  title="Mexican Street Festival"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Fiesta time!!!!
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Ain't no party like a Mexican fiesta! The colours, costumes, music and food are second to none. Hope you got some rest these go all night long!
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Luiz Gustavo
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 31, 2021
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/2956955/pexels-photo-2956955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  title="Paris, France"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    C'est Paris
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    One of the must see cities on your bucket list should be Paris, France. World reknown for its cuisine and architecture, this city has something for everyone.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/7284787/pexels-photo-7284787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      A. Mime
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      December 31, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/5368573/pexels-photo-5368573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  title="Costa Rican Beach"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Pura Vida
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    The jewel of Central America, Costa Rica is a beauty to behold. Whether its the surf or a  tour of the rainforest the active traveller won't leave disappointed.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/1654498/pexels-photo-1654498.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Laird Hamilton
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      November 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  title="By the river Thames"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    London, England
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    One of the largest cities in Europe, London is a rich and diverse hotspot. Old world history with new world culture it is not to be missed. 
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Richard Brighton
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/3182452/pexels-photo-3182452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  title="Havana, Cuba"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Havana Nights
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Cuba is one of the most beautiful countries in the Caribbean. Lovely beaches and even lovlier people, this country is known for its hospitality.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/6445756/pexels-photo-6445756.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Manuel Riviera
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      April 1, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/1790573/pexels-photo-1790573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  title="Amsterdam Bike Path"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Amsterdam Good Time
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Amsterdam! Famous for its canals, beautiful homes, 'coffee shops' and liberal city night life. There is a lot more to this city than people realize. Worth the trip!
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/3120337/pexels-photo-3120337.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Elissa Laroches
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      March 22, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;