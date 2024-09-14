interface PrincipalProps {
    dictionary: {
        general: {
            title?: string;
            description?: string;
            skills: {
                nameSkill?: string;
                description?: string;
                items: {
                    innovator?: string;
                    teamPlayer?: string;
                    problemSolver?: string;
                    fastLearner?: string;
                    responsible?: string;
                    committed?: string;
                    proactive?: string;
                    creative?: string;
                    analytical?: string;
                    detailOriented?: string;
                    adaptable?: string;
                    communicative?: string;
                    collaborative?: string;
                    leadership?: string;
                    empathetic?: string;
                    patient?: string;
                    tolerant?: string;
                    respectful?: string;
                    honest?: string;
                    ethical?: string;
                    professional?: string;
                    punctual?: string;
                    organized?: string;
                    efficient?: string;
                };
            };
        };
        educationTitle?: string;
        educationItems?: {
            degree?: string;
            institution?: string;
            period?: string;
        };
        nameLanguage?: string;
        descriptionLanguage?: string;
        languas: Array<{
            key: number;
            nameIdiom: string;
            descriptionIdiom: string;
            percentage: number;
        }>;
        languagesLevel?: string;
        languagesNull?: string;
        workExperienceTitle: string;
        workExperienceFirst?: {
            role?: string;
            company?: string;
            period?: string;
            description?: string;
        };
        workExperienceSecond?: {
            role?: string;
            company?: string;
            period?: string;
            description?: string;
        };
        workExperienceNull?: string;
        socialNetworks?: string;
        aboutMe?: string;
        personalNumber?: string;
        institutionalEmail?: string;
        personalEmail?: string;
        download?: string;
        portafolio?: string;
        curses?: string;
        proyects?: string;
        contacts?: string;
        frameworks?: string;
        tools?: string;
        databases?: string;
        operatingSystems?: string;
        certifications?: string;
        personalInformation?: string;
        birthdate?: string;
        address?: string;
    };
}

export default PrincipalProps;
