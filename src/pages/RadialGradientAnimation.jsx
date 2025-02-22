import { useEffect, useState } from "react";

export default function RadialGradientAnimation() {
  const [gradient, setGradient] = useState("");

  const colors = [
    [8, 6, 23], 
    [168, 93, 188], 
  ];

  let step = 0;
  let colorIndices = [0, 1];
  const gradientSpeed = 0.0015;

  const updateGradient = () => {
    const c0_0 = colors[colorIndices[0]];
    const c0_1 = colors[colorIndices[1]];

    const istep = 1 - step;
    const r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    const g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    const b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    const color1 = `#${((r1 << 16) | (g1 << 8) | b1)
      .toString(16)
      .padStart(6, "0")}`;

    const r2 = Math.round(istep * c0_1[0] + step * c0_0[0]);
    const g2 = Math.round(istep * c0_1[1] + step * c0_0[1]);
    const b2 = Math.round(istep * c0_1[2] + step * c0_0[2]);
    const color2 = `#${((r2 << 16) | (g2 << 8) | b2)
      .toString(16)
      .padStart(6, "0")}`;

    setGradient(`radial-gradient(circle at center, ${color1} -10%, ${color2})`);

    step += gradientSpeed;
    if (step >= 1) {
      step %= 1;
      colorIndices[0] = colorIndices[1];
      colorIndices[1] = (colorIndices[1] + 1) % colors.length;
    }
  };

  useEffect(() => {
    const interval = setInterval(updateGradient, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{ background: gradient }}
    ></div>
  );
}
