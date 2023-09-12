import { Box, Typography } from "@mui/material";
import { ChildrenWithOtherProps } from "../common/types_interfaces";

const ChartWrapper = ({
  children,
  title,
  variant,
  sx,
}: ChildrenWithOtherProps) => {
  return (
    <Box sx={sx}>
      <Typography variant={variant}>{title}</Typography>
      {children}
    </Box>
  );
};

export default ChartWrapper;
