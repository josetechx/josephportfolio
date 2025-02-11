export const fadeIn = (direction, delay = 0) => {
    return {
        hidden: {
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 10 : direction === 'right' ? -10 : 0,
            opacity: 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            }
        }
    };
};

export const scaleUp = (delay = 0) => {
    return {
        hidden: { scale: 0.8, opacity: 0 },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 1.5,
                delay: delay,
                stiffness: 120,
            }
        }
    };
};

export const slideIn = (direction, delay = 0) => {
    return {
        hidden: {
            x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
            y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease: 'easeOut',
            }
        }
    };
};

export const rotateIn = (delay = 0) => {
    return {
        hidden: { rotate: -180, opacity: 0 },
        show: {
            rotate: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 1.5,
                delay: delay,
                stiffness: 100,
            }
        }
    };
};

export const bounceIn = (delay = 0) => {
    return {
        hidden: { scale: 0.3, opacity: 0 },
        show: {
            scale: [1.2, 0.9, 1],
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 1.8,
                delay: delay,
                stiffness: 150,
            }
        }
    };
};

export const staggerContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.3,
        }
    }
};

export const pulse = {
    hidden: { scale: 1 },
    show: {
        scale: [1, 1.05, 1],
        transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
        }
    }
};

export const wobble = {
    hidden: { rotate: 0 },
    show: {
        rotate: [0, 10, -10, 10, 0],
        transition: {
            duration: 1.5,
            ease: 'easeInOut',
        }
    }
};

export const flipIn = (delay = 0) => {
    return {
        hidden: { rotateY: -90, opacity: 0 },
        show: {
            rotateY: 0,
            opacity: 1,
            transition: {
                duration: 1.2,
                delay: delay,
                ease: 'easeOut',
            }
        }
    };
};

export const zoomIn = (delay = 0) => {
    return {
        hidden: { scale: 0.5, opacity: 0 },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1.2,
                delay: delay,
                ease: 'easeOut',
            }
        }
    };
};

export const fadeOut = {
    hidden: { opacity: 1 },
    show: {
        opacity: 0,
        transition: {
            duration: 1.2,
            ease: 'easeInOut',
        }
    }
};

export const shake = {
    hidden: { x: 0 },
    show: {
        x: [0, -10, 10, -10, 10, 0],
        transition: {
            duration: 0.8,
            ease: 'easeInOut',
        }
    }
};

export const floating = {
    hidden: { y: 0 },
    show: {
        y: [0, -10, 0, 10, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
        }
    }
};

export const heartbeat = {
    hidden: { scale: 1 },
    show: {
        scale: [1, 1.15, 1],
        transition: {
            duration: 1.2,
            repeat: Infinity,
            ease: 'easeInOut',
        }
    }
};

export const rollIn = (delay = 0) => {
    return {
        hidden: { rotateZ: -180, opacity: 0, x: -100 },
        show: {
            rotateZ: 0,
            x: 0,
            opacity: 1,
            transition: {
                duration: 1.2,
                delay: delay,
                ease: 'easeOut',
            }
        }
    };
};

export const slowRiseAndEnlarge = (delay = 0) => {
    return {
        hidden: { y: 100, scale: 0.5, opacity: 0 },
        show: {
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
                duration: 2,
                delay: delay,
                ease: 'easeOut',
            }
        }
    };
};