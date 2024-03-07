import { Github } from "lucide-react";
import { ProjectCardProps } from "../components/Projects";
import { BodySubheading } from "../components/ui/BodySubheading";
import { Link } from "../components/ui/Link";

export const CollaborativeVideoEditing = () => (
  <div className="space-y-3">
    <p>
      VideoCollab is an application that started out as an experiment inspired
      by software such as <Link href="https://zed.dev/">Zed</Link> or{" "}
      <Link href="https://docs.google.com">Google Docs</Link>. I wondered if
      video editing could benefit from a multiplayer environment, and if it was
      even possible - provided videos can be large files with complex file
      formats.
    </p>
    <BodySubheading>Implementation details</BodySubheading>
    <p>
      Using FFmpeg as the driver for actual video editing, I was able to break
      every video editing action a user could perform into a command-line input
      into FFmpeg on a single server. After every action, a preview video is
      generated, which was streamed back into every client.
    </p>
    <p>
      I ran into several problems trying to synchronise every action using this
      server heavy approach, and as all users had to wait for the processing of
      the video to be done, this led to a very slow experience for all clients.
      Another problem I faced was the fact that all assets were stored on the
      server. Storing video files on the server can become expensive, and
      downloading/uploading these files can take a while for every user that
      joins (depending on network connection). I am currently in the process of
      rewriting this project, with a focus on bringing more of the processing
      efforts to the client, and thus alleviating server pressure.
    </p>
  </div>
);

export const collaborativeVideoEditingProps: ProjectCardProps = {
  title: "VideoCollab",
  description: <CollaborativeVideoEditing />,
  summary:
    "A cross-platform multiplayer video editing solution, allowing users to upload, join, transition audio and video clips together.",
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
    { children: "Tailwind", href: "https://tailwindcss.com/" },
    { children: "Electron", href: "https://www.electronjs.org/" },
    { children: "Express.js", href: "https://expressjs.com/" },
    { children: "Socket.io", href: "https://socket.io/" },
    { children: "FFmpeg", href: "https://ffmpeg.org/" },
  ],
};
