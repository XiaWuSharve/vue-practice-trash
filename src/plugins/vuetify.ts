import Vue from 'vue';
import { colors } from 'vuetify/lib';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.red,
                secondary: colors.red.darken2,
                accent: colors.red.accent4,
            },
            dark: {
                primary: colors.red.darken3,
                secondary: colors.red.darken1,
                accent: colors.red.accent4,
            }
        }
    }
});
