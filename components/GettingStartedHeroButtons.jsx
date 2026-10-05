'use client';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';

export default function GettingStartedHeroButtons() {
    const [videoOpen, setVideoOpen] = useState(false);
    const [videoPlaying, setVideoPlaying] = useState(false);

    function closeModal() {
        setVideoOpen(false);
        setVideoPlaying(false);
    }

    return (
        <>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 w-full">
                <button
                    onClick={() => setVideoOpen(true)}
                    className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-[#00E6C3] hover:bg-white text-[#0A1428] text-base md:text-lg font-semibold rounded-2xl flex items-center justify-center gap-3 group transition-colors"
                >
                    <i className="fas fa-play"></i> Watch 60-Second Overview
                </button>
                <Link
                    href="/getting-started#steps"
                    className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-transparent border border-white/60 hover:border-[#00E6C3] hover:bg-white/5 text-white text-base md:text-lg font-semibold rounded-2xl flex items-center justify-center gap-2 transition-all"
                >
                    See the 3 Steps
                </Link>
            </div>

            {/* YouTube Video Modal — rendered via portal to center on screen */}
            {videoOpen && createPortal(
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm"
                    onClick={closeModal}
                >
                    <div
                        className="relative w-full max-w-4xl mx-4 aspect-video rounded-2xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-3 right-3 z-20 w-9 h-9 flex items-center justify-center bg-black/60 hover:bg-black rounded-full text-white text-lg transition-all"
                            aria-label="Close video"
                        >
                            <i className="fas fa-times"></i>
                        </button>

                        {videoPlaying ? (
                            /* Iframe – only loads after click */
                            <iframe
                                src="https://www.youtube.com/embed/jNdoSInTI8w?autoplay=1&rel=0"
                                title="HelpOne Getting Started: White-Glove Onboarding with Personal Support from the CEO"
                                className="w-full h-full"
                                allow="autoplay; encrypted-media; fullscreen"
                                allowFullScreen
                            />
                        ) : (
                            /* Thumbnail + play button */
                            <div className="relative w-full h-full cursor-pointer group" onClick={() => setVideoPlaying(true)}>
                                <img
                                    data-aos="zoom-in"
                                    src={`https://img.youtube.com/vi/jNdoSInTI8w/maxresdefault.jpg`}
                                    alt="Watch HelpOne 60-Second Overview"
                                    className="w-full h-full object-cover"
                                />
                                {/* Dark overlay */}
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                                {/* Play button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 rounded-full bg-[#00E6C3] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-200">
                                        <i className="fas fa-play text-[#0A1428] text-2xl ml-1"></i>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}
