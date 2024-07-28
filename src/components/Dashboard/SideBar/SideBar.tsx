import { UserRole } from "@/types";

import { GenerateDrawerItems } from "@/utils/DrawerItmes";
import { Box, Divider, Stack } from "@mui/material";
import List from "@mui/material/List";
import Link from "next/link";
import { useState } from "react";
import SideBarItems from "./SideBarItems";

function SideBar() {
  const [userRole, setUserRole] = useState("");

  return (
    <Box>
      <Stack
        sx={{
          py: 1,

          background: "#FFF",
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        component={Link}
        href="/"
      >
        {/* <Image src={assets.svgs.logo} width={40} height={40} alt="logo" />
         */}
        <h1 className=" font-bold sm:text-3xl text-2xl font-Rubik text-center mx-auto text-gray-700">
          <span className=" text-violet-700">Mars</span> <br />
          Quest
        </h1>
      </Stack>
      <Divider />
      <List>
        {GenerateDrawerItems(userRole as UserRole).map((item, index) => (
          <SideBarItems key={index} item={item} />
        ))}
      </List>
      <Divider />
    </Box>
  );
}

export default SideBar;
