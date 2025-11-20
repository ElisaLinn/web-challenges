import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data.js";
import Image from "next/image";

export default function Volume(){
    const router = useRouter();
    const {volumeSlug} = router.query;
    console.log(router.query);

    const VolumeDetail = volumes.find((volume)=>volume.slug === volumeSlug);
 const volume = volumes[volumeIndex];
  const nextVolume = volumes[volumeIndex + 1];
  const previousVolume = volumes[volumeIndex - 1];

  if (!VolumeDetail) {
    return <p>Error you code does not work. Try again</p>;
  }
  const { title, description, cover, books } = VolumeDetail;

export default function Volumes() {
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            The Fellowship of the Ring
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">The Two Towers</Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            The Return of the King
          </Link>
        </li>
      </ul>
    </>
  );
}


  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />
      {previousVolume ? (
        <div>
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        </div>
      ) : null}
    </>
  );
}


