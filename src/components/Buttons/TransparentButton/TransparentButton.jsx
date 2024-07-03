import PropTypes from "prop-types";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { Button } from "@mui/material";
const TransparentButton = ({ btnName }) => {
  return (
    <Button
      variant="outlined"
      endIcon={<CallMadeIcon />}
      sx={{
        color: "#020043",
        borderColor: "#343268",
        borderRadius: "12px",
        px: "28px",
        py: "8px",
        // Define styles for small devices
        "@media (max-width: 600px)": {
          px: "16px", // Adjust padding for small devices
          py: "4px", // Adjust padding for small devices
        },
      }}
    >
      {btnName}
    </Button>
  );
};

TransparentButton.propTypes = {
  btnName: PropTypes.string,
};

export default TransparentButton;
