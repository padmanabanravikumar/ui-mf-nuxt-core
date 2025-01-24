import Material from "@primevue/themes/material";
import { definePreset, palette } from "@primevue/themes";

const AppTheme = definePreset(Material, {
  primitive: {
    red: palette('#FB5E67'),
    sky: palette('#002060'),
  },
  semantic: {
    primary: palette('#2DB9FF'),
    colorScheme: {
      light: {
        formField: {
          invalidBorderColor: '{red.500}',
          invalidPlaceholderColor: '{red.500}'
        }
      }
    }
  },
  components: {
    message: {
      colorScheme: {
        light: {
          error: {
            simple: {
              color: "{red.500}",
            },
          },
        },
      },
    },
    card: {
      borderRadius: '12px',
      shadow: '0px 4px 30px rgba(221, 224, 255, .54)'
    },
    button: {
      iconOnlyWidth: '46px'
    },
    dialog: {
      header: {
        padding: '16px 24px'
      }
    }
  }
});

export default AppTheme;
