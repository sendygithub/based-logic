import Link from "next/link";
import { TerminalSquare, ArrowUpRight, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative border-t border-border overflow-hidden bg-background pt-20 pb-10 mt-20">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6 w-fit hover:opacity-80 transition-opacity">
                            <div className="bg-primary text-primary-foreground p-2 rounded-xl">
                                <TerminalSquare size={24} strokeWidth={2.5} />
                            </div>
                            <span className="font-bold text-2xl tracking-tight">Logika.js</span>
                        </Link>
                        <p className="text-muted-foreground max-w-sm mb-8 text-lg">
                            Master JavaScript algorithms and logical thinking with an Awwwards-winning interactive experience.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-3 rounded-full border border-border hover:bg-primary/20 hover:text-primary transition-all interactive">
                                <Github size={20} />
                            </a>
                            <a href="#" className="p-3 rounded-full border border-border hover:bg-primary/20 hover:text-primary transition-all interactive">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="p-3 rounded-full border border-border hover:bg-primary/20 hover:text-primary transition-all interactive">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 text-foreground">Algorithms</h4>
                        <ul className="space-y-4">
                            <li><Link href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group w-fit interactive">Overview <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></Link></li>
                            <li><Link href="/dashboard/caridata" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group w-fit interactive">Search <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></Link></li>
                            <li><Link href="/dashboard/filtering" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group w-fit interactive">Filtering <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></Link></li>
                            <li><Link href="/dashboard/transformation" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group w-fit interactive">Transform <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 text-foreground">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors interactive">About Us</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors interactive">Careers</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors interactive">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors interactive">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Logika.js. Built with Next.js & Framer Motion.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>Designed for</span>
                        <span className="font-semibold text-foreground">Awwwards</span>
                    </div>
                </div>
            </div>

            {/* Background large text decorative */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-foreground/5 whitespace-nowrap pointer-events-none select-none -z-10">
                LOGIKA.JS
            </div>
        </footer>
    );
}
