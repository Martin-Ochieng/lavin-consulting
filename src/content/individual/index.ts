import ECitizenServices from "./EcitizenServices.json";
import SchoolApplication from "./SchoolApplication.json";
import TaxCompliance from "./TaxCompliance.json";
import VisaServices from "./VisaServices.json";

// Define the expected type for JSON imports
export type IndividualContentType = {
    ECitizenServices: typeof ECitizenServices;
    SchoolApplication: typeof SchoolApplication;
    TaxCompliance: typeof TaxCompliance;
    VisaServices: typeof VisaServices;
};

// Export all content as a grouped object
const IndividualContent: IndividualContentType = {
    ECitizenServices: ECitizenServices,
    SchoolApplication,
    TaxCompliance,
    VisaServices
};

export default IndividualContent;
