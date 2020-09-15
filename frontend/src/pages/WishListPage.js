import React from 'react';
import {connect} from 'react-redux';
import {fetchWishList, removeProductFromWishList} from '../actions';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = theme => ({
    root: {
        flexGrow: 1
      },
      paper: {
        padding: theme.spacing(2),
        margin: 20,
        maxWidth: 800,
      },
      image: {
        width: 128,
        height: 128,
      },
      img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      },
  });

class WishListPage extends React.Component {

    isSignedIn = this.props.isSignedIn;

    componentDidMount() {
        if (this.isSignedIn) {
            this.props.fetchWishList();
        }
    }

    removeItem = (product) => {
        this.props.removeProductFromWishList(product);
    }

    renderList() {
        const { classes } = this.props;

        return (this.props.wishList.map(product => {
            return (
                
                    <div className={classes.root} key={product.id}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                            <Grid item key={product.id}>
                                <div className={classes.image}>
                                    <img className={classes.img} alt={product.name} src={`${process.env.PUBLIC_URL}/img/${product.imgUrl}`} />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                    <b>{product.name}</b>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                       <span onClick={() => this.removeItem(product)}>Remove</span>
                                    </Typography>
                                </Grid>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1">€ {product.price}</Typography>
                                </Grid>
                            </Grid>
                            </Grid>
                        </Paper>
                    </div>
                
            );
        }));

    }

    render() {
        const { classes } = this.props;

        if(!this.isSignedIn) {
            return <div></div>
        }
        return (
            <List className={classes.root}>
                {this.renderList()}
            </List>
        );

    }
}

const mapStateToProps = (state) => {
    return {
        wishList: Object.values(state.wishList),
        isSignedIn: state.auth.isSignedIn
    };
}

export default connect(mapStateToProps, {fetchWishList, removeProductFromWishList})(withStyles(useStyles)(WishListPage));