import BookKeepingServices from "./BookKeepingServices.json";
import BusinessRegistration from "./BusinessRegistration.json";
import Cr12Services from "./Cr12Services.json";
import NtsaServices from "./NtsaServices.json";
import SocialMedia from "./SocialMedia.json";
import StatutoryServices from "./StatutoryServices.json";
import TaxCompliance from "./TaxCompliance.json";

// Define the expected type for JSON imports
export type CorporateContentType = {
    BookKeepingServices: typeof BookKeepingServices;
    BusinessRegistration: typeof BusinessRegistration;
    Cr12Services: typeof Cr12Services;
    NtsaServices: typeof NtsaServices;
    SocialMedia: typeof SocialMedia;
    StatutoryServices: typeof StatutoryServices;
    TaxCompliance: typeof TaxCompliance;
};

// Export all content as a grouped object
const CorporateContent: CorporateContentType = {
    BookKeepingServices,
    BusinessRegistration,
    Cr12Services,
    NtsaServices,
    SocialMedia,
    StatutoryServices,
    TaxCompliance
};

export default CorporateContent;
