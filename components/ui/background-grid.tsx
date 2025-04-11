import { cn } from "@/lib/utils";
import React from "react";
import { FlipWords } from "@/components/ui/footer-card";
import { Github, Mail, Linkedin, Instagram, Grid } from 'lucide-react';
export function GridBackgroundDemo() {
    return (
        <div className="relative flex h-[50rem] w-full items-center justify-center bg-dark dark:bg-black">
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:40px_40px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                )}
            />
            {/* Radial gradient for the container to give a faded look */}
            <div className="flex bg-black items-center justify-center w-full flex-col px-4">
                <h2
                    className="bg-clip-text text-transparent text-white text-center bg-gradient-to-b from-neutral-900 to-neutral-700 
      dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                    Let's <br />
                    <FlipWords
                        words={["Connect.", "Collaborate.", "Create.", "Build.", "Innovate."]}
                        duration={4000}
                        className="text-2xl md:text-4xl lg:text-7xl text-white font-bold"
                    />
                </h2>

                <div className="flex space-x-4 items-center p-4">
                    <a href="https://github.com/nashmglq" className="text-gray-800 hover:text-gray-600 transition-colors">
                        <Github size={54} />
                    </a>
                    <a href="mailto:nashmaglaqui9@gmail.com" className="text-red-600 hover:text-red-400 transition-colors">
                        <Mail size={54} />
                    </a>
                    <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" className="text-blue-700 hover:text-blue-500 transition-colors">
                        <Linkedin size={54} />
                    </a>
                    <a href="https://www.instagram.com/vn_shq/" className="text-pink-600 hover:text-pink-400 transition-colors">
                        <Instagram size={54} />
                    </a>
                </div>

            </div>

        </div>
    );
}
