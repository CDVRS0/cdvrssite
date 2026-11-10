import Link from "next/link";
export default function Footer() {
  return (
    <footer className="artist-footer" id="socials">
      <div className="footer-top">
        <div>
          <p className="eyebrow">Stay close to the music.</p>
          <h2>
            Same world.
            <br />
            <em>Different frequencies.</em>
          </h2>
        </div>
        <div className="footer-socials">
          <a
            href="https://www.instagram.com/camerondankwa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram ↗
          </a>
          <a
            href="https://www.youtube.com/@CDVRSWRLD"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube ↗
          </a>
          <a
            href="https://www.tiktok.com/@cdvrs_"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok ↗
          </a>
          <a
            href="https://open.spotify.com/artist/1C1YzVPfV5sNBGwhMsNFRl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spotify ↗
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CDVRS &amp; Grind And Ghost.</p>
        <p>Music. People. Possibility.</p>
        <Link href="/contact">Contact ↗</Link>
      </div>
    </footer>
  );
}
