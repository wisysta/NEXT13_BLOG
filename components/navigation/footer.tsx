import React from "react";
import PaddingContainer from "../layout/padding-container";
import siteConfig from "@/config/site";
import Link from "next/link";
import SocialLink from "../elements/social-link";

const Footer = () => {
    return (
        <div className="py-6 border-t mt-10">
            <PaddingContainer>
                <div>
                    <h2 className="text-3xl font-bold">
                        {siteConfig.siteName}
                    </h2>
                    <p className="max-w-md mt-2 text-neutral-700">
                        {siteConfig.description}
                    </p>
                </div>
                {/* Social and Currently At */}
                <div className="flex flex-wrap justify-between gap-4 mt-6">
                    <div>
                        <div className="font-medium text-lg">
                            #exploretheworld
                        </div>
                        <div className="flex items-center gap-3 mt-2 text-neutral-600">
                            <SocialLink
                                platform="twitter"
                                link={siteConfig.socialLinks.twitter}
                            />
                            <SocialLink
                                platform="instagram"
                                link={siteConfig.socialLinks.instagram}
                            />
                            <SocialLink
                                platform="github"
                                link={siteConfig.socialLinks.github}
                            />
                            <SocialLink
                                platform="youtube"
                                link={siteConfig.socialLinks.youtube}
                            />
                            <SocialLink
                                platform="linkedin"
                                link={siteConfig.socialLinks.linkedin}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="text-sm text-neutral-400">
                            Currently At
                        </div>
                        <div className="bg-white shadow-md rounded-md px-3 py-2 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                            {siteConfig.currentlyAt}
                        </div>
                    </div>
                </div>
                {/* Bottom Section */}
                <div className="py-3 border-t flex items-center gap-4 flex-wrap justify-between mt-16 border-t">
                    <div className="text-sm text-neutral-400 ">
                        All right are reserved | CopyRight&nbsp;
                        {new Date().getFullYear()}
                    </div>
                    <div className="text-sm">
                        Made with love by
                        <Link
                            className="underline underline-offset-4"
                            href="https://twitter.com/markdev"
                        >
                            @markdev
                        </Link>
                    </div>
                </div>
            </PaddingContainer>
        </div>
    );
};

export default Footer;
