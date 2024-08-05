import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import theme from "./theme";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { styled } from '@mui/material/styles';

const Percentage = styled(Typography)(({  isPositive }) => ({
  color: isPositive ? '#4caf50' : '#f44336',
}));


export default function Cards({ symbol, text, number, percentage }) {
  
  const isPositive = percentage >= 0;

  return (
    <Card
      sx={{
        maxWidth: 195,
        margin: 1,
        backgroundColor: theme.palette.custom.main,
        padding: 2,
        width: "20%",
        marginTop: 2,
        marginLeft: 2,
      }}
    >
      <IconButton>{symbol}</IconButton>
      <CardContent>
        <Typography gutterBottom component="div" sx={{ color: "white", fontSize: "10px" }}>
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{display:"flex", justifyContent:"space-between"}}>
        <Typography sx={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
          {number}
        </Typography>
        <Percentage isPositive={isPositive}>
          {isPositive ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          {Math.abs(percentage)}%
        </Percentage>
      </CardActions>
    </Card>
  );
}
