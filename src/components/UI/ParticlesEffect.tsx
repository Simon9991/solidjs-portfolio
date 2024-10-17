import { createSignal, onMount, createEffect, type JSX, For } from "solid-js";
import { useDarkMode } from "./DarkMode";

interface Particle {
    x: number;
    y: number;
    z: number;
    vx: number;
    vy: number;
    vz: number;
    size: number;
}

function ParticleBackground() {
    let canvasRef: HTMLCanvasElement | undefined;
    const [size, setSize] = createSignal({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const [isDarkMode] = useDarkMode();

    let color = isDarkMode() ? "rgba(200, 200, 200" : "rgba(255, 255, 0";

    // When isDarkMode changes, update the color
    createEffect(() => {
        color = isDarkMode() ? "rgba(200, 200, 200" : "rgba(230, 75,53";
    });

    onMount(() => {
        const canvas = canvasRef;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const updateSize = () => {
            setSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener("resize", updateSize);

        const particleCount =
            window.innerWidth < 768 ? 40 : window.innerWidth < 1440 ? 75 : 100;
        const particles: Particle[] = [];
        const maxDepth = 5;
        const perspective = 800;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * size().width - size().width / 2,
                y: Math.random() * size().height - size().height / 2,
                z: Math.random() * maxDepth,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                vz: (Math.random() - 0.5) * 0.1,
                size: Math.random() * 2 + 1,
            });
        }

        function drawParticles() {
            if (!ctx) return;

            ctx.clearRect(0, 0, size().width, size().height);

            for (const particle of particles) {
                const scale = perspective / (perspective + particle.z);
                const x = particle.x * scale + size().width / 2;
                const y = particle.y * scale + size().height / 2;
                const particleSize = particle.size * scale;

                ctx.fillStyle = `${color} , ${1 - particle.z / maxDepth})`;
                ctx.beginPath();
                ctx.arc(x, y, particleSize, 0, Math.PI * 2);
                ctx.fill();

                particle.x += particle.vx * (1 - particle.z / maxDepth);
                particle.y += particle.vy * (1 - particle.z / maxDepth);
                particle.z += particle.vz;

                if (
                    particle.x < -size().width / 2 ||
                    particle.x > size().width / 2
                )
                    particle.vx *= -1;
                if (
                    particle.y < -size().height / 2 ||
                    particle.y > size().height / 2
                )
                    particle.vy *= -1;
                if (particle.z < 0 || particle.z > maxDepth) particle.vz *= -1;
            }
        }

        function drawLines() {
            if (!ctx) return;

            for (let i = 0; i < particles.length; i++) {
                const particleA = particles[i];
                for (let j = i + 1; j < particles.length; j++) {
                    const particleB = particles[j];
                    const dx = particleA.x - particleB.x;
                    const dy = particleA.y - particleB.y;
                    const dz = particleA.z - particleB.z;
                    const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

                    if (distance < 150) {
                        const scaleA =
                            perspective / (perspective + particleA.z);
                        const scaleB =
                            perspective / (perspective + particleB.z);
                        const x1 = particleA.x * scaleA + size().width / 2;
                        const y1 = particleA.y * scaleA + size().height / 2;
                        const x2 = particleB.x * scaleB + size().width / 2;
                        const y2 = particleB.y * scaleB + size().height / 2;

                        const averageDepth = (particleA.z + particleB.z) / 2;
                        const lineOpacity = 0.3 * (1 - averageDepth / maxDepth);

                        ctx.strokeStyle = `${color}, ${lineOpacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(x1, y1);
                        ctx.lineTo(x2, y2);
                        ctx.stroke();
                    }
                }
            }
        }

        let animationId: number;

        function animate() {
            drawParticles();
            drawLines();
            animationId = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", updateSize);
        };
    });

    createEffect(() => {
        if (canvasRef) {
            canvasRef.width = size().width;
            canvasRef.height = size().height;
        }
    });

    return (
        <canvas
            ref={canvasRef}
            class="fixed inset-0 w-full h-full dark:bg-gray-900 bg-[#F5F5F5]"
        />
    );
}

function Section(props: { children: JSX.Element; class?: string }) {
    const [isVisible, setIsVisible] = createSignal(false);
    let ref: HTMLDivElement | undefined;

    onMount(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 },
        );

        if (ref) {
            observer.observe(ref);
        }

        return () => {
            if (ref) {
                observer.unobserve(ref);
            }
        };
    });

    return (
        <div
            ref={ref}
            class={`min-h-screen flex items-center justify-center transition-all duration-1000 ${props.class || ""}`}
            classList={{
                "opacity-100 translate-y-0": isVisible(),
                "opacity-0 translate-y-10": !isVisible(),
                "translate-y-0": isVisible(),
            }}
        >
            {props.children}
        </div>
    );
}

export default function ScrollingParticlePage(props: {
    children: JSX.Element;
}) {
    return (
        <div class="relative">
            <ParticleBackground />
            <div class="relative z-10">{props.children}</div>
        </div>
    );
}
