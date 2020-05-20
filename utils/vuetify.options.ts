import colors from "vuetify/lib/util/colors";
import { VuetifyPreset } from 'vuetify/types/services/presets';

const options: VuetifyPreset = {
    theme: {
        dark: false,
        themes: {
            light: {
                primary: '#4CAF50',
                accent: '#9C27b0',
                secondary: '#9C27b0',
                info: '#00CAE3',
                warning: '#FB8C00',
                error: colors.deepOrange.accent4,
                success: '#4caf50'
            }
        }
    }
} as VuetifyPreset;

export default options;

