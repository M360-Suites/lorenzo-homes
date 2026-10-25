const CRM_ENDPOINT = "https://crm-vertical-saas.onrender.com/api/v1/public/leads/inbound";
const CRM_KEY = "pk_live_14ad8e7ed20b24f62f0b053e8806aa7772484d973f6c11d2";

type Lead = Record<string, string>;

async function sendEmail(lead: Lead) {
  const res = await fetch("/api/resend", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || "Failed to send.");
}

// Same payload the crm360 capture.js script sent, but awaited so the form
// only reports success once the CRM has accepted the lead.
async function sendToCrm(lead: Lead) {
  const { hostname } = window.location;
  const res = await fetch(CRM_ENDPOINT, {
    method: "POST",
    headers: { Accept: "*/*", "Content-Type": "application/json" },
    body: JSON.stringify({
      key: CRM_KEY,
      source: hostname || "website",
      hostname,
      tags: "",
      ...lead,
    }),
  });
  if (!res.ok) throw new Error("Failed to send.");
}

export async function submitLead(lead: Lead) {
  await Promise.all([sendEmail(lead), sendToCrm(lead)]);
}
