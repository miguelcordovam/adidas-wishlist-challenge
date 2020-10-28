import React from 'react';
import { mount } from 'enzyme';
import ProductsPage from '../ProductsPage';
import GridList from '@material-ui/core/GridList';
import Root from '../../Root';

it ('shows a grid in products page', () => {
    const wrapped = mount(<Root><ProductsPage /></Root>);
    expect (wrapped.find(GridList).length).toEqual(1);
});