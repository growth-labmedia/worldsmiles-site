import { Link } from 'react-router-dom';

export interface ServiceTileData {
  name: string;
  caption: string;
  img: string;
  to: string;
}

/** Full-bleed photo tile. The whole card is the link. 2-up on mobile, 3-up on desktop (grid set by the parent). */
export default function ServiceTile({ name, caption, img, to }: ServiceTileData) {
  const inner = (
    <>
      <img src={img} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/5" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 p-3.5 md:p-5">
        <span className="block font-[Fraunces,Georgia,serif] text-white text-[1.125rem] md:text-[1.5rem] leading-[1.15] font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">{name}</span>
        <span className="mt-1 block text-white/85 text-[0.75rem] md:text-[0.875rem] leading-snug drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">{caption}</span>
      </div>
    </>
  );
  const cls = 'group relative block aspect-[4/3] rounded-xl overflow-hidden bg-[#0A0A0A] shadow-sm hover:shadow-lg transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2';
  return to.startsWith('#')
    ? <a href={to} className={cls} aria-label={name}>{inner}</a>
    : <Link to={to} className={cls} aria-label={name}>{inner}</Link>;
}

export function ServiceTileGrid({ tiles }: { tiles: ServiceTileData[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
      {tiles.map((tile) => <ServiceTile key={tile.name} {...tile} />)}
    </div>
  );
}
