import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { FcMinus, FcPlus } from "react-icons/fc";
const FAQ = () => {
  return (
    <Accordion display={"flex"} flexDirection={"column"} gap="10px" m="4% 10%">
      <h2
        style={{
          color: "#a8865f",
          fontSize: "35px",
          margin: "2%",
          textAlign: "center",
        }}
      >
        Frequently Asked Questions (FAQ)
      </h2>

      <AccordionItem backgroundColor={"#e9dbcb"}>
        <h2>
          <AccordionButton
            fontWeight={600}
            cursor={"pointer"}
            bgColor="#e9dbcb"
            border={"none"}
            borderRadius={3}
            padding={"10px"}
          >
            <Box as="span" flex="1" textAlign="left">
              <strong style={{ fontWeight: 600 }}>Can I cancel a booking?</strong>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel p="10px" >
          <small>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </small>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem backgroundColor={"#e9dbcb"}>
        <h2>
          <AccordionButton
            cursor={"pointer"}
            bgColor="#e9dbcb"
            border={"none"}
            borderRadius={3}
            padding={"10px"}
          >
            <Box as="span" flex="1" textAlign="left">
              <strong  style={{ fontWeight: 600 }}> How long can i stay in a room for?</strong>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel p="10px">
          <small>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </small>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem backgroundColor={"#e9dbcb"}>
        <h2>
          <AccordionButton
            cursor={"pointer"}
            bgColor="#e9dbcb"
            border={"none"}
            borderRadius={3}
            padding={"10px"}
          >
            <Box as="span" flex="1" textAlign="left">
              <strong  style={{ fontWeight: 600 }}>
                Do I get refunded if I cancel a Booking or if I am not satisfied
                with my lodging?
              </strong>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel p="10px">
          <small>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </small>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem backgroundColor={"#e9dbcb"}>
        <h2>
          <AccordionButton
            cursor={"pointer"}
            bgColor="#e9dbcb"
            border={"none"}
            borderRadius={3}
            padding={"10px"}
          >
            <Box as="span" flex="1" textAlign="left">
              <strong  style={{ fontWeight: 600 }}>How many people can stay in a Room</strong>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel  p="10px">
          <small>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </small>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQ;
