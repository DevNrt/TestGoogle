import React from 'react';
import LocalizedStrings from 'react-native-localization';

const strings = new LocalizedStrings({
    'es-co': {
        start_button: "Iniciar",
        view_missions_label: "Ver misiones"
    },
    'en-us':{
        start_button: "Start",
        view_missions_label: "View missions"
    }
});

export default strings;
