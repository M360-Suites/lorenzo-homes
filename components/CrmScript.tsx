import Script from "next/script";

export default function CrmScript() {
	return (
		<Script
			src="https://app.crm360online.com/capture.js"
			data-key="pk_live_14ad8e7ed20b24f62f0b053e8806aa7772484d973f6c11d2"
			data-selector="#contact-form"
			data-tags=""
			data-debug="false"
			strategy="afterInteractive"
		/>
	);
}
