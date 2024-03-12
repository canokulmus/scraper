import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";
import VuiBadge from "components/VuiBadge";

import { users } from "variables/users";

function Author({ image, name, email }) {
  return (
    <VuiBox display="flex" alignItems="center" px={1} py={0.5}>
      <VuiBox mr={2}>
        <VuiAvatar src={image} alt={name} size="sm" variant="rounded" />
      </VuiBox>
      <VuiBox display="flex" flexDirection="column">
        <VuiTypography variant="button" color="white" fontWeight="medium">
          {name}
        </VuiTypography>
        <VuiTypography variant="caption" color="text">
          {email}
        </VuiTypography>
      </VuiBox>
    </VuiBox>
  );
}

function Function({ job, org }) {
  return (
    <VuiBox display="flex" flexDirection="column">
      <VuiTypography variant="caption" fontWeight="medium" color="white">
        {job}
      </VuiTypography>
      <VuiTypography variant="caption" color="text">
        {org}
      </VuiTypography>
    </VuiBox>
  );
}

export default {
  columns: [
    { name: "fullname", align: "left" },
    { name: "function", align: "left" },
    { name: "status", align: "center" },
    { name: "auth", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: users.map((user) => ({

    fullname: <Author image={user.avatar} name={user.name} email={user.email} />,
    function: <Function job="Developer" org="SCRAPER" />,
    status: (
      <VuiBadge
        variant="standard"
        badgeContent="Active"
        color="success"
        size="xs"
        container
        sx={({ palette: { white, success }, borders: { borderRadius, borderWidth } }) => ({
          background: success.main,
          border: `${borderWidth[1]} solid ${success.main}`,
          borderRadius: borderRadius.md,
          color: white.main,
        })}
      />
    ),
    auth: (
      <VuiTypography variant="caption" color="white" fontWeight="medium">
        Authorized User
      </VuiTypography>
    ),
    action: (
      <VuiTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Edit
      </VuiTypography>
    ),
  })),
};
