import Link from "next/link";
const mockUrls = [
  "https://utfs.io/f/21ec4367-23eb-4220-98b2-1e46ce726a20-xi9fu2.jpg",
  "https://utfs.io/f/6d17d1be-03a2-4011-9720-d1ca3cd09621-hqylvb.jpg",
  "https://utfs.io/f/02f69656-4357-4b32-96cf-736dff941f33-398xky.48.19.jpeg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
