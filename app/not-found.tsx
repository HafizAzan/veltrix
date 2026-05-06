import { RESOURCES } from "@/lib/resources";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-section-dark bg-[linear-gradient(color-mix(in_srgb,var(--color-text-primary)_3%,transparent)_1px,transparent_1px),linear-gradient(90deg,color-mix(in_srgb,var(--color-text-primary)_3%,transparent)_1px,transparent_1px)] bg-size-[60px_60px] px-5 py-10 text-text-primary sm:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--color-accent-primary)_8%,transparent)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
        <span className="block animate-[float_6s_ease-in-out_infinite_alternate] font-heading text-[38vw] font-extrabold leading-none text-[color-mix(in_srgb,var(--color-text-primary)_4%,transparent)] sm:text-[30vw]">
          404
        </span>
      </div>

      <section className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center rounded-[28px] border border-border-subtle bg-[color-mix(in_srgb,var(--color-bg-primary)_72%,transparent)] px-6 py-10 text-center shadow-[0_0_80px_color-mix(in_srgb,var(--color-accent-primary)_12%,transparent)] backdrop-blur-md sm:px-12 sm:py-12">
        {/* <svg
          className="mb-6 size-12 animate-[pulse-glow_2s_ease-in-out_infinite_alternate] text-accent-primary"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path d="M8 10L24 38L40 10H32L24 24L16 10H8Z" fill="currentColor" />
        </svg> */}

        <Image src={RESOURCES.VELTRIX_LOGO_SMALL} alt="Veltrix Software" width={100} height={100} />

        <span className="animate-[fade-up_0.6s_ease-out_0.1s_both] rounded-full border border-accent-primary/25 bg-accent-primary/10 px-4 py-2 font-body text-xs font-medium uppercase tracking-widest text-accent-primary">
          404 — Page Not Found
        </span>

        <h1 className="mt-6 animate-[fade-up_0.6s_ease-out_0.2s_both] font-heading text-[clamp(32px,5vw,56px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-text-primary">
          Looks like you&apos;ve entered the void.
        </h1>

        <p className="mt-4 max-w-[420px] animate-[fade-up_0.6s_ease-out_0.3s_both] font-body text-base font-normal leading-[1.70] text-text-secondary">
          This page doesn&apos;t exist — but your next great software project does.
        </p>

        <div className="mt-8 flex animate-[fade-up_0.6s_ease-out_0.4s_both] flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent-primary px-6 py-3 font-body text-sm font-medium leading-none text-text-dark transition-colors hover:bg-accent-hover"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:translate-x-[-3px]" strokeWidth={1.5} aria-hidden />
            Back to Home
          </Link>

          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border-medium bg-transparent px-6 py-3 font-body text-sm font-medium leading-none text-nav-link transition-colors hover:border-text-secondary hover:text-text-primary"
          >
            View Our Work
            <ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden />
          </Link>
        </div>

        <p className="mt-12 animate-[fade-up_0.6s_ease-out_0.5s_both] font-body text-[13px] font-light italic text-text-muted">
          Lost? We build software that always finds the way.
        </p>
      </section>
    </main>
  );
};

export default NotFound;
