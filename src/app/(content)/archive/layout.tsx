export default function ArchiveLayout({
  archive,
  latest,
}: {
  archive: React.ReactNode;
  latest: React.ReactNode;
}) {
  return (
    <div id="archive">
      <h1>News Article</h1>
      <section id="archive-filter">{archive}</section>
      <section id="latest-filter">{latest}</section>
    </div>
  );
}
