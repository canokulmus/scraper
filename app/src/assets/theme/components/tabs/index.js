import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";

import pxToRem from "assets/theme/functions/pxToRem";

const { error } = colors;
const { borderRadius } = borders;

export default {
  styleOverrides: {
    root: {
      position: "relative",
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderRadius: borderRadius.md,
      minHeight: "unset",
      padding: pxToRem(4),
    },

    flexContainer: {
      height: "100%",
      position: "relative",
      zIndex: 10,
    },

    fixed: {
      overflow: "unset !important",
      overflowX: "unset !important",
    },

    vertical: {
      "& .MuiTabs-indicator": {
        width: "100%",
      },
    },

    indicator: {
      height: "100%",
      borderRadius: borderRadius.lg,
      backgroundColor: error.focus,
      transition: "all 500ms ease",
    },
  },
};
