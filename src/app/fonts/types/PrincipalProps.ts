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
        workExperienceItems: Array<{
            position?: string;
            company?: string;
            period?: string;
            description?: string;
        }>;
        workExperienceNull?: string;
        experienceDescription?: string;
        socialNetworkTitle?: string;
        socialNetworks?: Array<{
            key: number;
            name?: string;
            url?: string;
            icon?: string;
        }>;
        aboutMe?: string;
        personalNumber?: string;
        institutionalEmail?: string;
        personalEmail?: string;
        download?: string;
        portafolio?: string;
        curses?: string;
        proyects?: string;
        proyectsNull?: string;
        proyectsItems?: Array<{
            key: number;
            name?: string;
            description?: string;
            period?: string;
            url?: string;
            image?: string;
        }>;
        repository?: string;
        contacts?: string;
        frameworks?: string;
        tools?: string;
        databases?: string;
        operatingSystems?: string;
        certifications?: string;
        certificationsNull?: string;
        certificationsItems?: Array<{
            name?: string;
            institution?: string;
            period?: string;
        }>;
        personalInformation?: string;
        birthdate?: string;
        address?: string;
    };
}

export default PrincipalProps;
