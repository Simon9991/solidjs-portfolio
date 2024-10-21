import type { JSX } from 'solid-js';

export type CardProps = {
    icon?: JSX.Element;
    title?: string;
    description?: string;
};

export default function Card({ icon, title, description }: CardProps) {
    return (
        <div class="relative overflow-hidden bg-white dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div class="absolute inset-0 bg-gradient-to-br from-roland-red-light to-cassis-lavender-accent opacity-10 dark:opacity-20" />
            <div class="relative p-6 flex flex-col items-center">
                {icon && (
                    <div class="text-5xl mb-4 text-roland-red dark:text-roland-red-light">
                        {icon}
                    </div>
                )}
                {title && (
                    <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-hangul-silver">
                        {title}
                    </h3>
                )}
                {description && (
                    <p class="text-gray-600 text-center dark:text-hangul-silver-accent">
                        {description}
                    </p>
                )}
                <div class="mt-4 w-12 h-1 bg-roland-red dark:bg-roland-red-light rounded-full" />
            </div>
        </div>
    );
}
