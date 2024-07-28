import { TDrawerItem, UserRole } from "@/types";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import OfflineShareIcon from "@mui/icons-material/OfflineShare";
export const GenerateDrawerItems = (role: UserRole): TDrawerItem[] => {
  const roleMenus: TDrawerItem[] = [];

  switch ((role = "admin")) {
    case "admin":
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardCustomizeIcon,
        },
        {
          title: "Applicant Management",
          path: `${role}/manage-applicant`,
          icon: OfflineShareIcon,
        }
      );
      break;

    default:
      break;
  }

  return [...roleMenus];
};
