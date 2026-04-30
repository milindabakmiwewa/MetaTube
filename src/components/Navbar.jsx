import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position: "sticky", background: '#1A0A2E', top: 0, justifyContent: "space-between", borderBottom: '1px solid #3B1F6B' }}>
    <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
      <Typography variant="h5" fontWeight="900" sx={{ color: '#fff', letterSpacing: 1 }}>
        Meta<span style={{ color: '#A855F7' }}>Tube</span>
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
