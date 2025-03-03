import { cn } from "../lib/utils";
import { Marquee } from "./magicui/marquee";

const reviews = [
  {
    name: "Trd. Ind",
    username: "@Dhruv",
    body: "Your Work is amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Delta x",
    username: "@Mr. Leo",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Mr.Ravi",
    username: "@ravi22",
    body: "This i truly wonderful and the prices are very reasonable.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Chat Sphere",
    username: "@Yagnesh",
    body: "This is beyond incredible. Never seen anything like it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Delta x",
    username: "@sxion.8",
    body: "Absolutely Amazing Work!",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Trd. Ind",
    username: "@Dhruv",
    body: "Your Work is amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-2xl border p-4 shadow-lg transition-all duration-300",
        "border-gray-800 bg-gray-900 hover:bg-gray-800",
        "dark:border-gray-700 dark:bg-gray-950 dark:hover:bg-gray-900"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img
          className="rounded-full border border-gray-700"
          width="40"
          height="40"
          alt={name}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold text-white">
            {name}
          </figcaption>
          <p className="text-xs text-gray-400">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-sm text-gray-300">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden  py-10">
      {/* First Marquee Row */}
      <Marquee pauseOnHover className="[--duration:15s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      {/* Second Marquee Row */}
      <Marquee reverse pauseOnHover className="[--duration:18s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      {/* Gradient Overlays for smooth transition */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-gray-950"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-gray-950"></div>
    </div>
  );
}
