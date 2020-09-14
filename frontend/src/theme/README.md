# Adidas' Material-UI Theme for React

This is a Material-UI theme that matches the [design of Adidas YARN](http://demo.yarn.adidas.com).

General information about the handling of Material-UI themes can be found [here](https://material-ui.com/customization/themes/).

**NOTE:** This is a preliminary version and currently under heavy development.
Backwards compatibility cannot be guaranteed in the future.

## How to use this theme
In this theme, several sub-themes are provided. You can use them as usual with a MuiThemeProvider component.
            
            // Example
            import {adidasThemeDark} from "mui-theme-adidas";
            import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
            ...
            // inside react component:
            <MuiThemeProvider theme={adidasThemeDark}>
             ...
            </MuiThemeProvider>

A theme can be replaced by setting a new MuiThemeProvider environment or by changing its property `theme`.
