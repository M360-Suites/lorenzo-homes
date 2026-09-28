import Script from "next/script";
import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
	subsets: ["latin"],
	weight: "variable",
	style: ["normal", "italic"],
	variable: "--font-fraunces",
	display: "swap",
});

const manrope = Manrope({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"],
	variable: "--font-manrope",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Lorenzo Homes — Real Estate Development & Investment",
	description:
		"Lorenzo Homes is a real estate development and investment company delivering commercial, industrial and residential projects across Nigeria for over 25 years.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${fraunces.variable} ${manrope.variable}`}>
				<Header />
				{children}
				<Footer />
				<Script
					src="https://app.crm360online.com/capture.js"
					data-key="pk_live_221b0e243a551102efee037cf234a0b238472edd60fcb86f"
					data-selector="#contact-form"
					data-tags=""
					data-debug="false"
					strategy="afterInteractive"
				/>
			</body>
		</html>
	);
}
