import { FiCode, FiGlobe, FiCoffee } from 'solid-icons/fi';
import { SiRust, SiCplusplus, SiJavascript } from 'solid-icons/si';

export default function Greeting() {
    return (
        <div class="min-h-screen bg-transparent flex flex-col justify-center pt-24 md:pt-8 items-center p-8 text-center">
            <h1 class="text-5xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
                Bonjour! I am Simon
            </h1>
            <p class="text-2xl mb-4 text-gray-700 dark:text-gray-300">
                A French fullstack developer in South Korea
            </p>
            <div class="flex space-x-4 mb-6">
                <SiRust class="text-3xl text-orange-600" />
                <SiCplusplus class="text-3xl text-blue-600" />
                <SiJavascript class="text-3xl text-yellow-400" />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div class="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                    <FiCode class="text-4xl mb-2 text-indigo-500" />
                    <p class="text-gray-700 dark:text-gray-300">Fullstack Expertise</p>
                </div>
                <div class="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                    <FiGlobe class="text-4xl mb-2 text-green-500" />
                    <p class="text-gray-700 dark:text-gray-300">International Experience</p>
                </div>
                <div class="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                    <FiCoffee class="text-4xl mb-2 text-red-500" />
                    <p class="text-gray-700 dark:text-gray-300">Low-level Language Enthusiast</p>
                </div>
            </div>
            <p class="text-xl text-gray-600 dark:text-gray-400 animate-bounce">
                Scroll down to explore my tech universe!
            </p>
        </div>
    );
}
