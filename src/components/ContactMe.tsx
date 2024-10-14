import { createSignal } from 'solid-js';
import { FiMail, FiGithub, FiLinkedin } from 'solid-icons/fi';
import { useTranslation } from '../hooks/useTranslation';

export default function ContactMe() {
    const { t } = useTranslation();
    const [name, setName] = createSignal('');
    const [email, setEmail] = createSignal('');
    const [message, setMessage] = createSignal('');
    const [status, setStatus] = createSignal<'initial' | 'sending' | 'success' | 'error'>(
        'initial',
    );

    const handleSubmit = async (e: Event) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('/.netlify/functions/send-email', {
                method: 'POST',
                body: JSON.stringify({ name: name(), email: email(), message: message() }),
            });

            if (response.ok) {
                setStatus('success');
                // Reset form fields
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus('error');
        }
    };

    return (
        <section class="min-h-[100dvh] flex justify-center items-center">
            <div class="container mx-auto px-4 lg:max-w-5xl">
                <h2 class="text-5xl font-bold text-center text-roland-red dark:text-roland-red-light mb-12">
                    {t('contactMe.title')}
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 bg-cassis-lavender-accent bg-opacity-5 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
                    <div>
                        <form onSubmit={handleSubmit} class="space-y-4">
                            <div>
                                <label
                                    for="name"
                                    class="block text-hangul-gray dark:text-hangul-silver mb-2"
                                >
                                    {t('contactMe.form.name')}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name()}
                                    onInput={(e) => setName(e.currentTarget.value)}
                                    required
                                    class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-hangul-gray dark:text-hangul-silver hover:border-roland-red dark:hover:border-roland-red-light transition-all duration-300"
                                />
                            </div>
                            <div>
                                <label
                                    for="email"
                                    class="block text-hangul-gray dark:text-hangul-silver mb-2"
                                >
                                    {t('contactMe.form.email')}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email()}
                                    onInput={(e) => setEmail(e.currentTarget.value)}
                                    required
                                    class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-hangul-gray dark:text-hangul-silver hover:border-roland-red dark:hover:border-roland-red-light transition-all duration-300"
                                />
                            </div>
                            <div>
                                <label
                                    for="message"
                                    class="block text-hangul-gray dark:text-hangul-silver mb-2"
                                >
                                    {t('contactMe.form.message')}
                                </label>
                                <textarea
                                    id="message"
                                    value={message()}
                                    onInput={(e) => setMessage(e.currentTarget.value)}
                                    required
                                    rows={4}
                                    class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-hangul-gray dark:text-hangul-silver hover:border-roland-red dark:hover:border-roland-red-light transition-all duration-300"
                                />
                            </div>
                            <button
                                type="submit"
                                class="bg-roland-red hover:bg-roland-red-light text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-roland-red"
                                disabled
                            >
                                {t('contactMe.form.submit')}{' '}
                                <span class="italic">(Coming Soon)</span>
                            </button>
                            {status() === 'success' && <p class="text-green-600">Message sent.</p>}
                            {status() === 'error' && <p class="text-red-600">An error occured.</p>}
                        </form>
                    </div>
                    <div class="flex flex-col justify-center">
                        <div class="mb-8">
                            <h3 class="text-2xl font-semibold text-hangul-gray dark:text-hangul-silver mb-4">
                                {t('contactMe.getInTouch')}
                            </h3>
                            <p class="text-hangul-gray dark:text-hangul-silver mb-4">
                                {t('contactMe.description')}
                            </p>
                        </div>
                        <div class="space-y-4">
                            <div class="flex items-center">
                                <FiMail class="w-6 h-6 text-roland-red dark:text-roland-red-light mr-4" />
                                <a
                                    href="mailto:your.email@example.com"
                                    class="text-hangul-gray dark:text-hangul-silver hover:text-roland-red dark:hover:text-roland-red-light transition-colors duration-300"
                                >
                                    simonbernabeu@outlook.com
                                </a>
                            </div>
                            <div class="flex items-center">
                                <FiGithub class="w-6 h-6 text-roland-red dark:text-roland-red-light mr-4" />
                                <a
                                    href="https://github.com/Simon9991"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="text-hangul-gray dark:text-hangul-silver hover:text-roland-red dark:hover:text-roland-red-light transition-colors duration-300"
                                >
                                    Simon9991
                                </a>
                            </div>
                            <div class="flex items-center">
                                <FiLinkedin class="w-6 h-6 text-roland-red dark:text-roland-red-light mr-4" />
                                <a
                                    href="/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="text-hangul-gray dark:text-hangul-silver hover:text-roland-red dark:hover:text-roland-red-light transition-colors duration-300"
                                >
                                    <span class="italic">Coming Soon</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
