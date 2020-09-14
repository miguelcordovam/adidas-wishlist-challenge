import createMuiTheme, { Theme, ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { NODE_ENV } from '../../utils/config';

enum AdidasTheme {
  DARK_THEME = 'DARK_THEME',
  LIGHT_THEME = 'LIGHT_THEME'
}

export type AdidasThemeColors =
  | 'iconButtonBackground'
  | 'iconButtonColor'
  | 'paletteMain'
  | 'paletteText'
  | 'toolbarBorderColor'
  | 'avatarBorderColor';

export type AdidasMuiPalette = Record<AdidasThemeColors, string>;

// tslint:disable:object-literal-sort-keys
export const adidasMuiThemeColors = {
  // GRAY COLORS
  primary_black: '#1a1a1a',
  primary_nickel: '#333333',
  primary_darkgray: '#767676',
  primary_gray: '#bfbfbf',
  primary_silver: '#e1e1e1',
  primary_lightgray: '#eeeeee',
  primary_white: '#ffffff',
  // ACCENT COLORS (BLUE)
  blue_100: '#0d83ff',
  blue_80: '#3396ff',
  blue_60: '#66b0ff',
  blue_20: '#cce5ff',
  // NOTIFICATION COLORS
  // red
  red_100: '#ff270d',
  red_80: '#ff4933',
  red_60: '#ff7666',
  red_20: '#ffd1cc',
  // green
  green_100: '#65cc3d',
  green_80: '#6ed446',
  green_60: '#88e066',
  green_20: '#d7f5cc',
  // SECONDARY COLORS
  // orange
  orange_100: '#ff720d',
  orange_80: '#ff8b39',
  orange_60: '#f7a266',
  orange_20: '#fce0cc',
  // bright yellow
  bright_yellow_100: '#edda00',
  bright_yellow_80: '#f1e133',
  bright_yellow_60: '#f4e966',
  bright_yellow_20: '#fbf8cc',
  // light green
  light_green_100: '#b0d400',
  light_green_80: '#bdd936',
  light_green_60: '#cbe066',
  light_green_20: '#eef5cc',
  // light blue
  light_blue_100: '#14aecc',
  light_blue_80: '#33bcd6',
  light_blue_60: '#66cde0',
  light_blue_20: '#cceef5',
  // dark blue
  dark_blue_100: '#405fff',
  dark_blue_80: '#516dff',
  dark_blue_60: '#7d92ff',
  dark_blue_20: '#d4dbff',
  // purple
  purple_100: '#9f40ff',
  purple_80: '#a851ff',
  purple_60: '#be7dff',
  purple_20: '#e9d4ff',
  // pink
  pink_100: '#ff339c',
  pink_80: '#ff47a6',
  pink_60: '#ff75bc',
  pink_20: '#ffd1e9'
};
// tslint:enable:object-literal-sort-keys

export const adidasFonts = {
  BODY: 'yarn-base, Helvetica Neue, Helvetica, Arial, sans-serif',
  TITLE: 'yarn-heading, Helvetica Neue, Helvetica, Arial, sans-serif'
};

export const colorPalettes: { [T in keyof typeof AdidasTheme]: AdidasMuiPalette } = {
  [AdidasTheme.DARK_THEME]: {
    avatarBorderColor: adidasMuiThemeColors.primary_black,
    iconButtonBackground: adidasMuiThemeColors.primary_nickel,
    iconButtonColor: adidasMuiThemeColors.primary_white,
    paletteMain: adidasMuiThemeColors.primary_black,
    paletteText: adidasMuiThemeColors.primary_white,
    toolbarBorderColor: adidasMuiThemeColors.primary_nickel
  },
  [AdidasTheme.LIGHT_THEME]: {
    avatarBorderColor: adidasMuiThemeColors.primary_silver,
    iconButtonBackground: adidasMuiThemeColors.primary_white,
    iconButtonColor: adidasMuiThemeColors.primary_darkgray,
    paletteMain: adidasMuiThemeColors.primary_white,
    paletteText: adidasMuiThemeColors.primary_black,
    toolbarBorderColor: adidasMuiThemeColors.primary_silver
  }
};

export const adidasMuiThemeLayout = {
  selectionBorderWidth: '2'
};

export const getAdidasMuiThemeOptions: (themeName: AdidasTheme) => ThemeOptions = (themeName) => ({
  overrides: {
    MuiAppBar: {
      root: {
        boxShadow: 'none'
      }
    },
    MuiAvatar: {
      root: {
        border: `1px solid ${colorPalettes[themeName].avatarBorderColor}`
      }
    },
    MuiIcon: {
      colorPrimary: {
        color: adidasMuiThemeColors.primary_black
      },
      colorSecondary: {
        color: adidasMuiThemeColors.primary_white
      },
      root: {
        color: colorPalettes[themeName].iconButtonColor
      }
    },
    MuiIconButton: {
      colorPrimary: {
        '&:hover': {
          backgroundColor: colorPalettes[themeName].iconButtonBackground
        },
        'backgroundColor': colorPalettes[themeName].iconButtonBackground,
        'color': colorPalettes[themeName].iconButtonColor
      },
      root: {
        borderRadius: 0,
        color: colorPalettes[themeName].iconButtonColor
      }
    },
    MuiInput: {
      root: {
        color: 'inherit',
        font: 'inherit'
      }
    },
    MuiListItem: {
      button: {
        '&:hover': {
          backgroundColor: 'inherit'
        }
      }
    },
    MuiListItemIcon: {
      root: {
        color: adidasMuiThemeColors.primary_black,
        marginRight: '3px'
      }
    },
    MuiMenuItem: {
      root: {
        '&:focus': {
          borderColor: adidasMuiThemeColors.primary_black,
          color: adidasMuiThemeColors.primary_black
        },
        'borderLeft': `${adidasMuiThemeLayout.selectionBorderWidth}px solid ${
          adidasMuiThemeColors.primary_white
        }`,
        'color': adidasMuiThemeColors.primary_darkgray
      }
    }
  },
  palette: {
    primary: {
      contrastText: colorPalettes[themeName].paletteText,
      main: colorPalettes[themeName].paletteMain
    }
  },
  props: {
    MuiAppBar: {
      className: 'header'
    },
    MuiButtonBase: {
      disableRipple: true
    },
    MuiInput: {
      disableUnderline: true
    },
    MuiList: {
      disablePadding: true
    },
    MuiListItemText: {
      disableTypography: true,
      primaryTypographyProps: {
        color: 'secondary',
        variant: 'h5'
      }
    },
    MuiPaper: {
      square: true
    },
    MuiToolbar: {
      disableGutters: true,
      variant: 'dense'
    }
  },
  typography: {
    body1: {
      color: adidasMuiThemeColors.primary_black,
      fontFamily: adidasFonts.BODY,
      fontSize: 18,
      fontWeight: 300,
      textShadow: '1px 1px 2px white, -1px -1px 2px white, 1px -1px 2px white, -1px 1px 2px white'
    },
    h1: {
      color: adidasMuiThemeColors.primary_nickel,
      fontFamily: adidasFonts.BODY,
      fontSize: 36,
      fontWeight: 700,
      marginBottom: 12,
      marginTop: 0,
      paddingTop: 28,
      textShadow: '1px 1px 8px white, -1px -1px 8px white, 1px -1px 8px white, -1px 1px 8px white',
      textTransform: 'uppercase'
    },
    h6: {
      color: adidasMuiThemeColors.primary_black,
      fontFamily: adidasFonts.BODY,
      fontSize: 13,
      fontWeight: 400
    },
    useNextVariants: true
  }
});

const createAdidasMuiTheme = (themeName: AdidasTheme): Theme => {
  const theme: any = createMuiTheme(getAdidasMuiThemeOptions(themeName));
  theme.themeName = themeName;

  return theme as Theme;
};

export const getAdidasMuiThemePalette = (theme: Theme): AdidasMuiPalette => {
  const themeName = (theme as any).themeName;

  // This will be removed from a minified production build
  if (NODE_ENV !== 'production') {
    if (typeof themeName === 'undefined') {
      throw new Error(
        'Received theme without themeName. Use only the exported themes of mui-theme-adidas.'
      );
    }
    if (!(themeName in colorPalettes)) {
      throw new Error(`Theme with name ${JSON.stringify(themeName)} does not exist.`);
    }
  }

  return colorPalettes[AdidasTheme.DARK_THEME];
};

export const adidasThemeDark: Theme = createAdidasMuiTheme(AdidasTheme.DARK_THEME);
export const adidasThemeLight: Theme = createAdidasMuiTheme(AdidasTheme.LIGHT_THEME);
