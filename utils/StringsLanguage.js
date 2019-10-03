import React from 'react';
import LocalizedStrings from 'react-native-localization';

const strings = new LocalizedStrings({
    'es-co': {
        //Home View
        start_button: "Iniciar",
        validate_button: "Validar código de invitación",

        //Validate Code View
        validate: "Validar",
        title_error_validation: "Código no válido",
        content_error_validation: "Por favor verifica que el código sea exactamente igual al compartido",
        accept_error_validation: "Aceptar",
        code_validate_button: "Validar",

        //Camera View
        title_toolbar_section_camera: "Camara",
        take_photo_button: "Tomar foto",

        //Cartoon View
        title_section_cartoon: "Historia gráfica",
        go_to_mision_button: "Ir a la misión",

        //Evidence (Activity) View
        title_section_evidence: "Evidencia Actividad",
        evidence_placeholder_description: "Descripción de la evidencia",
        send_evidence_button: "Enviar",

        //Mission Detail View
        subtitle_section_mission: "Actividades",

        //Mission List View
        title_section_mission_list: "Misiones",

        //Profile View
        view_missions_button: "Ver misiones",

        //Settings View
        title_section_settings: "Configuración",
        option_english_language: "Inglés",
        option_spanish_language: "Español",
        invite_button: "Invitar a mis amigos",
        back_button: "Regresar",

        title_popup_share: "Código de invitación",
        message_popup_share: "Invita a tus amigos a vivir una gran experiencia con Evoke",
        button_popup_share: "Compartir",
        button_cancel_popup_share: "Cancelar",
        message_share_code: "Evoke | Este es el código de invitación para unirte a Evoke:",

    },
    'en-us':{
        //Home View
        start_button: "Start",
        validate_button: "Validate invitation code",

        //Validate Code View
        validate: "Validate",
        title_error_validation: "Invalid code",
        content_error_validation: "Please verify that the code is exactly the same as the shared",
        accept_error_validation: "Accept",
        code_validate_button: "Validate",

        //Camera View
        title_toolbar_section_camera: "Camera",
        take_photo_button: "Take photo",

        //Cartoon View
        title_section_cartoon: "Graphic hitory",
        go_to_mision_button: "Go to mission",

        //Evidence (Activity) View
        title_section_evidence: "Activity Evidence",
        evidence_placeholder_description: "Evidence description",
        send_evidence_button: "Send",

        //Mission Detail View
        subtitle_section_mission: "Activities",

        //Mission List View
        title_section_mission_list: "Missions",

        //Profile View
        view_missions_button: "View missions",

        //Settings View
        title_section_settings: "Configuration",
        option_english_language: "English",
        option_spanish_language: "Spanish",
        invite_button: "Invite my friends",
        back_button: "Go back",

        title_popup_share: "Invitation Code",
        message_popup_share: "Invite your friends to live a great experience with Evoke",
        button_popup_share: "Share",
        button_cancel_popup_share: "Cancel",
        message_share_code: "Evoke | This is the invitation code to join Evoke:",
    }
});

export default strings;
