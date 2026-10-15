import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bake ñ Love" },
      { name: "description", content: "Bake ñ Love menu." },
      { property: "og:title", content: "Bake ñ Love" },
      { property: "og:description", content: "Bake ñ Love menu." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <iframe className="original-page" src="/bake-love/index.html" title="Bake ñ Love" />;
}
