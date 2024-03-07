import { Github } from "lucide-react";
import { ProjectCardProps } from "../components/Projects";
import { BodySubheading } from "../components/ui/BodySubheading";
import { Link } from "../components/ui/Link";

export const YTSampleGen = () => (
  <div className="space-y-3">
    <p>
      yt-sample-gen is a sampler that I created to solve the most frustrating
      problem for music producers: finding interesting sounds that haven't been
      used before. In music, using interesting splices of sounds in a way
      someone hasn't used before is a great way to add authenticity and
      personality to a song. Many producers may resort to public sound libraries
      or sample things they may hear in the wild, but what if there was a way to
      streamline this process? That's where I thought of the idea of
      yt-sample-gen, and using an already existing, public library to extract 10
      second sound bytes that are usuable directly.
    </p>
    <BodySubheading>Implementation details</BodySubheading>
    <p>
      Using <Link href="https://github.com/yt-dlp/yt-dlp">yt-dlp</Link>, I was
      able to create a Python script to randomly search through defined phrases.
      Once I created this basic script, I set out to make it into an API using
      Flask. I first stated with a simple endpoint, that a user could request
      and I respond when the generating is finished. However, this could take
      minutes at a time for a simple generation request (for custom search
      phrases).
    </p>
    <p>
      I created a queue system using{" "}
      <Link href="https://docs.celeryq.dev/en/stable/getting-started/introduction.html">
        celery
      </Link>
      , and <Link href="https://redis.com/">Redis</Link>. This allowed the long
      running tasks to be processed seperately from the main server, alleviating
      the pressure. It also gave a way to poll for status changes in the task,
      making the website more responsive.
    </p>
  </div>
);

export const ytSampleGenProps: ProjectCardProps = {
  title: "yt-sample-gen",
  description: <YTSampleGen />,
  summary:
    "A sampler for music producers. Generate interesting samples from the best library out there: YouTube!",
  imgSrc: "/img/stock-application-image.png",
  links: [
    {
      Icon: Github,
      title: "View GitHub repository",
      href: "https://github.com/mushfikurr/videocollab",
    },
  ],
  techStack: [
    { children: "React", href: "https://react.dev/" },
    { children: "Redis", href: "https://redis.com/" },
    {
      children: "Celery",
      href: "https://docs.celeryq.dev/en/stable/getting-started/introduction.html",
    },
    { children: "Flask", href: "https://flask.palletsprojects.com/en/3.0.x/" },
    { children: "FFmpeg", href: "https://ffmpeg.org/" },
  ],
};
