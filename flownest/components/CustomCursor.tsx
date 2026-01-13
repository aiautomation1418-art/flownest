import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Motion values for smooth tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring physics for smooth movement
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const mouseDown = () => setIsClicking(true);
    const mouseUp = () => setIsClicking(false);

    const checkHover = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const isClickable = 
            target.tagName === 'BUTTON' || 
            target.tagName === 'A' || 
            target.tagName === 'INPUT' || 
            target.tagName === 'TEXTAREA' ||
            target.closest('button') || 
            target.closest('a') || 
            target.onclick != null ||
            target.classList.contains('cursor-pointer') ||
            window.getComputedStyle(target).cursor === 'pointer';
            
        setIsHovering(!!isClickable);
    }

    // Add listeners
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);
    window.addEventListener('mouseover', checkHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
      window.removeEventListener('mouseover', checkHover);
    };
  }, [isVisible, cursorX, cursorY]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <>
      {/* Background Glow Layer (60px -> enlarges) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, #7C3AED 0%, #A855F7 50%, #E879F9 100%)",
          opacity: 0.3,
          filter: "blur(8px)" // Softens the glow edges for 3D depth
        }}
        animate={{
          width: isHovering ? 80 : 60,
          height: isHovering ? 80 : 60,
          scale: isClicking ? 0.9 : 1,
        }}
        transition={{
           type: "spring", stiffness: 400, damping: 25
        }}
      />

      {/* Foreground Cursor Layer (40px -> enlarges) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          background: "rgba(255, 255, 255, 0.05)", // Subtle glassy fill
          border: "1px solid rgba(255, 255, 255, 0.4)", // Thin definition ring
          backdropFilter: "blur(1px)"
        }}
        animate={{
          width: isHovering ? 50 : 40,
          height: isHovering ? 50 : 40,
          scale: isClicking ? 0.9 : 1,
        }}
        transition={{
           type: "spring", stiffness: 400, damping: 25
        }}
      >
        {/* Center Dot for precision */}
        <div className="w-1 h-1 bg-white rounded-full opacity-80" />
      </motion.div>
    </>
  );
};

export default CustomCursor;