"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { LanguageSwitcher } from "@/components/language-switcher";
import { DemoModal } from "@/components/demo-modal";
import { useLanguage } from "@/lib/language-context";
import {
  Activity,
  Zap,
  FileText,
  TrendingUp,
  Bell,
  BarChart3,
  ArrowRight,
  Factory,
  ChevronRight,
  Play,
  Shield,
  Clock,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [machines, setMachines] = useState(50);
  const [downtime, setDowntime] = useState(15);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const calculateSavings = () => {
    const avgCostPerMachine = 50000;
    const downtimeReduction = 0.6;
    const savings = machines * avgCostPerMachine * (downtime / 100) * downtimeReduction;
    return Math.round(savings);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar onOpenDemoModal={() => setDemoModalOpen(true)} />
      <HeroSection onOpenDemoModal={() => setDemoModalOpen(true)} />
      <SocialProof />
      <ValueProposition />
      <FeatureDeepDive />
      <ROICalculator
        machines={machines}
        setMachines={setMachines}
        downtime={downtime}
        setDowntime={setDowntime}
        calculateSavings={calculateSavings}
      />
      <CTASection onOpenDemoModal={() => setDemoModalOpen(true)} />
      <Footer />
      <DemoModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </div>
  );
}

function Navbar({ onOpenDemoModal }: { onOpenDemoModal: () => void }) {
  const { t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Factory className="h-8 w-8 text-blue-500" />
            <span className="text-2xl font-bold text-white">IoTrack</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="text-slate-300 hover:text-white transition-colors">
              {t.nav.solutions}
            </a>
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">
              {t.nav.features}
            </a>
            <a href="#roi" className="text-slate-300 hover:text-white transition-colors">
              {t.nav.roi}
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Button onClick={onOpenDemoModal} className="bg-blue-500 hover:bg-blue-600 text-white">
              {t.nav.bookDemo}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function HeroSection({ onOpenDemoModal }: { onOpenDemoModal: () => void }) {
  const { t } = useLanguage();

  const handleGetQuote = () => {
    window.location.href = "mailto:support@medrontech.com?subject=Teklif Talebi - IoTrack MES";
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
            <CheckCircle2 className="h-4 w-4 text-blue-400" />
            <span className="text-sm text-blue-300">{t.hero.badge}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t.hero.title}{" "}
            <span className="text-gradient">{t.hero.titleHighlight}</span>
          </h1>

          <p className="text-xl text-slate-400 mb-10 leading-relaxed">
            {t.hero.subtitle}
            <br />
            {t.hero.subtitleLine2}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={handleGetQuote}
              className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-6"
            >
              {t.hero.getQuote}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onOpenDemoModal}
              className="border-slate-700 text-white hover:bg-slate-800 text-lg px-8 py-6"
            >
              <Play className="mr-2 h-5 w-5" />
              {t.hero.watchVideo}
            </Button>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="glass-card glow-blue rounded-2xl p-2 transform hover:scale-[1.02] transition-transform duration-500">
            <div className="aspect-video bg-slate-800 rounded-xl overflow-hidden relative">
              <Image
                src="/mes-dashboard.png"
                alt="MES Dashboard"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const { t } = useLanguage();
  const logos = [
    { src: "/companies/kosgeb.png", alt: "KOSGEB" },
    { src: "/companies/sanayi.png", alt: "T.C. Sanayi ve Teknoloji Bakanlığı" },
    { src: "/companies/teb.png", alt: "TEB" },
    { src: "/companies/teknopark.png", alt: "Yıldız Teknopark" },
    { src: "/companies/tubitak.png", alt: "TÜBİTAK" },
    { src: "/companies/ytu.png", alt: "Yıldız Teknik Üniversitesi" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-slate-500 text-sm mb-8 uppercase tracking-wider">
          {t.socialProof.title}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="relative h-12 w-32 opacity-80 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueProposition() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Activity,
      title: t.valueProps.oee.title,
      description: t.valueProps.oee.description,
    },
    {
      icon: Zap,
      title: t.valueProps.predictive.title,
      description: t.valueProps.predictive.description,
    },
    {
      icon: FileText,
      title: t.valueProps.paperless.title,
      description: t.valueProps.paperless.description,
    },
  ];

  return (
    <section id="solutions" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.valueProps.title}
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {t.valueProps.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="glass-card p-8 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="bg-blue-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <value.icon className="h-7 w-7 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-slate-400 leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureDeepDive() {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.features.title}
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          <Card className="glass-card p-8 md:col-span-2 lg:row-span-2 group hover:border-blue-500/50 transition-all">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{t.features.visualTracking.title}</h3>
                <p className="text-slate-400 mb-6">
                  {t.features.visualTracking.description}
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-400 flex-shrink-0" />
            </div>
            <div className="aspect-video bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 relative">
              <Image
                src="/uretim-takip.png"
                alt="Line Efficiency Tracking"
                fill
                className="object-cover"
              />
            </div>
          </Card>

          <Card className="glass-card p-8 group hover:border-blue-500/50 transition-all">
            <Bell className="h-8 w-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">{t.features.alerts.title}</h3>
            <p className="text-slate-400">
              {t.features.alerts.description}
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-slate-300">{t.features.alerts.machineDown}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                <span className="text-slate-300">{t.features.alerts.qualityCheck}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-slate-300">{t.features.alerts.targetMet}</span>
              </div>
            </div>
          </Card>

          <Card className="glass-card p-8 group hover:border-blue-500/50 transition-all">
            <BarChart3 className="h-8 w-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">{t.features.reporting.title}</h3>
            <p className="text-slate-400 mb-6">
              {t.features.reporting.description}
            </p>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-400">{t.features.reporting.oeeScore}</span>
                <span className="text-lg font-bold text-blue-400">84.5%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "84.5%" }} />
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-sm text-slate-400">{t.features.reporting.efficiency}</span>
                <span className="text-sm font-semibold text-green-400">{t.features.reporting.vsLastWeek}</span>
              </div>
            </div>
          </Card>

          <Card className="glass-card p-8 md:col-span-2 group hover:border-blue-500/50 transition-all">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{t.features.workOrder.title}</h3>
                <p className="text-slate-400">
                  {t.features.workOrder.description}
                </p>
              </div>
              <FileText className="h-8 w-8 text-blue-400 flex-shrink-0" />
            </div>
            <div className="aspect-[2/1] bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 relative">
              <Image
                src="/is-emri-takip.png"
                alt="Work Order Tracking"
                fill
                className="object-cover"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function ROICalculator({
  machines,
  setMachines,
  downtime,
  setDowntime,
  calculateSavings,
}: {
  machines: number;
  setMachines: (value: number) => void;
  downtime: number;
  setDowntime: (value: number) => void;
  calculateSavings: () => number;
}) {
  const { t } = useLanguage();

  return (
    <section id="roi" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="glass-card glow-blue p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{t.roi.title}</h2>
            <p className="text-slate-400 text-lg">
              {t.roi.subtitle}
            </p>
          </div>

          <div className="space-y-10">
            <div>
              <div className="flex justify-between mb-4">
                <label className="text-white font-semibold">{t.roi.machines}</label>
                <span className="text-blue-400 font-bold text-xl">{machines}</span>
              </div>
              <Slider
                value={[machines]}
                onValueChange={(value) => setMachines(value[0])}
                max={200}
                min={10}
                step={10}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-slate-500 mt-2">
                <span>10</span>
                <span>200</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-4">
                <label className="text-white font-semibold">{t.roi.downtime}</label>
                <span className="text-blue-400 font-bold text-xl">{downtime}%</span>
              </div>
              <Slider
                value={[downtime]}
                onValueChange={(value) => setDowntime(value[0])}
                max={40}
                min={5}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-slate-500 mt-2">
                <span>5%</span>
                <span>40%</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-2 border-blue-500/30 rounded-2xl p-8 text-center">
              <p className="text-slate-400 mb-2 text-sm uppercase tracking-wider">
                {t.roi.savings}
              </p>
              <p className="text-6xl font-bold text-gradient mb-4">
                ${calculateSavings().toLocaleString()}
              </p>
              <p className="text-slate-400 text-sm">
                {t.roi.savingsNote}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 rounded-xl bg-slate-800/50">
                <Shield className="h-6 w-6 text-green-400 mx-auto mb-2" />
                <p className="text-sm text-slate-400">{t.roi.stat1}</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-slate-800/50">
                <Clock className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <p className="text-sm text-slate-400">{t.roi.stat2}</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-slate-800/50">
                <TrendingUp className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                <p className="text-sm text-slate-400">{t.roi.stat3}</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

function CTASection({ onOpenDemoModal }: { onOpenDemoModal: () => void }) {
  const { t } = useLanguage();

  const handleGetQuote = () => {
    window.location.href = "mailto:support@medrontech.com?subject=Teklif Talebi - IoTrack MES";
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {t.cta.title}
        </h2>
        <p className="text-xl text-slate-400 mb-10">
          {t.cta.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={handleGetQuote}
            className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-10 py-6"
          >
            {t.cta.getQuote}
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={onOpenDemoModal}
            className="border-slate-700 text-white hover:bg-slate-800 text-lg px-10 py-6"
          >
            {t.cta.scheduleDemo}
          </Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Factory className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold text-white">IoTrack</span>
            </div>
            <p className="text-slate-400 text-sm">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.product}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="text-slate-400 hover:text-white transition-colors">
                  {t.footer.features}
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  {t.footer.caseStudies}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.company}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.medronteknoloji.com/#about_id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {t.footer.about}
                </a>
              </li>
              <li>
                <a
                  href="https://www.medronteknoloji.com/#news_id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {t.footer.careers}
                </a>
              </li>
              <li>
                <a
                  href="https://www.medronteknoloji.com/#contact_id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {t.footer.contact}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
