import "./App.css";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./components/theme";
import SideBar from "./components/SideBar";
import Grid from "@mui/material/Grid";
import Cards from "./components/Card";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import ActivityChart  from "./components/ActivityChart";
import OrderTable from "./components/OrderTable";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container>
        <Grid item xs="auto">
          <SideBar />
        </Grid>
        <Grid item xs>
          <NavBar />
          <Grid container>
            <Cards
              item
              xs="3"
              symbol={<AddShoppingCartRoundedIcon sx={{ color: "#3f51b5" }} />}
              text="Total Orders"
              number="75"
              percentage={3}
            />
            <Cards
              item
              xs="3"
              symbol={
                <AssignmentTurnedInRoundedIcon sx={{ color: "#009688" }} />
              }
              text="Total Delivered"
              number="70"
              percentage={3}
            />
            <Cards
              item
              xs="3"
              symbol={
                <DisabledByDefaultRoundedIcon sx={{ color: "#ff3d00" }} />
              }
              text="Total Cancelled"
              number="05"
              percentage={-3}
            />
            <Cards
              item
              xs="3"
              symbol={<MonetizationOnRoundedIcon sx={{ color: "#ec407a" }} />}
              text="Total Revenue"
              number="$12k"
              percentage={-3}
            />
          </Grid>
          <ActivityChart/>
          <OrderTable/>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
