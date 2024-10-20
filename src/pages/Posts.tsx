const Posts = () => {
    return (
        <div class="w-full min-h-screen h-full flex justify-center items-center p-8">
            <div class="rounded-3xl p-px bg-gradient-to-b from-roland-red to-transparent to-60%">
                <div
                    class={`bg-gradient-to-b from-gray-800 from-50% to-transparent bg-opacity-80 dark:bg-opacity-90 dark:backdrop-blur-sm p-10 ${'rounded-[calc(1.5rem-1px)]'}`}
                >
                    <h1 class="text-4xl font-bold mb-6 text-roland-red dark:text-roland-red-light">
                        Coming Soon...
                    </h1>
                    <p class="text-gray-700 dark:text-gray-300">
                        Exciting new content is on its way! Stay tuned for our upcoming posts that
                        will showcase the latest in web development and technology.
                    </p>
                    <div class="mt-8 flex gap-4 items-center">
                        <img
                            class="min-h-12 min-w-12 h-12 w-12 object-cover rounded-full"
                            src="/images/pfp.JPG"
                            alt="Profile"
                        />
                        <div>
                            <h3 class="text-lg font-medium text-gray-700 dark:text-white">
                                Simon Bernabeu
                            </h3>
                            <span class="text-sm tracking-wide text-gray-600 dark:text-gray-400">
                                Fullstack Developer
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Posts;
