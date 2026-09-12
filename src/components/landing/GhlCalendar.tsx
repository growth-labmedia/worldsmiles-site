import { useGhlEmbedScript } from '../../lib/ghl';

interface GhlCalendarProps {
  calendarId: string;
  embedId: string;
  title: string;
  /** Keeps the widget above the fold on small phones before GHL's resize message arrives. */
  minHeight?: number;
  className?: string;
}

/** GHL booking widget, rendered as-is (no prefill). Same markup as the LP's original CalendarEmbed. */
export default function GhlCalendar({ calendarId, embedId, title, minHeight = 720, className = '' }: GhlCalendarProps) {
  useGhlEmbedScript();
  return (
    <div className={`w-full bg-[#fdfaf5] lg:bg-transparent rounded-xl shadow-lg lg:shadow-none p-4 lg:p-0 ${className}`}>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/booking/${calendarId}`}
        allow="payment"
        style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight }}
        scrolling="no"
        id={embedId}
        title={title}
        aria-label="Booking calendar"
      />
    </div>
  );
}
