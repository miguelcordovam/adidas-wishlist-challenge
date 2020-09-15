import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import {connect} from 'react-redux';
import { fetchProducts, addProductToWishList, removeProductFromWishList, fetchWishList } from '../actions';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 1000
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      }
  });

class ProductsPage extends React.Component  {

    state = {
        sortBy: ''
    }

    isSignedIn = this.props.isSignedIn;

    componentDidMount() {
        this.props.fetchProducts();
        if (this.isSignedIn) {
            this.props.fetchWishList();
        }
    }

    sortList = (criteria) => {
        if(criteria == 0){
            this.props.products.sort((p1, p2) => p1.price - p2.price);
        } else if(criteria == 1){
            this.props.products.sort((p1, p2) => p2.price - p1.price); 
        } else if(criteria == 2){
            this.props.products.sort((p1, p2) => p1.name.localeCompare(p2.name));
        } else if(criteria == 3){
            this.props.products.sort((p1, p2) => p2.name.localeCompare(p1.name));
        }
    }

    handleChange = (event) => {
        
        this.sortList(event.target.value);
        this.setState({
            sortBy: event.target.value
        })
    };

    addProductToWishList = (product) => {
        this.props.addProductToWishList(product);
    }

    removeProductFromWishList = (product) => {
        this.props.removeProductFromWishList(product);
    }

    renderList () {
        const { classes } = this.props;
        const favorites = this.props.wishListIds.map(p => p.id);
        const isSignedIn = this.props.isSignedIn;


        if (this.state.sortBy !== '') {
            this.sortList(this.state.sortBy);
        }

        return (
            <>            
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">Sort By</InputLabel>
                    <Select
                    native
                    value={this.state.sortBy}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'criteria',
                        id: 'sortBy',
                    }}
                    >
                    <option aria-label="None" value="" />
                    <option value={0}>Price (low - high)</option>
                    <option value={1}>Price (high - low</option>
                    <option value={2}>Name ascending</option>
                    <option value={3}>Name descending</option>

                    </Select>
                </FormControl>
                
                <div className={classes.root}>
                    <GridList cellHeight={180} className={classes.gridList} cols={3}>
                        {this.props.products.map((product) => (
                            <GridListTile key={product.id}>
                                <img src={`${process.env.PUBLIC_URL}/img/${product.imgUrl}`} alt={product.name} />
                                <GridListTileBar
                                    title={product.name}
                                    subtitle={<span>€ {product.price}</span>}
                                    actionIcon={
                                        isSignedIn ? 

                                        <IconButton aria-label="Add to WishList" className={classes.icon} 
                                            onClick={() => favorites.includes(product.id) ? this.removeProductFromWishList(product) :this.addProductToWishList(product)}>
                                            {
                                                favorites.includes(product.id) ? <FavoriteOutlinedIcon /> :<FavoriteBorderOutlinedIcon />
                                            }
                                        </IconButton>
                                        :
                                        <IconButton aria-label="Add to WishList" className={classes.icon} >
                                            <FavoriteBorderOutlinedIcon />
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </>
        );
    }


    render () {

        return (
            
            <div>
                {this.renderList()}
            </div>
        );
    }
    
}

const mapStateToProps = (state) => {
    return {
        products: Object.values(state.products),
        wishListIds: Object.values(state.wishList),
        isSignedIn: state.auth.isSignedIn
    };
}

export default connect(mapStateToProps, 
    {fetchProducts, addProductToWishList, removeProductFromWishList, fetchWishList})
    (withStyles(useStyles)(ProductsPage));