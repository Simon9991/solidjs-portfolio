import type { Dict } from './en';

export const dict: Dict = {
    greeting: {
        hello: 'Bonjour! 저는 씨몽입니다.',
        description: '프랑스의 우아함과 한국의 혁신을 결합하여 최첨단 애플리케이션을 구축합니다.',
        cards: {
            fullstack: '풀스택 전문가',
            international: '국제적 경험',
            lowLevel: '저수준 언어 애호가',
        },
        scrollDown: '아래로 스크롤하여 더 많은 정보를 알아보세요!',
    },
    aboutMe: {
        title: '저에 대해',
        description: [
            '{international}을 가진 열정적인 {fullstack}로서, 모든 프로젝트에 독특한 기술적 전문성을 제공합니다.',
            '{cassis}의 매력적인 거리에서 {southKorea}의 활기찬 기술 현장까지, 제 여정은 {cuttingEdge}를 사용하여 견고하고 확장 가능한 애플리케이션을 만드는 기술을 연마했습니다.',
            '창의성과 문제 해결 능력을 결합하여 {intuitiveSolutions}을 제공합니다.',
        ],
        fullstack: '풀스택 개발자',
        international: '국제적 경험',
        cassis: '카시스',
        southKorea: '한국',
        cuttingEdge: '최첨단 기술',
        intuitiveSolutions: '직관적이고 사용자 친화적인 솔루션',
    },
    techUniverse: {
        title: '내 프로젝트',
        projects: [
            {
                id: 'dyl-ecosystem',
                name: 'DoohYouLike 생태계',
                tags: ['Svelte', 'TailwindCSS', 'Rust', 'C#', 'React Native', 'Go'],
                description:
                    'DoohYouLike를 위한 종합적인 생태계 개발, 웹 프론트엔드(Svelte), 모바일 앱(React Native), 고성능 백엔드(Rust, Go, C#) 포함.',
            },
            {
                id: 'anti-cheating-tools',
                name: '안티치팅 도구',
                tags: ['Rust', '저수준'],
                description:
                    'Rust를 사용하여 강력한 안티치팅 도구 개발, 온라인 환경에서 공정한 게임플레이를 보장하기 위해 저수준 프로그래밍 기술 활용.',
            },
            {
                id: 'portfolio',
                name: '이 포트폴리오',
                tags: ['SolidJS', 'TailwindCSS'],
                description:
                    '효율적인 렌더링을 위해 SolidJS를, 간소화된 스타일링을 위해 TailwindCSS를 사용하여 반응형 및 현대적인 포트폴리오 웹사이트 제작.',
            },
            {
                id: 'chess-ai',
                name: '체스 AI',
                tags: ['C', 'C++', 'Rust'],
                description:
                    '여러 언어(C, C++, Rust)로 체스 AI 엔진을 구현하여 성능을 비교하고 언어별 최적화를 탐구.',
            },
            {
                id: 'address-fixer',
                name: '주소 수정기',
                tags: ['Rust', 'Google Maps API'],
                description:
                    'Google Maps API와 대조하여 주소를 검증하고 수정하는 Rust 유틸리티 생성, 위치 기반 서비스의 데이터 정확도 향상.',
            },
            {
                id: '3d-game-opengl',
                name: 'OpenGL을 사용한 3D 게임',
                tags: ['C', 'C++'],
                description:
                    'OpenGL을 사용하여 3D 게임 엔진을 처음부터 구축, 그래픽 프로그래밍 및 게임 개발 기초에 대한 숙련도 입증.',
            },
            {
                id: 'personal-terminal-shell',
                name: '개인 터미널 쉘',
                tags: ['C', 'C++'],
                description:
                    '쉘이 내부적으로 어떻게 작동하는지 더 자세히 알아보기 위해 bash를 기반으로 자체 터미널 쉘 제작.',
            },
        ],
    },

    // Contact Me
    contactMe: {
        title: '연락하기',
        form: {
            name: '이름',
            email: '이메일',
            message: '메시지',
            submit: '메시지 보내기',
        },
        getInTouch: '연락하세요',
        description: '질문이 있거나 단순히 연락하고 싶으시면 언제든 연락 주세요!',
        email: 'your.email@example.com',
        github: 'GitHub',
        linkedin: 'LinkedIn',
    },
};
