import {
  Step,
  StepConnector,
  stepConnectorClasses,
  StepLabel,
  Stepper,
  styled,
} from "@mui/material";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import { useState } from "react";
import logo from "/logo.png";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import { useNavigate } from "react-router-dom";

const primaryColor = "#8D7C68";
const CustomStepIcon = (props) => {
  /*eslint-disable-next-line react/prop-types*/
  const { active, completed } = props;
  return (
    <div
      style={{
        width: 30,
        height: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        border: completed || active ? "8px solid" : "2px solid",
        borderColor: completed || active ? primaryColor : "darkgray",
        backgroundColor: "white",
        color: "white",
        fontWeight: "bold",
        position: "relative",
        zIndex: 1,
      }}
    ></div>
  );
};
const CustomStepConnectior = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 14,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: primaryColor,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: primaryColor,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 2,
    border: 0,
    backgroundColor: "#ccc",
    position: "absolute",
    left: -10,
    right: -4,
    zIndex: 0,
  },
}));

export default function CalculateApproximateCost() {
  const steps = ["BHK Type", "Room to Design", "Get Quote"];
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    BHKType: null,
    roomDesign: {
      "Living Room": 1,
      Kitchen: 1,
      Bedroom: 3,
      Bathroom: 2,
      Dining: 1,
    },
    name: "",
    email: "",
    mobile: "",
    property_name: "",
  });
  const navigate = useNavigate();
  const decreaseStep = () => {
    setActiveStep((prev) => {
      if (prev <= 0) navigate("/");
      else return prev - 1;
    });
  };
  const handleMail = () => {
    const emailBody = `
    Hello,%0A
    I'm looking for a service enquiry related to ${encodeURIComponent(formData.BHKType)} ${encodeURIComponent(
      formData.property_name
    )}.%0A%0A
    Requirements: %0A
      Living Room - ${encodeURIComponent(formData.roomDesign["Living Room"])}%0A
      Kitchen - ${encodeURIComponent(formData.roomDesign.Kitchen)}%0A
      Bedroom - ${encodeURIComponent(formData.roomDesign.Bedroom)}%0A
      Bathroom - ${encodeURIComponent(formData.roomDesign.Bathroom)}%0A
      Dining - ${encodeURIComponent(formData.roomDesign.Dining)}%0A

    ${encodeURIComponent(formData.name)}%0A
    ${encodeURIComponent(formData.mobile)}%0A
    ${encodeURIComponent(formData.email)}%0A
      `;

    const anchor = document.createElement("a");
    anchor.href = `mailto:contact@geniusinterio.com?subject=Service%20Enquiry%20Related%20to%20${encodeURIComponent(
      formData.property_name
    )}&body=${emailBody}`;
    anchor.click();
  };
  return (
    <div className="bg-[#f5f5f5] min-h-screen ">
      <nav className="p-4 lg:px-20  shadow-lg grid grid-cols-3 sm:grid-cols-4 justify-between  items-center gap-4 bg-white">
        <img
          src={logo}
          alt="logo"
          className="h-16 order-1 col-span-2 sm:col-span-1"
        />

        <Stepper
          className="min-w-[55vw]  order-3 sm:order2  col-span-3 sm:col-span-2"
          activeStep={activeStep}
          alternativeLabel
          connector={<CustomStepConnectior />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel
                StepIconComponent={(props) => <CustomStepIcon {...props} />}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        <p className="order-2 sm:order-3  text-2xl font-medium  justify-self-end">
          {activeStep + 1}/3
        </p>
      </nav>

      <section className="max-w-[900px] min-h-[500px]  m-auto pt-2">
        {activeStep === 0 ? (
          <Step1 formData={formData} setFormData={setFormData} />
        ) : activeStep === 1 ? (
          <Step2 formData={formData} setFormData={setFormData} />
        ) : (
          <Step3 formData={formData} setFormData={setFormData} />
        )}
      </section>
      <section className="max-w-[900px] m-auto pt-2">
        <div className="flex justify-between p-5 bg-white mt-2">
          <button
            className={`border border-primary px-2 disabled:cursor-not-allowed disabled:opacity-60`}
            onClick={decreaseStep}
          >
            {" "}
            <WestOutlinedIcon
              htmlColor={"black"}
              sx={{
                height: "55px",
                width: "100%",
                paddingY: "1rem",
                paddingX: "0.5rem",
              }}
            />
          </button>
          {activeStep < 2 ? (
            <button
              className="bg-primary px-2 "
              disabled={activeStep >= 2 || !formData.BHKType}
              onClick={() => setActiveStep((prev) => prev + 1)}
            >
              {" "}
              <EastOutlinedIcon
                htmlColor={"black"}
                sx={{
                  height: "55px",
                  width: "100%",
                  paddingY: "1rem",
                  paddingX: "0.5rem",
                }}
              />
            </button>
          ) : (

              <button onClick={handleMail}
              disabled={
                !formData.name ||
                !formData.email ||
                !formData.mobile ||
                !formData.property_name
              } className="  h-fit w-fit  border border-primary text-white rounded-full overflow-hidden disabled:cursor-not-allowed disabled:opacity-60" >
                <div className="bg-primary p-2 px-4 sm:px-6 h-fit z-10 text-nowrap xl:text-lg">
                 Get My Estimate
                </div>
              </button>
          )}
        </div>
      </section>
    </div>
  );
}
