"use client";

import { useEffect, useMemo, useState } from "react";
import {
  MessageCircle,
  Phone,
  Copy,
  Calculator,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";
import {
  RATE_TABLE,
  FINISH_OPTIONS,
  TIMELINE_OPTIONS,
  serviceByKey,
  estimate,
  formatRand,
  estimateWhatsAppUrl,
  buildEstimateMessage,
  type ServiceKey,
  type CalculatorFields,
  type FinishValue,
  type TimelineValue,
} from "@/lib/quote";
import { COMPANY } from "@/lib/site-data";
import { useT } from "@/lib/lang-store";
import { useQuoteStore } from "@/lib/quote-store";
import { useToast } from "@/hooks/use-toast";
import Reveal from "@/components/site/reveal";

export default function QuoteCalculator() {
  const { toast } = useToast();
  const { t, lang } = useT();
  const preselected = useQuoteStore((s) => s.service);

  const [service, setService] = useState<ServiceKey>("building");
  const [size, setSize] = useState<number>(120);
  const [finish, setFinish] = useState<FinishValue>("standard");
  const [timeline, setTimeline] = useState<TimelineValue>("standard");
  const [areaIdx, setAreaIdx] = useState<number>(2);
  const [name, setName] = useState("");
  const [cell, setCell] = useState("");

  // When a service card elsewhere on the page preselects a service, honour it.
  // (Adjusting state during render — the React-recommended alternative to an effect.)
  const [lastPreselected, setLastPreselected] = useState<ServiceKey | null>(preselected);
  if (preselected !== lastPreselected) {
    setLastPreselected(preselected);
    if (preselected) {
      setService(preselected);
      const d = serviceByKey(preselected);
      setSize(d.presets[1] ?? d.presets[0]);
    }
  }

  const def = serviceByKey(service);
  const meta = t.servicesMeta[service];
  const hasRate = Boolean(def.rate);

  const area = t.calc.areas[areaIdx] ?? t.calc.areas[0];

  const fields: CalculatorFields = useMemo(
    () => ({ service, size, finish, timeline, area, name, cell }),
    [service, size, finish, timeline, area, name, cell],
  );

  const result = useMemo(
    () => estimate(service, size, finish, timeline),
    [service, size, finish, timeline],
  );

  const waHref = useMemo(
    () => estimateWhatsAppUrl(fields, lang),
    [fields, lang],
  );

  function changeService(key: ServiceKey) {
    setService(key);
    const d = serviceByKey(key);
    setSize(d.presets[1] ?? d.presets[0]);
  }

  function copySummary() {
    const text = buildEstimateMessage(fields, lang);
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast({
          title: t.calc.toastCopiedTitle,
          description: t.calc.toastCopiedDesc,
        });
      })
      .catch(() => {
        toast({
          title: t.calc.toastFailTitle,
          description: t.calc.toastFailDesc,
        });
      });
  }

  return (
    <section id="calculator" aria-labelledby="calculator-title" className="bg-ink-950 py-20 lg:py-28">
      <div className="wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="kicker justify-center text-brand-400">{t.calc.kicker}</p>
          <h2 id="calculator-title" className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
            {t.calc.heading}
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-400">
            {t.calc.text}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr,400px] lg:items-start">
            {/* FORM */}
            <form
              className="rounded-2xl bg-white p-6 shadow-xl sm:p-8"
              onSubmit={(e) => e.preventDefault()}
              aria-label={t.calc.formLabel}
            >
              {/* 1 — service */}
              <fieldset>
                <legend className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-ink-900">
                  <span className="flex size-6 items-center justify-center rounded-full bg-brand-600 text-xs text-white">1</span>
                  {t.calc.legendService}
                </legend>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {RATE_TABLE.map((s) => (
                    <label
                      key={s.key}
                      className={`flex min-h-11 cursor-pointer items-center justify-center rounded-lg border px-3 py-2.5 text-center text-sm font-medium transition-colors ${
                        service === s.key
                          ? "border-brand-600 bg-brand-50 text-brand-700 ring-2 ring-brand-600/30"
                          : "border-border text-ink-800 hover:border-brand-400"
                      }`}
                    >
                      <input
                        type="radio"
                        name="service"
                        value={s.key}
                        checked={service === s.key}
                        onChange={() => changeService(s.key)}
                        className="sr-only"
                      />
                      {t.servicesMeta[s.key].label}
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* 2 — size */}
              {hasRate && (
                <fieldset className="mt-7">
                  <legend className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-ink-900">
                    <span className="flex size-6 items-center justify-center rounded-full bg-brand-600 text-xs text-white">2</span>
                    {meta.sizeLabel}{" "}
                    <span className="font-medium normal-case text-muted-foreground">
                      ({meta.sizeUnit})
                    </span>
                  </legend>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <label className="sr-only" htmlFor="calc-size">
                      {meta.sizeLabel} {t.calc.sizeSrLabel} {meta.sizeUnit}
                    </label>
                    <input
                      id="calc-size"
                      type="number"
                      inputMode="numeric"
                      min={def.minSize}
                      value={size}
                      onChange={(e) => setSize(Number(e.target.value))}
                      className="input-field max-w-40"
                      aria-describedby="calc-size-hint"
                    />
                    <span id="calc-size-hint" className="text-sm text-muted-foreground">
                      {t.calc.min} {def.minSize} {meta.sizeUnit}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {def.presets.map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => setSize(p)}
                          aria-pressed={size === p}
                          className={`min-h-11 rounded-lg border px-3.5 text-sm font-semibold transition-colors ${
                            size === p
                              ? "border-brand-600 bg-brand-50 text-brand-700"
                              : "border-border bg-white text-ink-800 hover:border-brand-400"
                          }`}
                        >
                          {p} {meta.sizeUnit}
                        </button>
                      ))}
                    </div>
                  </div>
                </fieldset>
              )}

              {/* 3 — finish & timeline */}
              <fieldset className="mt-7">
                <legend className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-ink-900">
                  <span className="flex size-6 items-center justify-center rounded-full bg-brand-600 text-xs text-white">3</span>
                  {t.calc.legendFinish}
                </legend>
                <div className="mt-3 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p id="finish-label" className="mb-1.5 text-xs font-medium text-muted-foreground">
                      {t.calc.finishLabel}
                    </p>
                    <div role="radiogroup" aria-labelledby="finish-label" className="flex gap-2">
                      {FINISH_OPTIONS.map((o) => (
                        <button
                          key={o.value}
                          type="button"
                          role="radio"
                          aria-checked={finish === o.value}
                          onClick={() => setFinish(o.value)}
                          className={`min-h-11 flex-1 rounded-lg border px-3 text-sm font-semibold transition-colors ${
                            finish === o.value
                              ? "border-brand-600 bg-brand-50 text-brand-700"
                              : "border-border bg-white text-ink-800 hover:border-brand-400"
                          }`}
                        >
                          {t.calc.finish[o.value]}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p id="timeline-label" className="mb-1.5 text-xs font-medium text-muted-foreground">
                      {t.calc.timelineLabel}
                    </p>
                    <div role="radiogroup" aria-labelledby="timeline-label" className="flex gap-2">
                      {TIMELINE_OPTIONS.map((o) => (
                        <button
                          key={o.value}
                          type="button"
                          role="radio"
                          aria-checked={timeline === o.value}
                          onClick={() => setTimeline(o.value)}
                          className={`min-h-11 flex-1 rounded-lg border px-2 text-sm font-semibold transition-colors ${
                            timeline === o.value
                              ? "border-brand-600 bg-brand-50 text-brand-700"
                              : "border-border bg-white text-ink-800 hover:border-brand-400"
                          }`}
                        >
                          {t.calc.timeline[o.value]}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </fieldset>

              {/* 4 — area + contact */}
              <fieldset className="mt-7">
                <legend className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-ink-900">
                  <span className="flex size-6 items-center justify-center rounded-full bg-brand-600 text-xs text-white">4</span>
                  {t.calc.legendWhere}{" "}
                  <span className="font-medium normal-case text-muted-foreground">
                    {t.calc.optional}
                  </span>
                </legend>
                <div className="mt-3 grid gap-4 sm:grid-cols-3">
                  <div>
                    <label htmlFor="calc-area" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                      {t.calc.areaLabel}
                    </label>
                    <select
                      id="calc-area"
                      value={areaIdx}
                      onChange={(e) => setAreaIdx(Number(e.target.value))}
                      className="input-field"
                    >
                      {t.calc.areas.map((a, i) => (
                        <option key={a} value={i}>
                          {a}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="calc-name" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                      {t.calc.nameLabel} <span className="normal-case">{t.calc.optional}</span>
                    </label>
                    <input
                      id="calc-name"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="input-field"
                      placeholder={t.calc.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="calc-cell" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                      {t.calc.cellLabel} <span className="normal-case">{t.calc.optional}</span>
                    </label>
                    <input
                      id="calc-cell"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      value={cell}
                      onChange={(e) => setCell(e.target.value)}
                      className="input-field"
                      placeholder={t.calc.cellPlaceholder}
                    />
                  </div>
                </div>
              </fieldset>
            </form>

            {/* ESTIMATE PANEL */}
            <aside
              className="rounded-2xl border border-white/10 bg-ink-900 p-6 text-white shadow-xl lg:sticky lg:top-24 sm:p-8"
              aria-label={t.calc.panelLabel}
            >
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-400">
                <Calculator className="size-4" aria-hidden />
                {t.calc.panelLabel}
              </p>

              <div aria-live="polite" className="mt-4">
                {hasRate ? (
                  <>
                    <p className="font-heading text-3xl font-extrabold leading-tight sm:text-4xl">
                      {formatRand(result.low)}
                    </p>
                    <p className="mt-1 font-heading text-xl font-semibold text-zinc-400">
                      {t.calc.upTo}&nbsp;
                      <span className="text-brand-400">{formatRand(result.high)}</span>
                    </p>
                    <p className="mt-3 text-sm text-zinc-400">
                      {formatRand(def.rate!.low)} – {formatRand(def.rate!.high)}{" "}
                      {meta.perUnit} · {meta.label}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="font-heading text-3xl font-extrabold leading-tight sm:text-4xl">
                      {t.calc.customQuote}
                    </p>
                    <p className="mt-3 text-sm text-zinc-400">{meta.note}</p>
                  </>
                )}
              </div>

              <p className="mt-5 flex gap-2 rounded-lg bg-white/5 p-3 text-xs leading-relaxed text-zinc-400">
                <AlertCircle className="mt-0.5 size-4 shrink-0 text-brand-400" aria-hidden />
                {t.calc.disclaimer}
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-base"
                >
                  <MessageCircle className="size-5" aria-hidden />
                  {t.calc.sendWa}
                </a>
                <div className="grid grid-cols-2 gap-3">
                  <a href={`tel:${COMPANY.phoneTel}`} className="btn-outline-dark w-full">
                    <Phone className="size-4" aria-hidden />
                    {t.calc.callUs}
                  </a>
                  <button type="button" onClick={copySummary} className="btn-outline-dark w-full">
                    <Copy className="size-4" aria-hidden />
                    {t.calc.copySummary}
                  </button>
                </div>
              </div>

              <p className="mt-6 flex items-center gap-2 text-xs text-zinc-500">
                <ShieldCheck className="size-4 text-brand-400" aria-hidden />
                {t.calc.goesTo} {COMPANY.phoneDisplay} — {t.hours}
              </p>
            </aside>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
