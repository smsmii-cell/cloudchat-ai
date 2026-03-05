import { SitePage } from "../domains/websites/SitePage";
import { AuthBadge } from "../domains/auth/AuthBadge";

export function SiteRoute() {
  return (
    <>
      <SitePage />
      <AuthBadge />
    </>
  );
}
