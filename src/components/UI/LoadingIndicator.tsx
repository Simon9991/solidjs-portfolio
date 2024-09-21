import { Motion } from 'solid-motionone';

export default function LoadingIndicator() {
    return (
        <div class="flex justify-center items-center h-screen">
            <Motion.div
                animate={{
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    easing: 'linear',
                }}
                class="w-16 h-16 border-t-4 border-indigo-500 border-solid rounded-full"
            />
        </div>
    );
}
