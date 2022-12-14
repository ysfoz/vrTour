import React from "react";
import { Divider } from "@mui/material";

import "./style.css";
import Logo from "../assets/vr.png";

const DivederVr = () => {
  return (
    <div class="astrodivider">
      <div class="astrodividermask"></div>
      <span>
        <i>
          <img src={Logo} style={{ width: 40 }} />
        </i>
      </span>
    </div>
  );
};

const DivederMain = () => {
  return (
    <Divider textAlign="center" sx={{ marginBlock: 5 }}>
      {<img src={Logo} style={{ width: 40 }} />}
    </Divider>
  );
};

export { DivederMain, DivederVr };
