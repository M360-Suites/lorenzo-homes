"use client";
import { useState, useEffect, useRef } from "react";
import { useContactModal } from "./ContactModalContext";

const inputCls =
	"font-body text-[0.95rem] py-3 px-[14px] border border-stone-line rounded-lg bg-paper text-ink font-medium outline-none transition-all focus:border-brass focus:ring-2 focus:ring-brass/20 w-full";
const labelCls =
	"flex flex-col gap-[6px] text-[0.82rem] font-bold text-ink-soft";

export default function ContactModal() {
	const { open, closeModal } = useContactModal();

	const [fields, setFields] = useState({
		name: "",
		email: "",
		phone: "",
		interest: "Investing with Lorenzo Homes",
		message: "",
	});
	const [status, setStatus] = useState<
		"idle" | "loading" | "success" | "error"
	>("idle");
	const [errorMsg, setErrorMsg] = useState("");

	const set =
		(k: string) =>
		(
			e: React.ChangeEvent<
				HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
			>,
		) =>
			setFields((v) => ({ ...v, [k]: e.target.value }));

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!fields.name || !fields.email) {
			setErrorMsg("Please fill in your name and email.");
			setStatus("error");
			return;
		}
		setStatus("loading");
		setErrorMsg("");
		try {
			const res = await fetch("/api/resend", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ ...fields, source: "sales" }),
			});
			const data = await res.json();
			if (!res.ok) throw new Error(data.error || "Failed to send.");
			setStatus("success");
			setFields({
				name: "",
				email: "",
				phone: "",
				interest: "Investing with Lorenzo Homes",
				message: "",
			});
			setTimeout(() => setStatus("idle"), 6000);
		} catch (err: unknown) {
			const msg =
				err instanceof Error
					? err.message
					: "Something went wrong. Please try again.";
			setErrorMsg(msg);
			setStatus("error");
		}
	};

	// Close on Escape
	useEffect(() => {
		if (!open) return;
		const handler = (e: KeyboardEvent) => {
			if (e.key === "Escape") closeModal();
		};
		document.addEventListener("keydown", handler);
		return () => document.removeEventListener("keydown", handler);
	}, [open, closeModal]);

	// Lock body scroll
	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);

	// Focus trap — move focus into modal when it opens
	const firstInputRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
		if (open) setTimeout(() => firstInputRef.current?.focus(), 80);
	}, [open]);

	if (!open) return null;

	return (
		<div
			className="fixed inset-0 z-200 flex items-center justify-center p-4"
			role="dialog"
			aria-modal="true"
			aria-label="Book a free investment consultation"
		>
			{/* Backdrop */}
			<div
				className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
				onClick={closeModal}
				aria-hidden="true"
			/>

			{/* Panel */}
			<div className="relative bg-paper rounded-2xl shadow-2xl w-full max-w-[560px] max-h-[92vh] overflow-y-auto z-10 animate-fade-up">
				{/* Header */}
				<div className="flex items-start justify-between px-8 pt-8 pb-6 max-md:px-6 border-b border-stone-line">
					<div>
						<p className="eyebrow mb-2">
							<span className="eyebrow-line" />
							Lorenzo Homes
						</p>
						<h2 className="text-[1.55rem] text-ink m-0">
							Book a Free Investment Consultation
						</h2>
					</div>
					<button
						onClick={closeModal}
						aria-label="Close"
						className="shrink-0 ml-4 mt-1 w-8 h-8 flex items-center justify-center rounded-full border border-stone-line text-ink-soft hover:bg-stone hover:border-brass hover:text-brass transition-all cursor-pointer bg-transparent"
					>
						<svg
							viewBox="0 0 16 16"
							className="w-3.5 h-3.5"
							fill="none"
						>
							<path
								d="M3 3l10 10M13 3L3 13"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						</svg>
					</button>
				</div>

				{/* Form */}
				<form
					id="contact-form"
					onSubmit={handleSubmit}
					className="px-8 py-7 max-md:px-6"
					noValidate
				>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
						<label className={labelCls}>
							Full Name
							<input
								ref={firstInputRef}
								type="text"
								value={fields.name}
								onChange={set("name")}
								placeholder="Your name"
								required
								className={inputCls}
							/>
						</label>
						<label className={labelCls}>
							Email
							<input
								type="email"
								value={fields.email}
								onChange={set("email")}
								placeholder="you@email.com"
								required
								className={inputCls}
							/>
						</label>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
						<label className={labelCls}>
							Phone / WhatsApp
							<input
								type="tel"
								value={fields.phone}
								onChange={set("phone")}
								placeholder="+234"
								className={inputCls}
							/>
						</label>
						<label className={labelCls}>
							I&apos;m interested in
							<select
								value={fields.interest}
								onChange={set("interest")}
								className={inputCls}
							>
								<option>Investing with Lorenzo Homes</option>
								<option>Leasing a space</option>
								<option>Site inspection</option>
								<option>Partnership / Other</option>
							</select>
						</label>
					</div>

					<label className={`${labelCls} mb-6`}>
						Message{" "}
						<span className="font-normal normal-case">
							(optional)
						</span>
						<textarea
							value={fields.message}
							onChange={set("message")}
							rows={3}
							placeholder="Tell us what you're looking for"
							className={inputCls}
						/>
					</label>

					<button
						type="submit"
						disabled={status === "loading"}
						className="btn btn-solid btn-full rounded-lg"
					>
						{status === "loading" ? "Sending…" : "Send Enquiry"}
					</button>

					{status === "success" && (
						<p className="text-[0.85rem] font-bold mt-4 text-green-700">
							✓ Enquiry sent. We&apos;ll be in touch within one
							business day.
						</p>
					)}
					{status === "error" && errorMsg && (
						<p className="text-[0.85rem] font-bold mt-4 text-red-700">
							{errorMsg}
						</p>
					)}

					<p className="text-[0.78rem] text-ink-soft mt-5 m-0">
						No obligation. Our investment advisors respond within
						one business day.
					</p>
				</form>
			</div>
		</div>
	);
}
