import PropTypes from "prop-types";
import { Box, FormControl, InputLabel, Input } from "@mui/material";

const InputField = ({ label, id, value, register, disabled, ...rest }) => {
  return (
    <FormControl sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <InputLabel
          htmlFor={id}
          sx={{
            minWidth: "100px",
            marginRight: "16px", // Ensure some space between label and input
            flexShrink: 0,
          }}
        >
          {label}
        </InputLabel>
        <Input
          sx={{
            flexGrow: 1,
            paddingLeft: "10px", // Adjust input padding to match label spacing
          }}
          type="text"
          id={id}
          disabled={disabled}
          defaultValue={value}
          {...register(id)}
          {...rest}
        />
      </Box>
    </FormControl>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  register: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  rest: PropTypes.object,
};

export default InputField;
