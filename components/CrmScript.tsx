"use client";
import Script from "next/script";
import { usePathname } from "next/navigation";

const CRM_KEY = "pk_live_14ad8e7ed20b24f62f0b053e8806aa7772484d973f6c11d2";

// Leads from the sales (ads) landing page are tagged "ads"; it also has the final lead form.
const SALES_ROUTE = "/sales";

export default function CrmScript() {
	const isSales = usePathname() === SALES_ROUTE;

	return (
		<Script
			id={isSales ? "crm-capture-sales" : "crm-capture"}
			src="https://app.crm360online.com/capture.js"
			data-key={CRM_KEY}
			data-selector={isSales ? "#contact-form, #akron-lead-form" : "#contact-form"}
			data-tags={isSales ? "ads" : ""}
			data-debug="false"
			strategy="afterInteractive"
		/>
	);
}
