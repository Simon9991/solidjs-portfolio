import { FiArrowDown } from 'solid-icons/fi';
import { SiRust, SiCplusplus, SiJavascript } from 'solid-icons/si';

export default function AboutMe() {
    return (
        <section class="py-12">
            <div class="container mx-auto px-4 lg:max-w-5xl">
                <h2 class="text-4xl font-bold text-center text-roland-red dark:text-roland-red-light mb-6">
                    About Me
                </h2>
                <div class="grid md:flex md:flex-row gap-12 items-center bg-cassis-lavender-accent bg-opacity-5 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                    <div class="space-y-6">
                        <p class="text-lg text-hangul-gray dark:text-hangul-silver leading-relaxed flex flex-col gap-2">
                            <span>
                                As a passionate{' '}
                                <span class="font-semibold text-cassis-lavender-accent dark:text-cassis-lavender-dark-accent">
                                    full stack developer
                                </span>{' '}
                                with{' '}
                                <span class="font-semibold text-cassis-lavender-accent dark:text-cassis-lavender-dark-accent">
                                    international experience
                                </span>
                                , I bring a unique blend of technical expertise to every project.
                            </span>
                            <span>
                                My journey, from the charming streets of{' '}
                                <span class="font-semibold text-cassis-lavender-accent dark:text-cassis-lavender-dark-accent">
                                    Cassis
                                </span>{' '}
                                to the bustling tech scene of{' '}
                                <span class="font-semibold text-cassis-lavender-accent dark:text-cassis-lavender-dark-accent">
                                    South Korea
                                </span>
                                , has honed my skills in creating robust, scalable applications
                                using{' '}
                                <span class="font-semibold text-cassis-lavender-accent dark:text-cassis-lavender-dark-accent">
                                    cutting-edge technologies
                                </span>
                                .
                            </span>
                            <span>
                                I combine creativity with problem-solving to deliver{' '}
                                <span class="font-semibold text-cassis-lavender-accent dark:text-cassis-lavender-dark-accent">
                                    intuitive and user-friendly solutions
                                </span>
                                .
                            </span>
                        </p>
                    </div>
                    <div class="relative flex w-fit md:mx-0 md:ml-auto mx-auto">
                        <div class="w-64 h-64 mx-auto bg-white rounded-full overflow-hidden shadow-lg">
                            <img
                                src="/images/pfp.JPG"
                                alt="Profile"
                                class="w-full h-full object-cover"
                            />
                        </div>
                        <div class="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-lg">
                            <FiArrowDown class="w-7 h-7 text-roland-red dark:text-roland-red-light animate-bounce" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
