import gsap from "gsap";

gsap.registerEffect({
    name: "translate",
    effect: (targets, config) => {
        return gsap.from(targets, { ...config, opacity: 0 })
    },
    default: { duration: 2 },
    extendTimeline: true
})