import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';

import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

const Whatsapp = () => {
  return (
    <WhatsAppWidget
      message="Wie kann ich Ihnen helfen ?"
      replyTimeText="Wir antworten so schell wie möglich !"
      companyName="3D Tours"
      CompanyIcon={ThreeDRotationIcon}
      phoneNumber="+4915229935760"
    />
  );
};

export default Whatsapp;
