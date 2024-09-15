import { Motion } from 'solid-motionone';
import { FiMoon, FiSun } from 'solid-icons/fi';
import { useDarkMode } from './darkMode';

const ToggleSwitch = () => {
    const [isDarkMode, { toggle }] = useDarkMode();

    return (
        <Motion.button
            class={`relative w-16 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                isDarkMode() ? 'bg-gray-700' : 'bg-blue-400'
            }`}
            onClick={toggle}
            aria-label={isDarkMode() ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            <Motion.div
                class="w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center"
                animate={{ x: isDarkMode() ? '100%' : '0%' }}
                transition={{ duration: 0.3 }}
            >
                {isDarkMode() ? (
                    <FiMoon class="text-gray-700" />
                ) : (
                    <FiSun class="text-yellow-500" />
                )}
            </Motion.div>
        </Motion.button>
    );
};

export default ToggleSwitch;
