import ECitizenServices from "./EcitizenServices.json";
import SchoolApplication from "./SchoolApplication.json";
import Kuccps_Hef_Helb from "./Kuccps_Hef_Helb.json";
import VisaServices from "./VisaServices.json";

// Define the expected type for JSON imports
export type IndividualContentType = {
    ECitizenServices: typeof ECitizenServices;
    SchoolApplication: typeof SchoolApplication;
    Kuccps_Hef_Helb: typeof Kuccps_Hef_Helb;
    VisaServices: typeof VisaServices;
};


// Export all content as a grouped object
const IndividualContent: IndividualContentType = {
    ECitizenServices: ECitizenServices,
    SchoolApplication,
    Kuccps_Hef_Helb: Kuccps_Hef_Helb,
    VisaServices
};


export default IndividualContent;
