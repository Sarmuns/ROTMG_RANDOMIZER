import { useState } from 'react';

export default function ClassSprite({ cls, size = 128 }) {
  const [imgError, setImgError] = useState(false);

  if (!cls) {
    return (
      <div
        className="sprite-placeholder empty"
        style={{ width: size, height: size }}
      />
    );
  }

  if (imgError) {
    return (
      <div
        className="sprite-placeholder"
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle at 40% 35%, ${cls.color}55, ${cls.bg})`,
          border: `3px solid ${cls.color}88`,
          boxShadow: `0 0 24px ${cls.color}44`,
        }}
      >
        <span
          style={{
            fontSize: size * 0.42,
            color: cls.color,
            textShadow: `0 0 16px ${cls.color}`,
            fontFamily: 'Georgia, serif',
            fontWeight: 'bold',
          }}
        >
          {cls.name[0]}
        </span>
      </div>
    );
  }

  return (
    <img
      src={`/sprites/${cls.name.toLowerCase()}.png`}
      alt={cls.name}
      width={size}
      height={size}
      className="class-sprite"
      style={{ imageRendering: 'pixelated' }}
      onError={() => setImgError(true)}
    />
  );
}
