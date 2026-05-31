import { useState } from 'react';

export default function DungeonSprite({ dungeon, size = 96 }) {
  const [imgError, setImgError] = useState(false);

  if (!dungeon) {
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
          background: `radial-gradient(circle at 40% 35%, ${dungeon.color}55, ${dungeon.bg})`,
          border: `3px solid ${dungeon.color}88`,
          boxShadow: `0 0 24px ${dungeon.color}44`,
        }}
      >
        <span
          style={{
            fontSize: size * 0.38,
            color: dungeon.color,
            textShadow: `0 0 16px ${dungeon.color}`,
            fontFamily: 'Georgia, serif',
            fontWeight: 'bold',
          }}
        >
          {dungeon.name[0]}
        </span>
      </div>
    );
  }

  return (
    <img
      src={`/portals/${dungeon.slug}.png`}
      alt={dungeon.name}
      width={size}
      height={size}
      className="dungeon-sprite"
      style={{ imageRendering: 'pixelated' }}
      onError={() => setImgError(true)}
    />
  );
}
