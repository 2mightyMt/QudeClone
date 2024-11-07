window.onload = function () {
    // gnb 애니메이션
    const menuOpen = document.querySelector('.gnb .menuOpen');
    const menuBox = document.querySelector('.gnb .menuBox');

    menuOpen.addEventListener('click', () => {
        menuBox.classList.toggle('on');
    });

    gsap.registerPlugin(ScrollTrigger);

    // GSAP 타임라인 생성 및 scrollTrigger 설정
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.visual',
            start: '100% 100%',
            end: '100% 0%',
            scrub: 2,
            // markers: true,
        },
    });

    // 타임라인에 애니메이션 추가
    tl.to('.logoWrap #j', { x: -150, y: 250, rotate: 20, ease: 'none', duration: 5 }, 0)
        .to('.logoWrap #y', { x: -30, y: 150, rotate: -10, ease: 'none', duration: 5 }, 0)
        .to('.logoWrap #o', { x: 0, y: 400, rotate: -10, ease: 'none', duration: 5 }, 0)
        .to('.logoWrap #u', { x: 50, y: 300, rotate: 10, ease: 'none', duration: 5 }, 0)
        .to('.logoWrap #n', { x: 100, y: 100, rotate: -10, ease: 'none', duration: 5 }, 0)
        .to('.logoWrap #g', { x: 50, y: 450, rotate: 20, ease: 'none', duration: 5 }, 0);

    // 개별 요소에 애니메이션 및 스크롤 트리거 추가
    gsap.utils.toArray('.mainTextBox .title i').forEach((selector) => {
        gsap.to(selector, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: selector,
                start: '100% 100%',
                end: '100% 0%',
                scrub: 1,
                markers: true,
            },
        });
        gsap.fromTo(selector, { overflow: 'hidden', y: 150 }, { y: 0, ease: 'none', duration: 5 }, 0);
    });
};
